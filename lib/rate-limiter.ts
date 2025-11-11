/**
 * Rate Limiter
 * 
 * Custom in-memory rate limiting implementation using Map.
 * Tracks IP addresses and request counts within a time window.
 * 
 * Note: This is a simple in-memory implementation. For production
 * with multiple server instances, consider using Redis or a
 * distributed rate limiting solution.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Map to store IP addresses and their rate limit data
const rateLimitMap = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Clean up old entries from the rate limit map
 * Removes entries that have exceeded their reset time
 */
function cleanupOldEntries(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

/**
 * Get client IP address from request headers
 * @param headers - Request headers object
 * @returns IP address string or "unknown"
 */
export function getClientIP(headers: Headers): string {
  // Check various headers for IP address
  // x-forwarded-for is set by proxies/load balancers
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  // x-real-ip is set by some proxies
  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }

  // Fallback to unknown if no IP found
  return "unknown";
}

/**
 * Check if an IP address has exceeded the rate limit
 * @param ip - IP address to check
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  // Clean up old entries periodically (every 10th request)
  if (Math.random() < 0.1) {
    cleanupOldEntries();
  }

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // If no entry exists, create one
  if (!entry) {
    const resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, {
      count: 1,
      resetTime,
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime,
    };
  }

  // If entry has expired, reset it
  if (now > entry.resetTime) {
    const resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, {
      count: 1,
      resetTime,
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime,
    };
  }

  // Increment count
  entry.count += 1;
  rateLimitMap.set(ip, entry);

  // Check if limit exceeded
  if (entry.count > MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Reset rate limit for a specific IP (useful for testing or admin actions)
 * @param ip - IP address to reset
 */
export function resetRateLimit(ip: string): void {
  rateLimitMap.delete(ip);
}

/**
 * Get current rate limit status for an IP (without incrementing)
 * @param ip - IP address to check
 * @returns Current rate limit status
 */
export function getRateLimitStatus(ip: string): {
  count: number;
  remaining: number;
  resetTime: number;
} {
  const entry = rateLimitMap.get(ip);
  const now = Date.now();

  if (!entry || now > entry.resetTime) {
    return {
      count: 0,
      remaining: MAX_REQUESTS_PER_WINDOW,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  return {
    count: entry.count,
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - entry.count),
    resetTime: entry.resetTime,
  };
}

