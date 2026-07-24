"use client";

console.log("🧪 Testing: Next.js Pages and Routing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+default\s+function\s+\w+\s*\(\)\s*{/i.test(userCode)) {
            checks.push("✅ Exports a default page component");
            score += 50;
        } else {
            checks.push("❌ Missing default exported page component");
        }

        if (/return\s*\(\s*<\w+>.*<\/\w+>\s*\)/i.test(userCode)) {
            checks.push("✅ Returns JSX for page rendering");
            score += 50;
        } else {
            checks.push("❌ Missing JSX return statement");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include a default exported component with JSX`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Next.js Pages and Routing", language: "javascript" }
    };
}

console.log("✅ Test ready for: Next.js Pages and Routing");