"use client";

console.log("🧪 Testing: Deployment");

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
            checks.push("✅ Defines a deployable page component");
            score += 50;
        } else {
            checks.push("❌ Missing deployable page component");
        }

        if (/process\.env\.NEXT_PUBLIC_\w+/i.test(userCode)) {
            checks.push("✅ Uses NEXT_PUBLIC_ environment variables");
            score += 50;
        } else {
            checks.push("❌ Missing NEXT_PUBLIC_ environment variables");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include page component and NEXT_PUBLIC_ variables`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Deployment", language: "javascript" }
    };
}

console.log("✅ Test ready for: Deployment");