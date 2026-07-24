// Test for Advanced E-Commerce Platform
// JavaScript test that validates Next.js code for an advanced e-commerce platform

console.log("🧪 Testing: Advanced E-Commerce Platform");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        // Check for Server Components
        if (/"use server"/.test(userCode) || /async\s+function.*ServerComponent/.test(userCode)) {
            checks.push("✅ Uses Server Components");
            score += 25;
        } else {
            checks.push("❌ Missing Server Components");
        }

        // Check for payment integration (e.g., Stripe)
        if (/import\s+.*from\s*['"]@stripe\/stripe-js['"]/.test(userCode) || /stripe/.test(userCode)) {
            checks.push("✅ Uses payment integration (e.g., Stripe)");
            score += 25;
        } else {
            checks.push("❌ Missing payment integration");
        }

        // Check for JSX return with e-commerce elements
        if (/return\s*\(/.test(userCode) && /<div.*?product|<div.*?cart|<div.*?review/.test(userCode)) {
            checks.push("✅ Returns JSX with e-commerce elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with e-commerce elements");
        }

        // Check for Tailwind CSS classes
        if (/className\s*=\s*['"].*?\b(bg|text|font|p|m)-/.test(userCode)) {
            checks.push("✅ Uses Tailwind CSS for styling");
            score += 25;
        } else {
            checks.push("❌ Missing Tailwind CSS classes");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Create an advanced e-commerce platform with Server Components and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced E-Commerce Platform", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Advanced E-Commerce Platform");