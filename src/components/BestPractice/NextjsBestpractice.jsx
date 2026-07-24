'use client';
import { CheckCircle } from "lucide-react"; // Removed ArrowRightCircle
import { useState } from "react";
import {
  FileCode,
  Braces,
  Database,
  Globe,
  Server,
} from "lucide-react"; // You can choose any relevant icons

const checklist = [
  {
    title: "Project Structure",
    items: [
      "Use a modular folder structure (e.g., /components, /pages, /lib, /hooks, /utils, /api, /styles).",
      "Keep components small and reusable; split logic from UI where possible.",
      "Place shared logic in /lib or /services instead of cluttering pages/components.",
    ],
  },
  {
    title: "Routing & Pages",
    items: [
      "Use file-based routing under the /pages or App Router (/app directory in Next.js 13+).",
      "Prefer dynamic routes over query strings for SEO and cleaner URLs.",
      "Use shallow routing (router.push with shallow: true) for efficient state updates without full reloads.",
    ],
  },
  {
    title: "Data Fetching",
    items: [
      "Use the appropriate data-fetching method:",
      "getStaticProps (SSG) for static content.",
      "getServerSideProps (SSR) for dynamic content on each request.",
      "getInitialProps only if needed (not recommended in newer versions).",
      "fetch in React Server Components (Next.js 13+).",
      "Cache external API or DB calls when using static generation to reduce build times.",
    ],
  },
  {
    title: "API Routes",
    items: [
      "Place API logic under /pages/api/ or handle it with middleware in /app/api (Next.js 13+).",
      "Keep each handler focused and modular.",
      "Use rate-limiting, input validation, and proper status codes.",
    ],
  },
  {
    title: "Performance Optimization",
    items: [
      "Use Image Optimization via the built-in next/image component.",
      "Enable Automatic Static Optimization by keeping pages pure (no getServerSideProps if not needed).",
      "Use code splitting by dynamic importing components (next/dynamic).",
      "Use lazy loading for off-screen @/components/images.",
      "Minify and compress images and static assets.",
    ],
  },
  {
    title: "SEO & Accessibility",
    items: [
      "Use the next/head component for setting meta tags per page.",
      "Add structured data (JSON-LD) for better SEO visibility.",
      "Ensure all interactive elements are accessible (keyboard-friendly, ARIA attributes).",
      "Use semantic HTML tags (<main>, <nav>, <article>).",
    ],
  },
  {
    title: "Security",
    items: [
      "Validate and sanitize all API inputs.",
      "Set Content Security Policy (CSP) and security headers using next.config.js or middleware.",
      "Avoid exposing secrets to the client; use environment variables with NEXT_PUBLIC_ only when needed.",
      "Disable directory listing on the server.",
    ],
  },
  {
    title: "Environment Configuration",
    items: [
      "Use .env.local, .env.development, .env.production files.",
      "Never commit .env.* to version control.",
      "Only expose NEXT_PUBLIC_ variables to the browser.",
    ],
  },
  {
    title: "Deployment",
    items: [
      "Use Vercel for optimal deployment (first-class support), or host on platforms like Netlify, Render, or custom Node servers.",
      "Enable ISR (Incremental Static Regeneration) for updating static pages without full rebuilds.",
      "Use next build + next start for production-ready local testing.",
    ],
  },
  {
    title: "Tooling & Developer Experience",
    items: [
      "Use TypeScript for type safety and better IDE support.",
      "Add ESLint, Prettier, and Husky for linting and formatting.",
      "Use Jest, Testing Library, or Playwright for testing components and pages.",
      "Monitor performance with tools like Web Vitals, Lighthouse, or Vercel Analytics.",
    ],
  },
  {
    title: "Styling",
    items: [
      "Use CSS Modules, Tailwind CSS, or styled-components (avoid plain global CSS).",
      "Organize styles per component or page.",
      "Avoid unnecessary !important usage and minimize global overrides.",
    ],
  },
];

export default function NextBestPractices() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10">
          <FileCode size={100} className="text-blue-100 rotate-12 z-34" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <Braces size={100} className="text-green-200 -rotate-6 z-34" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Database size={100} className="text-purple-200 rotate-12 z-34" />
        </div>
        <div className="absolute top-20 right-43 z-54">
          <Globe size={100} className="text-pink-200 -rotate-12 z-34" />
        </div>
        <div className="absolute bottom-23 left-34">
          <Server size={100} className="text-yellow-100 rotate-6 z-34" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            Best Practices for Next.js
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist.map((section, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b pb-1">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
