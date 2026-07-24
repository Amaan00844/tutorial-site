"use client"

import {
    FaCode,
    FaCheckSquare,
    FaVolumeUp,
    FaBars,
    FaSearch,
    FaUniversalAccess,
    FaWindowMaximize,
    FaList,
    FaImage,
    FaShieldAlt,
} from "react-icons/fa";

import { useState } from "react";
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

const loadExerciseFiles = async (level) => {
    try {
        const response = await fetch(`/exercise/nextjs/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'page.jsx': `// Next.js Exercise Workspace
// Write your Next.js page component here

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Next.js Programming!</h1>
            
            {/* Complete the exercise requirements below: */}
            
        </div>
    );
}`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'page.jsx': 'export default function HomePage() {\n    return <div><h1>Hello, Next.js!</h1></div>;\n}',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Next.js Pages and Routing",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create pages and understand Next.js file-based routing system.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Static Site Generation (SSG)",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Generate static pages using getStaticProps and getStaticPaths.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Server-Side Rendering (SSR)",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement server-side rendering with getServerSideProps.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. API Routes",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create API endpoints using Next.js API routes.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Dynamic Routing",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement dynamic routes with parameters and catch-all routes.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Image Optimization",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use Next.js Image component for optimized image loading.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. CSS and Styling",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Style Next.js applications with CSS modules and styled-jsx.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Head and Metadata",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Manage document head and metadata with Next.js Head component.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Environment Variables",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Configure and use environment variables in Next.js.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Deployment",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Deploy Next.js applications to Vercel and other platforms.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Incremental Static Regeneration",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Implement ISR for dynamic content with static generation.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Middleware",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create middleware for authentication and request processing.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Custom App and Document",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Customize the App and Document components for global functionality.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Internationalization (i18n)",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Add multi-language support with Next.js i18n features.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Performance Optimization",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Optimize Next.js applications for performance and Core Web Vitals.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Authentication Integration",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Integrate authentication with NextAuth.js and providers.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Database Integration",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Connect Next.js with databases using Prisma and other ORMs.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. State Management",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement state management with Redux, Zustand, and Context API.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Testing Strategies",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Test Next.js applications with Jest, Testing Library, and Cypress.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. PWA Implementation",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Convert Next.js apps to Progressive Web Apps.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. App Router (Next.js 13+)",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Use the new App Router with layouts and server components.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Server Components",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Implement React Server Components in Next.js applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Edge Runtime",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Deploy functions to the Edge Runtime for global performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Advanced Caching Strategies",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement sophisticated caching strategies for optimal performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Custom Webpack Configuration",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Customize webpack configuration for advanced build optimizations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Streaming and Suspense",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement streaming SSR with React Suspense boundaries.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Micro-frontends Architecture",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Build micro-frontends architecture with Module Federation.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Advanced API Routes",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build complex API routes with GraphQL and real-time subscriptions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Performance Monitoring",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement comprehensive performance monitoring and analytics.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Enterprise Deployment",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Deploy Next.js at enterprise scale with Docker and Kubernetes.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'page.jsx': `// Next.js Exercise Workspace
// Write your Next.js page component here

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Next.js Programming!</h1>
            
            {/* Complete the exercise requirements below: */}
            
        </div>
    );
}`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function NextjsExerciseMonacoPlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(basicMenu[0].task);

    const setSidebarContent = (event) => {
        const value = event.target.value.toLowerCase();
        switch (value) {
            case 'basic':
                setMenu(basicMenu);
                setTask(basicMenu[0].task);
                break;
            case 'intermediate':
                setMenu(intermediateMenu);
                setTask(intermediateMenu[0].task);
                break;
            case 'hard':
                setMenu(hardMenu);
                setTask(hardMenu[0].task);
                break;
        }
    };

    return (
        <MonacoTestPlatform
            menuItems={menu}
            files={sandboxFiles}
            filesOpened="page.jsx"
            setSidebarContent={setSidebarContent}
            title="Next.js"
            language="nextjs"
            task={task}
        />
    );
}