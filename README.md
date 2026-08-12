# Mahacred Firstpaytech

A production-ready corporate website for Mahacred Firstpaytech, positioned as a B2B banking technology partner for co-operative banks, financial institutions and modern businesses.

## Technology

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Static generation, route metadata, sitemap and robots directives

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm start
```

## Vercel deployment

Import the GitHub repository into Vercel. The framework preset is detected automatically. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain so canonical and sitemap URLs use the production host. No other environment variables are required for the current website.

## Content and structure

- Shared page content and navigation: `src/lib/content.ts`
- Homepage: `src/components/home-page.tsx`
- Reusable long-form page renderer: `src/components/content-page.tsx`
- Global visual system: `src/app/globals.css`
- Header and footer: `src/components/header.tsx`, `src/components/footer.tsx`
- Legal content: `src/app/legal/[type]/page.tsx`

Contact email text appears in the footer, contact page and support content. Update those locations after verified business contact details are supplied.

## Enquiry form backend

The enquiry form currently performs client-side validation and displays a transparent demonstration confirmation without transmitting data. To connect a backend, create a secure route handler (for example `src/app/api/enquiry/route.ts`), validate and sanitise fields server-side, add rate limiting and spam protection, and submit to that endpoint from `ContactForm`. Document any provider credentials in `.env.example`; never commit secrets.

## Verified logos and testimonials

No client logos or testimonials are displayed. Add these only after written verification. Create content entries in the central content module and render them through a reusable section component; use optimised local images with `next/image`.

## Compliance note

The website intentionally avoids fabricated approvals, certifications, partners, transaction metrics, testimonials and regulatory claims. Legal and company details should be reviewed by authorised counsel and the business owner before commercial launch.
