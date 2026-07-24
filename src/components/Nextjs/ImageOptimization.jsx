"use client";

const NextImageOptimizationPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Image Optimization in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Images are like photos in a scrapbook—they make your website beautiful but can slow it down if they’re too big. Next.js helps make your photos load fast and look great.  
          <span className="font-semibold">For Coders:</span> Next.js provides built-in image optimization via the <code>next/image</code> component, automating resizing, format conversion, and lazy loading to improve performance and SEO.
        </p>

        {/* Image Optimization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Why Image Optimization Matters</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Big photos in your scrapbook can make it hard to flip through quickly, especially on a phone. Optimized photos keep your scrapbook (website) fast and fun to explore.  
            <span className="font-semibold">For Coders:</span> Large, unoptimized images increase page load times, hurting user experience and SEO rankings. Optimization reduces file sizes while maintaining quality through resizing, compression, and modern formats.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js is like a smart assistant who shrinks photos without making them blurry, so your website loads faster.  
            <span className="font-semibold">For Coders:</span> Next.js handles optimization server-side, serving appropriately sized images based on device and viewport, improving Core Web Vitals like Largest Contentful Paint (LCP).
          </p>
        </section>

        {/* Using Next.js Image Component */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. The Next.js Image Component</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js has a special tool (like a photo frame) that makes sure your photos fit perfectly on any device, from phones to big screens.  
            <span className="font-semibold">For Coders:</span> The <code>Image</code> component from <code>next/image</code> optimizes images automatically, supporting responsive sizing, lazy loading, and modern formats like WebP and AVIF.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You tell Next.js where your photo is and how big it should be, and it does the rest!  
            <span className="font-semibold">For Coders:</span> The component requires <code>src</code>, <code>alt</code>, <code>width</code>, and <code>height</code> props for optimization and accessibility.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/MyComponent.js
import Image from 'next/image';

export default function MyComponent() {
  return (
    <div>
      <h1>Optimized Image</h1>
      <Image 
        src="/images/scenery.jpg" 
        alt="A beautiful scenery" 
        width={500} 
        height={300} 
        priority={true}
      />
    </div>
  );
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code adds a photo to your scrapbook, sized just right for each visitor’s device.  
            <span className="font-semibold">For Coders:</span> The <code>Image</code> component optimizes <code>/images/scenery.jpg</code> from <code>public/</code>, serving smaller versions for mobile. <code>priority</code> prefetches critical images for faster LCP. Use <code>layout="responsive"</code> in Pages Router for fluid scaling (not needed in App Router).
          </p>
        </section>

        {/* Automatic Image Optimization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How Next.js Optimizes Images</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js is like a photo editor who automatically adjusts your photos to save space and load quickly, without you lifting a finger.  
            <span className="font-semibold">For Coders:</span> The <code>Image</code> component leverages Next.js’s image optimization API to process images at build or request time, enhancing performance.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Resizing:</strong>  
              <span className="font-semibold">Beginners:</span> Next.js shrinks photos for smaller screens, like fitting a big picture into a small frame.  
              <span className="font-semibold">Coders:</span> Generates multiple image sizes based on <code>deviceSizes</code> and viewport, reducing bandwidth usage.
            </li>
            <li>
              <strong>Lazy Loading:</strong>  
              <span className="font-semibold">Beginners:</span> Photos only load when you’re about to see them, like waiting to show a picture until you turn the page.  
              <span className="font-semibold">Coders:</span> Adds <code>loading="lazy"</code> to images below the fold, deferring offscreen image loading to improve initial page speed.
            </li>
            <li>
              <strong>Optimized Formats:</strong>  
              <span className="font-semibold">Beginners:</span> Next.js uses a special photo type that’s smaller but still looks great.  
              <span className="font-semibold">Coders:</span> Converts images to WebP or AVIF for supported browsers, offering better compression than JPEG/PNG.
            </li>
          </ul>
        </section>

        {/* Image Formats */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Supported Image Formats</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js can handle different types of photos, like choosing between a regular snapshot or a super-clear one, and picks the best one for you.  
            <span className="font-semibold">For Coders:</span> Next.js supports multiple image formats, automatically selecting the most efficient format based on browser compatibility.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>JPG/PNG:</strong>  
              <span className="font-semibold">Beginners:</span> Common photo types for everyday pictures or drawings.  
              <span className="font-semibold">Coders:</span> Widely supported but larger in size compared to modern formats.
            </li>
            <li>
              <strong>WebP:</strong>  
              <span className="font-semibold">Beginners:</span> A newer photo type that’s smaller but still looks sharp.  
              <span className="font-semibold">Coders:</span> Offers superior compression and quality, served by Next.js when browsers support it (most modern browsers).
            </li>
            <li>
              <strong>AVIF:</strong>  
              <span className="font-semibold">Beginners:</span> The newest, smallest photo type for cutting-edge devices.  
              <span className="font-semibold">Coders:</span> Provides even better compression than WebP, supported in Chrome, Firefox, and Safari (recent versions).
            </li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You don’t need to change your photos—Next.js picks the best type automatically!  
            <span className="font-semibold">Coders:</span> Next.js’s image pipeline converts images to WebP or AVIF at runtime, falling back to JPG/PNG for unsupported browsers.
          </p>
        </section>

        {/* Customizing Image Optimization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Customizing Image Optimization</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Sometimes you want to choose exactly how your photos are shown, like picking specific frame sizes for your scrapbook.  
            <span className="font-semibold">For Coders:</span> Customize image optimization via <code>next.config.js</code> to control domains, sizes, and advanced settings.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    deviceSizes: [320, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128],
    formats: ['image/webp', 'image/avif'],
  },
};`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This tells Next.js where to find photos and what sizes to use, like organizing your scrapbook for different devices.  
            <span className="font-semibold">For Coders:</span> <code>remotePatterns</code> (App Router) or <code>domains</code> (Pages Router) allow external image sources. <code>deviceSizes</code> and <code>imageSizes</code> define breakpoints for responsive images. <code>formats</code> prioritize WebP and AVIF.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js makes your scrapbook photos load fast and look amazing, so your website is fun for everyone to explore.  
            <span className="font-semibold">For Coders:</span> The <code>Image</code> component and Next.js’s optimization pipeline simplify delivering high-performance images, boosting UX and SEO. Explore advanced features like <code>placeholder="blur"</code> for low-res previews or <code>unoptimized</code> for specific cases.
          </p>
        </section>

        <p className="italic text-blue-300">
          With Next.js, your images will shine brightly and load lightning-fast, delighting users and search engines alike!
        </p>
      </div>
    </div>
  );
};

export default NextImageOptimizationPage;