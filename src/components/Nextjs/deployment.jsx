import React from 'react';

function Nextdeployment() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Deploying Your Next.js Website</h1>
        <p className="mb-6 text-lg text-gray-600">
          <span className="font-semibold">For Non-Coders:</span> Deploying a website is like opening a lemonade stand for the world to visit. You take your website (the lemonade recipe) and put it on the internet so everyone can see it! Next.js makes this easy with tools that work like magic.  
          <span className="font-semibold">For Coders:</span> Deployment involves hosting a Next.js application on a server or platform to make it accessible online. Next.js supports various deployment methods, including static exports, server-side rendering, and serverless hosting, with platforms like Vercel, Netlify, and AWS.
        </p>

        {/* Overview of Deployment */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. What is Deployment?</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Deployment is like hanging a poster in a busy town square. You’re putting your website where people can find it on the internet, like a shop opening its doors.  
            <span className="font-semibold">For Coders:</span> Deployment is the process of building, bundling, and hosting a Next.js app on a server or cloud platform. It involves preparing the app (e.g., optimizing assets, prerendering pages) and configuring a hosting environment to serve it to users.
          </p>
        </section>

        {/* Deploying to Vercel */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Deploying to Vercel (Easiest Option)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Vercel is like a friendly shopkeeper who sets up your lemonade stand for you. You give them your website, and they put it online with just a few clicks!  
            <span className="font-semibold">For Coders:</span> Vercel is a platform optimized for Next.js, offering seamless deployment for static, server-side, and serverless apps. It supports automatic scaling, domain management, and previews for pull requests. Deployment is as simple as pushing to a Git repository.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`# Steps to deploy to Vercel
# 1. Install Vercel CLI (if using terminal)
npm install -g vercel

# 2. Navigate to your Next.js project folder
cd my-nextjs-app

# 3. Deploy your app
vercel

# 4. Follow prompts to configure (e.g., link to GitHub, set environment variables)
# Vercel will provide a URL like https://my-nextjs-app.vercel.app

# Example: Deploying via GitHub
# - Push your code to a GitHub repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main

# - Connect repository to Vercel via the Vercel dashboard
# - Vercel auto-deploys on every push to the main branch
`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> These steps are like telling Vercel, “Here’s my website, please show it to the world!” You can do it with a few clicks on their website or by typing commands if you’re feeling adventurous.  
            <span className="font-semibold">For Coders:</span> Vercel CLI or Git integration simplifies deployment. Use <code>vercel --prod</code> for production. Configure environment variables in the Vercel dashboard for API keys or secrets. Vercel supports Incremental Static Regeneration (ISR) and serverless functions out of the box.
          </p>
        </section>

        {/* Deploying to Netlify */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Deploying to Netlify (Great for Static Sites)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Netlify is like a community board where you pin your poster. It’s super easy to use and great for websites that don’t change often, like a blog or portfolio.  
            <span className="font-semibold">For Coders:</span> Netlify excels for static Next.js sites (using <code>next export</code>) but also supports serverless functions. It offers a drag-and-drop interface, Git integration, and features like form handling and edge functions.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`# Steps to deploy to Netlify
# 1. Add export script to package.json for static sites
"scripts": {
  "build": "next build && next export",
  "export": "next export"
}

# 2. Build and export your Next.js app
npm run build

# 3. Deploy using Netlify CLI or drag-and-drop
npm install -g netlify-cli
netlify deploy

# 4. For production deployment
netlify deploy --prod

# Example: Deploying via GitHub
# - Push code to a GitHub repository (similar to Vercel)
# - Connect repository in Netlify dashboard
# - Set build command to 'next build && next export' and publish directory to 'out'
`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Netlify lets you drag your website folder to their website or connect it to GitHub, and it’s online in minutes! It’s like pinning your poster and walking away.  
            <span className="font-semibold">For Coders:</span> For static exports, use <code>next export</code> and set the publish directory to <code>out</code>. For dynamic features (SSR or API routes), use Netlify’s serverless functions or consider Vercel/AWS. Configure redirects in <code>netlify.toml</code> for routing.
          </p>
        </section>

        {/* Deploying to AWS */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Deploying to AWS (Advanced Option)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> AWS is like building your own lemonade stand from scratch. It’s more work, but you can customize everything exactly how you want it!  
            <span className="font-semibold">For Coders:</span> AWS offers flexible deployment via services like Amplify, Elastic Beanstalk, or ECS for Next.js apps. It’s ideal for complex apps requiring custom infrastructure, scalability, or integration with other AWS services.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`# Steps to deploy to AWS Amplify
# 1. Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configure Amplify
amplify configure

# 3. Initialize Amplify in your Next.js project
amplify init

# 4. Add hosting
amplify add hosting

# 5. Deploy your app
amplify publish

# Example: Configure amplify.yml for Next.js
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
    postBuild:
      commands:
        - npm run export # For static sites
  artifacts:
    baseDirectory: out # For static sites
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> AWS is like setting up a big shop with lots of options, but it needs more steps. You might need help from a tech friend to get it running.  
            <span className="font-semibold">For Coders:</span> AWS Amplify simplifies hosting with Git-based deployments. For SSR or serverless, use <code>next start</code> with Elastic Beanstalk or ECS. Configure environment variables and CDN (CloudFront) for performance. Use <code>amplify.yml</code> for build settings.
          </p>
        </section>

        {/* Choosing the Right Platform */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Which Platform Should You Choose?</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Picking a platform is like choosing where to set up your lemonade stand:
            - <strong>Vercel:</strong> Fast and easy, like a pre-built stand.
            - <strong>Netlify:</strong> Great for simple websites, like a community board.
            - <strong>AWS:</strong> Customizable but complex, like building your own shop.  
            <span className="font-semibold">For Coders:</span> Choose based on your project’s needs:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-600">
            <li><strong>Vercel:</strong> Best for most Next.js apps, with seamless support for SSG, SSR, and serverless.</li>
            <li><strong>Netlify:</strong> Ideal for static sites or simple apps with serverless functions.</li>
            <li><strong>AWS:</strong> Use for complex apps needing custom infrastructure or AWS ecosystem integration.</li>
            <li><strong>Other Options:</strong> Consider Render, Heroku, or DigitalOcean for specific use cases.</li>
          </ul>
        </section>

        {/* Final Note */}
        <p className="text-lg italic text-blue-600">
          Whether you’re just starting out or a seasoned developer, Next.js and modern platforms make deploying your website a breeze for any project!
        </p>
      </div>
    </div>
  );
}

export default Nextdeployment;