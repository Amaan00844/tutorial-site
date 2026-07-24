// Test for Task Tracker App
// JavaScript test that validates Next.js code for a task tracker app

console.log("🧪 Testing: Task Tracker App");

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
            score += 25;
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

        // Check for JSX return with task list elements
        if (/return\s*\(/.test(userCode) && /<ul|<li/.test(userCode)) {
            checks.push("✅ Returns JSX with task list elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with task list elements");
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
            : `Score: ${result.score}/100 - Create a task tracker with useState and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Task Tracker App", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Task Tracker App");