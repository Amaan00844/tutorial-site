"use client";

console.log("🧪 Testing: API Routes");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+default\s+async\s+function\s*\(req,\s*res\)\s*{/i.test(userCode)) {
            checks.push("✅ Defines API route handler");
            score += 50;
        } else {
            checks.push("❌ Missing API route handler");
        }

        if (/res\.(status|json|send)\s*\(/i.test(userCode)) {
            checks.push("✅ Sends response with status or json");
            score += 50;
        } else {
            checks.push("❌ Missing response handling");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include API route handler with response`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "API Routes", language: "javascript" }
    };
}

console.log("✅ Test ready for: API Routes");