/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "media-src 'self'",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-src 'self' https://tally.so",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://tally.so",
            ].join('; '),
          },
        ],
      },
    ];
  },
  // Rate limiting configuration placeholder
  // Note: Vercel has built-in rate limiting. For custom rate limiting,
  // consider using middleware or a service like Upstash Redis
  // Example middleware rate limiting can be implemented in middleware.ts
};

module.exports = nextConfig;

