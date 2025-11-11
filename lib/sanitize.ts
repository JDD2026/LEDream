/**
 * Input Sanitization Utilities
 * 
 * Custom implementation for sanitizing user inputs to prevent XSS attacks.
 * Strips HTML tags and dangerous characters while preserving legitimate content.
 */

/**
 * Sanitizes a string by removing HTML tags and dangerous characters
 * @param input - The string to sanitize
 * @returns Sanitized string safe for display and storage
 */
export function sanitizeString(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, "");

  // Remove potentially dangerous characters
  // Allow: letters, numbers, spaces, common punctuation
  sanitized = sanitized.replace(/[<>]/g, "");

  // Remove script tags and event handlers (extra safety)
  sanitized = sanitized
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/<script/gi, "")
    .replace(/<\/script>/gi, "");

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
}

/**
 * Sanitizes an object by recursively sanitizing all string values
 * @param obj - The object to sanitize
 * @returns Sanitized object with all string values cleaned
 */
export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T
): T {
  const sanitized = { ...obj };

  for (const key in sanitized) {
    if (typeof sanitized[key] === "string") {
      sanitized[key] = sanitizeString(sanitized[key] as string) as T[Extract<
        keyof T,
        string
      >];
    } else if (
      typeof sanitized[key] === "object" &&
      sanitized[key] !== null &&
      !Array.isArray(sanitized[key])
    ) {
      sanitized[key] = sanitizeObject(
        sanitized[key] as Record<string, unknown>
      ) as T[Extract<keyof T, string>];
    } else if (Array.isArray(sanitized[key])) {
      const arr = sanitized[key] as unknown[];
      sanitized[key] = arr.map((item) =>
        typeof item === "string"
          ? sanitizeString(item)
          : typeof item === "object" && item !== null
            ? sanitizeObject(item as Record<string, unknown>)
            : item
      ) as T[Extract<keyof T, string>];
    }
  }

  return sanitized;
}

/**
 * Validates and sanitizes email format
 * @param email - Email string to validate and sanitize
 * @returns Sanitized email or empty string if invalid
 */
export function sanitizeEmail(email: string): string {
  const sanitized = sanitizeString(email).toLowerCase().trim();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) {
    return "";
  }

  return sanitized;
}

/**
 * Validates and sanitizes phone number format
 * @param phone - Phone string to validate and sanitize
 * @returns Sanitized phone or empty string if invalid
 */
export function sanitizePhone(phone: string): string {
  // Remove all non-digit characters except +, spaces, hyphens, and parentheses
  let sanitized = phone.replace(/[^\d+\s\-()]/g, "");

  // Remove spaces and format
  sanitized = sanitized.replace(/\s/g, "");

  // Basic phone validation (US format: 10 digits, optionally with country code)
  const phoneRegex = /^(\+?1)?[\d\-()]{10,}$/;
  if (!phoneRegex.test(sanitized)) {
    return "";
  }

  return sanitized;
}

