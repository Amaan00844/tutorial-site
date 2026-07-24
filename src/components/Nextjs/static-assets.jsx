"use client";

const NextStaticAssets = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Managing Static Assets in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Static assets are like ingredients in a pantry—flour, sugar, or spices—that you grab and use as-is to make your dishes (webpages) look and taste great. In Next.js, these are files like images or PDFs that make your website appealing.  
          <span className="font-semibold">For Coders:</span> Static assets in Next.js are unprocessed files (e.g., images, fonts, PDFs) stored in the <code>public/</code> directory, served directly at the root URL, with optimization options via <code>next/image</code> for performance.
        </p>

        {/* What Are Static Assets? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Static Assets?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static assets are like ready-to-use ingredients you keep in your pantry. They don’t need cooking (processing) and can be added to your dish (website) right away, like a picture or a recipe PDF.  
            <span className="font-semibold">For Coders:</span> Static assets are files like images, fonts, or documents that require no server-side processing, stored in the <code>public/</code> directory and accessible via direct URLs.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> In Next.js, you store these ingredients in a special pantry called “public,” and anyone can grab them by asking for their name, like <code>/logo.png</code>.  
            <span className="font-semibold">For Coders:</span> Files in <code>public/</code> map to the root URL (e.g., <code>public/logo.png</code> → <code>/logo.png</code>). These assets are ideal for content that remains unchanged, such as logos, icons, or static downloads.
          </p>
        </section>

        {/* Using Static Assets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Example: Using a Static Image</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Adding a picture to your website is like putting a photo on a plate for decoration. You just tell Next.js where the photo is, and it appears.  
            <span className="font-semibold">For Coders:</span> Static assets can be referenced directly in JSX or optimized using the <code>Image</code> component from <code>next/image</code> for better performance.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/Logo.tsx
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <h2>Bakery Logo</h2>
      {/* Basic static image */}
      <img src="/logo.png" alt="Bakery Logo" width="200" />
      {/* Optimized with next/image */}
      <Image
        src="/logo.png"
        alt="Bakery Logo"
        width={200}
        height={200}
        priority
        sizes="(max-width: 768px) 100vw, 200px"
      />
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This shows a logo from your pantry, and the second option makes it load faster, like pre-slicing ingredients for quick serving.  
            <span className="font-semibold">For Coders:</span> The <code>img</code> tag serves <code>/public/logo.png</code> directly, while <code>Image</code> optimizes with lazy loading, WebP/AVIF formats, and responsive sizing. Use <code>priority</code> for above-the-fold images to improve LCP (Largest Contentful Paint).
          </p>
        </section>

        {/* Organizing Static Assets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Organizing Your Static Assets</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You can organize your pantry with shelves, like one for pictures and another for PDFs, to keep everything neat.  
            <span className="font-semibold">For Coders:</span> Subdirectories in <code>public/</code> enable structured asset organization, with URLs reflecting the folder hierarchy.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`public/
  images/
    logo.png
    hero.jpg
  documents/
    menu.pdf
  fonts/
    bakery-font.woff2`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You grab these ingredients at <code>/images/hero.jpg</code> or <code>/documents/menu.pdf</code>, like picking from the right shelf.  
            <span className="font-semibold">For Coders:</span> Access assets via URLs like <code>/images/logo.png</code> or <code>/fonts/bakery-font.woff2</code>. Use subdirectories to maintain clarity, supporting images, PDFs, fonts, or static JSON files for configuration.
          </p>
        </section>

        {/* Static vs Dynamic Assets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Static vs Dynamic Assets</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static ingredients, like a fixed spice mix, are great for things that don’t change. For ingredients that vary, like fresh daily produce, you need a different tool.  
            <span className="font-semibold">For Coders:</span> Static assets are best for unchanging files, while dynamic assets (e.g., user-uploaded images or API-driven content) require <code>next/image</code> with remote URLs or dynamic routes.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/dynamic-image/page.tsx
import Image from 'next/image';

type DynamicImageProps = {
  params: { id: string };
};

export default async function DynamicImage({ params }: DynamicImageProps) {
  // Simulate fetching from an API
  const imageUrl = await fetchImageUrl(params.id); // e.g., "https://example.com/images/123.jpg"
  return (
    <Image
      src={imageUrl}
      alt="Dynamic Image"
      width={300}
      height={200}
      sizes="(max-width: 768px) 100vw, 300px"
    />
  );
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This shows a fresh ingredient (image) that changes daily, using a special tool to keep it fast and fresh.  
            <span className="font-semibold">For Coders:</span> Use <code>next/image</code> for dynamic images from external sources, configuring <code>remotePatterns</code> in <code>next.config.js</code> for security. The <code>sizes</code> prop ensures responsive layouts, optimizing performance.
          </p>
        </section>

        {/* Best Practices for Static Assets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Best Practices for Static Assets</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Keep your pantry organized and use tools to make your ingredients (assets) quick to grab, so your dishes (pages) are ready fast.  
            <span className="font-semibold">For Coders:</span> Optimize static assets for performance and maintainability, leveraging Next.js features and best practices.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Beginners:</span> Store pictures, PDFs, or fonts in the “public” pantry.  
              <span className="font-semibold">Coders:</span> Place all static assets in <code>public/</code> for direct URL access.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Use names like <code>/filename</code> to grab them.  
              <span className="font-semibold">Coders:</span> Reference assets with root-relative paths (e.g., <code>/images/hero.jpg</code>).
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Use the special picture tool for faster serving.  
              <span className="font-semibold">Coders:</span> Use <code>next/image</code> for image optimization, including lazy loading and modern formats (WebP/AVIF).
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Keep your pantry tidy with shelves (folders).  
              <span className="font-semibold">Coders:</span> Organize <code>public/</code> with subdirectories and compress assets to reduce load times.
            </li>
          </ul>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static assets are like a well-stocked pantry, making your website look delicious and load quickly for every visitor.  
            <span className="font-semibold">For Coders:</span> Next.js simplifies static asset management with the <code>public/</code> directory and <code>next/image</code> for optimization. Use structured organization, optimize assets for performance, and configure <code>next.config.js</code> for dynamic sources to build fast, scalable apps.
          </p>
        </section>

        <p className="italic text-blue-300">
          Stock your Next.js pantry with static assets to serve up a fast, visually stunning website that delights every visitor!
        </p>
      </div>
    </div>
  );
};

export default NextStaticAssets;