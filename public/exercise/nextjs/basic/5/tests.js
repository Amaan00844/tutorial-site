"use client";

console.log("🧪 Testing: Dynamic Routing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/{.*params.*}/i.test(userCode)) {
            checks.push("✅ Uses params for dynamic routing");
            score += 50;
        } else {
            checks.push("❌ Missing params for dynamic routing");
        }

        if (/export\s+async\s+function\s+getStaticPaths\s*\(/i.test(userCode)) {
            checks.push("✅ Defines getStaticPaths for dynamic routes");
            score += 50;
        } else {
            checks.push("❌ Missing getStaticPaths function");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include params and getStaticPaths for dynamic routing`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Dynamic Routing", language: "javascript" }
    };
}

console.log("✅ Test ready for: Dynamic Routing");