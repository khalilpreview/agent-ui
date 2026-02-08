// ──────────────────────────────────────────────────────────────
// ZYNIQ STUDIO — Gnosis UI — Dynamic Branding
// ──────────────────────────────────────────────────────────────
// All brand-related text & URLs are centralised here.
// Override at build-time via NEXT_PUBLIC_BRAND_* env vars.
// ──────────────────────────────────────────────────────────────

export const BRAND = {
  /** Display name shown in sidebar, tab title, meta, etc. */
  name: process.env.NEXT_PUBLIC_BRAND_NAME ?? 'Gnosis',

  /** Primary external URL for the brand */
  url: process.env.NEXT_PUBLIC_BRAND_URL ?? 'https://zyniq.studio',

  /** Documentation URL */
  docsUrl:
    process.env.NEXT_PUBLIC_BRAND_DOCS_URL ?? 'https://docs.zyniq.studio/gnosis',

  /** Agent OS / Gnosis Center URL */
  centerUrl:
    process.env.NEXT_PUBLIC_BRAND_CENTER_URL ?? 'https://os.zyniq.studio',

  /** Short tagline used in meta description */
  tagline:
    process.env.NEXT_PUBLIC_BRAND_TAGLINE ??
    'A modern chat interface for AI agents built with Next.js, Tailwind CSS, and TypeScript.',
} as const

export type Brand = typeof BRAND
