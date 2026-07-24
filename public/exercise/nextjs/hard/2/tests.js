"use client";

console.log("🧪 Testing: Server Components");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (!/'use\s+client'/i.test(userCode)) {
            checks.push("✅ Defines server component (no 'use client' directive)");
            score += 50;
        } else {
            checks.push("❌ Includes 'use client' (should be server component)");
        }

        if (/export\s+async\s+function\s+\w+\s*\(\)\s*{[^}]*await/i.test(userCode)) {
            checks.push("✅ Uses async/await in server component");
            score += 50;
        } else {
            checks.push("❌ Missing async/await in server component");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Define server component with async/await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Server Components", language: "javascript" }
    };
}

console.log("✅ Test ready for: Server Components");