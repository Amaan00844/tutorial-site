// Test for Full-Stack Dashboard
// JavaScript test that validates Next.js code for a full-stack dashboard

console.log("🧪 Testing: Full-Stack Dashboard");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        // Check for App Router usage
        if (/export\s+default\s+function/.test(userCode) || /app\/.*\.jsx/.test(userCode)) {
            checks.push("✅ Uses App Router structure");
            score += 25;
        } else {
            checks.push("❌ Missing App Router structure");
        }

        // Check for API route fetch
        if (/fetch\s*\(\s*['"].*\/api\//.test(userCode)) {
            checks.push("✅ Uses API routes for data fetching");
            score += 25;
        } else {
            checks.push("❌ Missing API route fetch");
        }

        // Check for JSX return with dashboard elements
        if (/return\s*\(/.test(userCode) && /<div.*?dashboard|<table|<chart/.test(userCode)) {
            checks.push("✅ Returns JSX with dashboard elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with dashboard elements");
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
            : `Score: ${result.score}/100 - Create a full-stack dashboard with App Router and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Full-Stack Dashboard", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Full-Stack Dashboard");