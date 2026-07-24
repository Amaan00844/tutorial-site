const fs = require('fs');
const path = require('path');

// Test content for each file
const testContent = {
    'intermediate/5': {
        topic: "Performance Optimization",
        checks: [
            { pattern: /React\.memo\s*\(/i, message: "✅ Uses React.memo for component optimization", score: 50 },
            { pattern: /useCallback|useMemo/i, message: "✅ Uses useCallback or useMemo for performance", score: 50 }
        ]
    },
    'intermediate/6': {
        topic: "Authentication Integration",
        checks: [
            { pattern: /import\s+{.*useSession.*}\s+from\s+['"]next-auth\/react['"]/i, message: "✅ Imports useSession from next-auth/react", score: 50 },
            { pattern: /useSession\s*\(\s*\)/i, message: "✅ Uses useSession hook", score: 50 }
        ]
    },
    'intermediate/7': {
        topic: "Database Integration",
        checks: [
            { pattern: /import\s+{.*PrismaClient.*}\s+from\s+['"]@prisma\/client['"]/i, message: "✅ Imports PrismaClient", score: 50 },
            { pattern: /export\s+async\s+function\s+getServerSideProps\s*\(\)\s*{[^}]*prisma\./i, message: "✅ Uses Prisma in getServerSideProps", score: 50 }
        ]
    },
    'intermediate/8': {
        topic: "State Management",
        checks: [
            { pattern: /import\s+{.*useState.*}\s+from\s+['"]react['"]/i, message: "✅ Imports useState from react", score: 50 },
            { pattern: /const\s*\[\s*\w+,\s*set\w+\s*\]\s*=\s*useState\s*\(/i, message: "✅ Uses useState hook", score: 50 }
        ]
    },
    'intermediate/9': {
        topic: "Testing Strategies",
        checks: [
            { pattern: /import\s+{.*render.*}\s+from\s+['"]@testing-library\/react['"]/i, message: "✅ Imports render from @testing-library/react", score: 50 },
            { pattern: /render\s*\(\s*<\w+/i, message: "✅ Uses render for component testing", score: 50 }
        ]
    },
    'intermediate/10': {
        topic: "PWA Implementation",
        checks: [
            { pattern: /import\s+{.*Workbox.*}\s+from\s+['"]workbox-window['"]/i, message: "✅ Imports Workbox for PWA", score: 50 },
            { pattern: /<Head>.*<link\s+rel=['"]manifest['"]/i, message: "✅ Includes manifest link in Head", score: 50 }
        ]
    },
    'hard/1': {
        topic: "App Router (Next.js 13+)",
        checks: [
            { pattern: /'use\s+client'/i, message: "✅ Uses 'use client' directive for App Router", score: 50 },
            { pattern: /export\s+default\s+function\s+\w+\s*\(\)\s*{[^}]*return\s*\(\s*<\w+>.*<\/\w+>\s*\)/i, message: "✅ Defines client component with JSX", score: 50 }
        ]
    },
    'hard/2': {
        topic: "Server Components",
        checks: [
            { pattern: /^(?!.*'use\s+client').*$/i, message: "✅ Defines server component (no 'use client' directive)", score: 50 },
            { pattern: /export\s+async\s+function\s+\w+\s*\(\)\s*{[^}]*await/i, message: "✅ Uses async/await in server component", score: 50 }
        ]
    },
    'hard/3': {
        topic: "Edge Runtime",
        checks: [
            { pattern: /export\s+const\s+runtime\s*=\s*['"]edge['"]/i, message: "✅ Specifies edge runtime", score: 50 },
            { pattern: /export\s+default\s+async\s+function\s*\(req,\s*res\)\s*{/i, message: "✅ Defines API route for edge runtime", score: 50 }
        ]
    },
    'hard/4': {
        topic: "Advanced Caching Strategies",
        checks: [
            { pattern: /export\s+const\s+revalidate\s*=\s*\d+/i, message: "✅ Specifies revalidate for caching", score: 50 },
            { pattern: /export\s+async\s+function\s+getStaticProps\s*\(\)\s*{[^}]*revalidate:/i, message: "✅ Uses revalidate in getStaticProps", score: 50 }
        ]
    },
    'hard/5': {
        topic: "Custom Webpack Configuration",
        checks: [
            { pattern: /module\.exports\s*=\s*{.*webpack:/i, message: "✅ Defines webpack configuration", score: 50 },
            { pattern: /config\.module\.rules\.push\s*\(/i, message: "✅ Adds custom module rules", score: 50 }
        ]
    },
    'hard/6': {
        topic: "Streaming and Suspense",
        checks: [
            { pattern: /import\s+{.*Suspense.*}\s+from\s+['"]react['"]/i, message: "✅ Imports Suspense from react", score: 50 },
            { pattern: /<Suspense\s+fallback\s*=\s*{[^}]+}>.*<\/Suspense>/i, message: "✅ Uses Suspense with fallback", score: 50 }
        ]
    },
    'hard/7': {
        topic: "Micro-frontends Architecture",
        checks: [
            { pattern: /module\.exports\s*=\s*{.*federation:/i, message: "✅ Defines Module Federation configuration", score: 50 },
            { pattern: /remotes\s*:\s*{/i, message: "✅ Configures remotes for Module Federation", score: 50 }
        ]
    },
    'hard/8': {
        topic: "Advanced API Routes",
        checks: [
            { pattern: /import\s+{.*gql.*}\s+from\s+['"]graphql-tag['"]/i, message: "✅ Imports gql from graphql-tag", score: 50 },
            { pattern: /export\s+default\s+async\s+function\s*\(req,\s*res\)\s*{[^}]*graphql/i, message: "✅ Implements GraphQL in API route", score: 50 }
        ]
    },
    'hard/9': {
        topic: "Performance Monitoring",
        checks: [
            { pattern: /import\s+{.*useEffect.*}\s+from\s+['"]react['"]/i, message: "✅ Imports useEffect for monitoring", score: 50 },
            { pattern: /useEffect\s*\(\s*()\s*=>\s*{[^}]*performance/i, message: "✅ Uses useEffect for performance monitoring", score: 50 }
        ]
    },
    'hard/10': {
        topic: "Enterprise Deployment",
        checks: [
            { pattern: /process\.env\.NEXT_PUBLIC_\w+/i, message: "✅ Uses NEXT_PUBLIC_ environment variables", score: 50 },
            { pattern: /export\s+const\s+dynamic\s*=\s*['"]force-static['"]/i, message: "✅ Configures dynamic for static rendering", score: 50 }
        ]
    }
};

// Function to generate test content
function generateTestContent(filePath, topic, checks) {
    return `"use client";

console.log("🧪 Testing: ${topic}");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

${checks.map(check => `        if (${check.pattern.toString()}.test(userCode)) {
            checks.push("${check.message}");
            score += ${check.score};
        } else {
            checks.push("❌ Missing ${check.message.replace('✅ ', '').toLowerCase()}");
        }`).join('\n')}

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? \`Great! Score: \${result.score}/100\`
            : \`Score: \${result.score}/100 - Include ${checks.map(c => c.message.replace('✅ ', '').toLowerCase()).join(' and ')}\`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "${topic}", language: "javascript" }
    };
}

console.log("✅ Test ready for: ${topic}");`;
}

// Update all files
Object.entries(testContent).forEach(([filePath, config]) => {
    const fullPath = path.join(__dirname, 'public', 'exercise', 'nextjs', filePath, 'tests.js');
    const content = generateTestContent(filePath, config.topic, config.checks);
    
    try {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Updated: ${filePath}/tests.js`);
    } catch (error) {
        console.error(`❌ Error updating ${filePath}/tests.js:`, error.message);
    }
});

console.log('\n🎉 All Next.js test files have been updated!');



