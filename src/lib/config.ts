/**
 * src/lib/config.ts
 * Centralised site-level configuration constants.
 *
 * SITE_URL: Set NEXT_PUBLIC_SITE_URL in your environment to override.
 * Update the fallback to match your production domain before deploying.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-ravi-nakrani.vercel.app";
