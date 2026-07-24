"use client";

const NextStaticFilesAndAssetsPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Static Files and Assets in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Static files are like decorations in a restaurant—posters, menus, or lights—that stay the same and are ready to show off without any cooking. In Next.js, these are files like images or PDFs you can use to make your website look great.  
          <span className="font-semibold">For Coders:</span> Static files in Next.js are unprocessed assets (e.g., images, fonts, PDFs) stored in the <code>public/</code> directory, served directly at the root URL, ideal for unchanging content, with optimization options via <code>next/image</code>.
        </p>

        {/* What Are Static Files? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Static Files?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static files are like ready-made decorations you hang in your restaurant. They don’t need changes and can be shown to customers as-is, like a logo or a menu PDF.  
            <span className="font-semibold">For Coders:</span> Static files are assets like images, fonts, PDFs, or JavaScript files that require no server-side processing, stored in the <code>public/</code> directory and served directly via URL paths.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> In Next.js, you put these decorations in a special “public” box, and anyone can see them by asking for their address, like <code>/logo.png</code>.  
            <span className="font-semibold">For Coders:</span> Files in <code>public/</code> are accessible at the root URL (e.g., <code>public/logo.png</code> → <code>/logo.png</code>). This folder is ideal for assets that don’t need dynamic handling or preprocessing.
          </p>
        </section>

        {/* Example: Using an Image */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Example: Using an Image</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Adding a picture to your website is like hanging a poster in your restaurant. You just tell Next.js where the poster is, and it shows up.  
            <span className="font-semibold">For Coders:</span> Static images can be referenced directly in HTML or JSX using the <code>src</code> attribute, or optimized using the <code>Image</code> component from <code>next/image</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/Logo.js
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <h1>Restaurant Logo</h1>
      {/* Basic static image */}
      <img src="/logo.png" alt="Site Logo" width="200" />
      {/* Optimized with next/image */}
      <Image 
        src="/logo.png" 
        alt="Site Logo" 
        width={200} 
        height={200} 
        priority
      />
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This shows your restaurant’s logo, stored in the “public” box, on your webpage. The second option makes it load faster!  
            <span className="font-semibold">For Coders:</span> The <code>img</code> tag serves <code>/public/logo.png</code> directly. The <code>Image</code> component optimizes the image with resizing, lazy loading, and WebP/AVIF formats. <code>priority</code> prefetches for critical images. Use <code>Image</code> for better performance.
          </p>
        </section>

        {/* Folder Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Organizing Your Static Files</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You can organize your decorations in folders inside the “public” box, like keeping posters in one drawer and menus in another, to stay tidy.  
            <span className="font-semibold">For Coders:</span> Subdirectories in <code>public/</code> allow structured organization of assets, with URLs reflecting the folder hierarchy.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`public/
  images/
    hero.jpg
    logo.png
  docs/
    guide.pdf
  fonts/
    custom-font.woff2`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You can find these at <code>/images/hero.jpg</code> or <code>/docs/guide.pdf</code>, like picking decorations from the right drawer.  
            <span className="font-semibold">For Coders:</span> Access files via URLs like <code>/images/hero.jpg</code> or <code>/fonts/custom-font.woff2</code>. This structure keeps assets modular and maintainable, supporting images, PDFs, fonts, or even static JSON files.
          </p>
        </section>

        {/* Static vs Dynamic Assets */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Static vs Dynamic Assets</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static decorations, like a fixed menu board, are perfect for things that stay the same. For decorations that change, like a daily special, you need a different tool.  
            <span className="font-semibold">For Coders:</span> Static assets are best for unchanging files, while dynamic assets (e.g., user-uploaded images or API-driven content) require <code>next/image</code> with remote URLs or dynamic routes.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/dynamic-image/page.js
import Image from 'next/image';

export default async function DynamicImage({ params }) {
  const imageUrl = await fetchImageFromApi(params.id); // Example API call
  return (
    <Image 
      src={imageUrl} 
      alt="Dynamic Image" 
      width={300} 
      height={200} 
      sizes="(max-width: 768px) 100vw, 300px"
    />
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This shows a picture that changes, like a daily special, using a special Next.js tool to keep it fast.  
            <span className="font-semibold">For Coders:</span> Use <code>next/image</code> for dynamic images from APIs or CDNs, with <code>sizes</code> for responsive layouts. Configure <code>remotePatterns</code> in <code>next.config.js</code> for external URLs.
          </p>
        </section>

        {/* Final Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Final Tips</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Keep your restaurant’s decorations organized and use Next.js’s tools to make them shine without slowing down your website.  
            <span className="font-semibold">For Coders:</span> Leverage <code>public/</code> for static assets and <code>next/image</code> for optimization, ensuring performance and scalability.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Beginners:</span> Store pictures, PDFs, or fonts in the “public” box.  
              <span className="font-semibold">Coders:</span> Place all static assets in <code>public/</code> for direct access.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Use addresses like <code>/filename</code> to show them.  
              <span className="font-semibold">Coders:</span> Reference assets with root-relative paths (e.g., <code>/images/hero.jpg</code>).
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Use the special picture tool for faster loading.  
              <span className="font-semibold">Coders:</span> Use <code>Image</code> component for images needing optimization, lazy loading, or responsive sizing.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Keep your box tidy with folders.  
              <span className="font-semibold">Coders:</span> Organize <code>public/</code> with subdirectories and ensure assets are lightweight to minimize load times.
            </li>
          </ul>
        </section>

        <p className="italic text-blue-300">
          With Next.js, your static assets will decorate your website beautifully and efficiently, delighting visitors with a fast, polished experience!
        </p>
      </div>
    </div>
  );
};

export default NextStaticFilesAndAssetsPage;