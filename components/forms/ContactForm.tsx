"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";

/**
 * Contact Form Schema
 * Validates all form fields with appropriate rules
 */
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .regex(
      /^[\d\s\-()]+$/,
      "Please enter a valid phone number"
    )
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters"),
  serviceInterest: z.enum(
    [
      "General Inquiry",
      "The Spark Package ($5k+)",
      "The Spectacle Package ($10k+)",
      "The Legend Package ($15k+)",
      "Custom Package",
    ],
    {
      message: "Please select a service interest",
    }
  ),
  projectType: z
    .union([
      z.enum(["Residential", "Commercial", "Event", "Other"]),
      z.literal(""),
    ])
    .optional(),
  budgetRange: z
    .union([
      z.enum([
        "Under $5k",
        "$5k - $10k",
        "$10k - $15k",
        "$15k+",
        "Not sure yet",
      ]),
      z.literal(""),
    ])
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  // Honeypot field (hidden from users)
  website: z.string().max(0, "This field should be empty").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

/**
 * ContactForm Component
 * 
 * Professional consultation form with validation, error handling,
 * and submission states. Includes honeypot spam prevention.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [messageLength, setMessageLength] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: undefined,
      projectType: "",
      budgetRange: "",
      message: "",
      website: "",
    },
  });

  // Watch message field for character counter
  const messageValue = watch("message");
  
  // Update messageLength when message value changes
  useEffect(() => {
    setMessageLength(messageValue?.length || 0);
  }, [messageValue]);

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field
    if (data.website && data.website.length > 0) {
      // Silently reject (appears successful to bots)
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceInterest: data.serviceInterest,
          projectType: data.projectType || undefined,
          budgetRange: data.budgetRange || undefined,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Thank you! We've received your inquiry and will contact you soon.",
      });

      // Reset form after successful submission
      reset();
      setMessageLength(0);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-h3 text-neutral-white mb-6 font-heading">
        Book Your Free Consultation
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field (hidden from users) */}
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-neon-red">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p
              id="name-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-neon-red">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-neon-red">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service Interest Field */}
        <div className="space-y-2">
          <Label htmlFor="serviceInterest">
            Service Interest <span className="text-neon-red">*</span>
          </Label>
          <Select
            id="serviceInterest"
            aria-invalid={errors.serviceInterest ? "true" : "false"}
            aria-describedby={
              errors.serviceInterest ? "serviceInterest-error" : undefined
            }
            {...register("serviceInterest")}
          >
            <option value="">Select a package...</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="The Spark Package ($5k+)">
              The Spark Package ($5k+)
            </option>
            <option value="The Spectacle Package ($10k+)">
              The Spectacle Package ($10k+)
            </option>
            <option value="The Legend Package ($15k+)">
              The Legend Package ($15k+)
            </option>
            <option value="Custom Package">Custom Package</option>
          </Select>
          {errors.serviceInterest && (
            <p
              id="serviceInterest-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.serviceInterest.message}
            </p>
          )}
        </div>

        {/* Project Type Field */}
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <Select
            id="projectType"
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
            {...register("projectType")}
          >
            <option value="">Select project type...</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Event">Event</option>
            <option value="Other">Other</option>
          </Select>
          {errors.projectType && (
            <p
              id="projectType-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget Range Field */}
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Budget Range</Label>
          <Select
            id="budgetRange"
            aria-invalid={errors.budgetRange ? "true" : "false"}
            aria-describedby={
              errors.budgetRange ? "budgetRange-error" : undefined
            }
            {...register("budgetRange")}
          >
            <option value="">Select budget range...</option>
            <option value="Under $5k">Under $5k</option>
            <option value="$5k - $10k">$5k - $10k</option>
            <option value="$10k - $15k">$10k - $15k</option>
            <option value="$15k+">$15k+</option>
            <option value="Not sure yet">Not sure yet</option>
          </Select>
          {errors.budgetRange && (
            <p
              id="budgetRange-error"
              className="text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {errors.budgetRange.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-neon-red">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your vision and space..."
            rows={5}
            maxLength={1000}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={
              errors.message
                ? "message-error"
                : messageLength > 0
                  ? "message-counter"
                  : undefined
            }
            {...register("message")}
          />
          <div className="flex justify-between items-center">
            {errors.message ? (
              <p
                id="message-error"
                className="text-sm text-red-400"
                role="alert"
                aria-live="polite"
              >
                {errors.message.message}
              </p>
            ) : (
              <span id="message-counter" className="text-xs text-neutral-white/50">
                {messageLength} / 1000 characters
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <CTAButton
          type="submit"
          text={isSubmitting ? "Sending..." : "Send Inquiry"}
          variant="primary"
          size="lg"
          className="w-full"
          loading={isSubmitting}
          disabled={!isValid || isSubmitting}
        />

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            role="alert"
            aria-live="polite"
            className={cn(
              "p-4 rounded-md border",
              submitStatus.type === "success"
                ? "bg-green-900/20 border-green-500/50 text-green-400"
                : "bg-red-900/20 border-red-500/50 text-red-400"
            )}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}

