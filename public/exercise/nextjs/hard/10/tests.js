

// nextjs/hard/10/tests.js
"use client";

console.log("🧪 Testing: Enterprise Deployment");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/process\.env\.NEXT_PUBLIC_\w+/i.test(userCode)) {
            checks.push("✅ Uses NEXT_PUBLIC_ environment variables");
            score += 50;
        } else {
            checks.push("❌ Missing NEXT_PUBLIC_ environment variables");
        }

        if (/export\s+const\s+dynamic\s*=\s*['"]force-static['"]/i.test(userCode)) {
            checks.push("✅ Configures dynamic for static rendering");
            score += 50;
        } else {
            checks.push("❌ Missing dynamic configuration");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include environment variables and dynamic configuration`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Enterprise Deployment", language: "javascript" }
    };
}

console.log("✅ Test ready for: Enterprise Deployment");