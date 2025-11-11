import { NextRequest, NextResponse } from "next/server";
import { sanitizeString, sanitizeEmail, sanitizePhone } from "@/lib/sanitize";
import { getClientIP, checkRateLimit } from "@/lib/rate-limiter";

/**
 * Contact Form Submission Types
 */
interface ContactFormSubmission {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  projectType?: string;
  budgetRange?: string;
  message: string;
}

/**
 * API Response Types
 */
interface SuccessResponse {
  success: true;
  message: string;
}

interface ErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

type ApiResponse = SuccessResponse | ErrorResponse;

/**
 * Validate contact form data
 * @param data - Form data to validate
 * @returns Validation errors or null if valid
 */
function validateFormData(
  data: Partial<ContactFormSubmission>
): Record<string, string[]> | null {
  const errors: Record<string, string[]> = {};

  // Required fields
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters"];
  }

  if (!data.email || typeof data.email !== "string") {
    errors.email = ["Email is required"];
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = ["Please enter a valid email address"];
    }
  }

  if (!data.phone || typeof data.phone !== "string") {
    errors.phone = ["Phone is required"];
  } else {
    const phoneRegex = /^[\d\s\-()]+$/;
    if (!phoneRegex.test(data.phone) || data.phone.replace(/\D/g, "").length < 10) {
      errors.phone = ["Please enter a valid phone number"];
    }
  }

  if (
    !data.serviceInterest ||
    typeof data.serviceInterest !== "string" ||
    ![
      "General Inquiry",
      "The Spark Package ($5k+)",
      "The Spectacle Package ($10k+)",
      "The Legend Package ($15k+)",
      "Custom Package",
    ].includes(data.serviceInterest)
  ) {
    errors.serviceInterest = ["Please select a valid service interest"];
  }

  if (!data.message || typeof data.message !== "string") {
    errors.message = ["Message is required"];
  } else if (data.message.trim().length < 10) {
    errors.message = ["Message must be at least 10 characters"];
  } else if (data.message.length > 1000) {
    errors.message = ["Message must be less than 1000 characters"];
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Placeholder email sending function
 * 
 * TODO: Add email service integration here
 * 
 * Recommended services:
 * - Resend (https://resend.com) - Simple, developer-friendly
 * - SendGrid (https://sendgrid.com) - Enterprise-grade
 * - AWS SES (https://aws.amazon.com/ses/) - Cost-effective at scale
 * 
 * Example with Resend:
 * ```typescript
 * import { Resend } from 'resend';
 * 
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * 
 * await resend.emails.send({
 *   from: 'LEDream <contact@ledream.com>',
 *   to: ['jesterdapperdan@gmail.com'],
 *   subject: `New Consultation Request: ${data.name}`,
 *   html: emailTemplate(data),
 * });
 * ```
 */
async function sendEmail(data: ContactFormSubmission): Promise<void> {
  // Placeholder implementation - logs to console
  console.log("=== NEW CONTACT FORM SUBMISSION ===");
  console.log("Name:", data.name);
  console.log("Email:", data.email);
  console.log("Phone:", data.phone);
  console.log("Service Interest:", data.serviceInterest);
  console.log("Project Type:", data.projectType || "Not specified");
  console.log("Budget Range:", data.budgetRange || "Not specified");
  console.log("Message:", data.message);
  console.log("Timestamp:", new Date().toISOString());
  console.log("===================================");

  // In production, replace this with actual email service integration
  // For now, we'll simulate a successful email send
  await new Promise((resolve) => setTimeout(resolve, 500));
}

/**
 * POST /api/contact
 * 
 * Handles contact form submissions with:
 * - Rate limiting (5 requests per hour per IP)
 * - Input sanitization
 * - Honeypot spam prevention
 * - Server-side validation
 * - Email notification (placeholder)
 */
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request.headers);

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIP);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format. Please check your submission.",
        },
        { status: 400 }
      );
    }

    // Check for honeypot field (spam prevention)
    if (
      body &&
      typeof body === "object" &&
      "website" in body &&
      body.website &&
      typeof body.website === "string" &&
      body.website.length > 0
    ) {
      // Silently reject (appears successful to bots)
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your submission.",
        },
        { status: 200 }
      );
    }

    // Extract and sanitize form data
    const rawData = body as Partial<ContactFormSubmission & { website?: string }>;

    const sanitizedData: Partial<ContactFormSubmission> = {
      name: rawData.name ? sanitizeString(rawData.name) : "",
      email: rawData.email ? sanitizeEmail(rawData.email) : "",
      phone: rawData.phone ? sanitizePhone(rawData.phone) : "",
      serviceInterest: rawData.serviceInterest
        ? sanitizeString(rawData.serviceInterest)
        : "",
      projectType: rawData.projectType
        ? sanitizeString(rawData.projectType)
        : undefined,
      budgetRange: rawData.budgetRange
        ? sanitizeString(rawData.budgetRange)
        : undefined,
      message: rawData.message ? sanitizeString(rawData.message) : "",
    };

    // Validate sanitized data
    const validationErrors = validateFormData(sanitizedData);
    if (validationErrors) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in your submission.",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Ensure all required fields are present after sanitization
    if (
      !sanitizedData.name ||
      !sanitizedData.email ||
      !sanitizedData.phone ||
      !sanitizedData.serviceInterest ||
      !sanitizedData.message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields. Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Send email notification (placeholder)
    try {
      await sendEmail(sanitizedData as ContactFormSubmission);
    } catch (emailError) {
      // Log error but don't fail the request
      console.error("Failed to send email notification:", emailError);
      // In production, you might want to queue the email or use a retry mechanism
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your inquiry! We've received your message and will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging (don't expose system details to client)
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

