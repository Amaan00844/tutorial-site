"use client";

console.log("🧪 Testing: Custom Webpack Configuration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/module\.exports\s*=\s*{.*webpack:/i.test(userCode)) {
            checks.push("✅ Defines webpack configuration");
            score += 50;
        } else {
            checks.push("❌ Missing webpack configuration");
        }

        if (/config\.module\.rules\.push\s*\(/i.test(userCode)) {
            checks.push("✅ Adds custom module rules");
            score += 50;
        } else {
            checks.push("❌ Missing custom module rules");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include webpack configuration with custom rules`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Custom Webpack Configuration", language: "javascript" }
    };
}

console.log("✅ Test ready for: Custom Webpack Configuration");