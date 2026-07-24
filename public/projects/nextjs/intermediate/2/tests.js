// Test for E-Commerce Cart Page
// JavaScript test that validates Next.js code for an e-commerce cart page

console.log("🧪 Testing: E-Commerce Cart Page");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        // Check for useState import
        if (/import\s*{\s*useState\s*}\s*from\s*['"]react['"]/.test(userCode)) {
            checks.push("✅ Imports useState from React");
            score += 20;
        } else {
            checks.push("❌ Missing useState import");
        }

        // Check for useState usage
        if (/useState\s*\(/.test(userCode)) {
            checks.push("✅ Uses useState for state management");
            score += 25;
        } else {
            checks.push("❌ Missing useState usage");
        }

        // Check for JSX return with cart elements
        if (/return\s*\(/.test(userCode) && /<ul|<li|<div.*?cart/.test(userCode)) {
            checks.push("✅ Returns JSX with cart elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with cart elements");
        }

        // Check for Tailwind CSS classes
        if (/className\s*=\s*['"].*?\b(bg|text|font|p|m)-/.test(userCode)) {
            checks.push("✅ Uses Tailwind CSS for styling");
            score += 30;
        } else {
            checks.push("❌ Missing Tailwind CSS classes");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Create an e-commerce cart with useState and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "E-Commerce Cart Page", language: "nextjs" }
    };
}

console.log("✅ Test ready for: E-Commerce Cart Page");