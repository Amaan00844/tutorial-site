"use client";

console.log("🧪 Testing: Edge Runtime");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+const\s+runtime\s*=\s*['"]edge['"]/i.test(userCode)) {
            checks.push("✅ Specifies edge runtime");
            score += 50;
        } else {
            checks.push("❌ Missing edge runtime specification");
        }

        if (/export\s+default\s+async\s+function\s*\(req,\s*res\)\s*{/i.test(userCode)) {
            checks.push("✅ Defines API route for edge runtime");
            score += 50;
        } else {
            checks.push("❌ Missing API route for edge runtime");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include edge runtime and API route`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Edge Runtime", language: "javascript" }
    };
}

console.log("✅ Test ready for: Edge Runtime");