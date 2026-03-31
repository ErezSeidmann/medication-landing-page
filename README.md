# Medication Landing Page

A minimal Next.js + Tailwind page that introduces the medication check-in service and captures waitlist sign-ups.

## Getting started

1. `npm install` (requires network access to `registry.npmjs.org`)
2. `npm run dev`

## Key files

- `app/page.tsx`: hero, features, benefits, and waitlist sections with the thank-you message.
- `app/api/waitlist/route.ts`: mock API route that returns a friendly confirmation message.
- `app/globals.css`: Tailwind setup for the calm background and typography.
- `tailwind.config.js` / `postcss.config.js`: basic Tailwind + PostCSS wiring.

## Notes

This project intentionally keeps the API route and layout simple so it is easy for a beginner to follow. You can edit the sections in `app/page.tsx` and tweak the colors in `tailwind.config.js` without digging into advanced Next.js features.

