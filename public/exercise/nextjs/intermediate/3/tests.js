"use client";

console.log("🧪 Testing: Custom App and Document");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+default\s+function\s+App\s*\({.*}\)\s*{/i.test(userCode)) {
            checks.push("✅ Defines custom App component");
            score += 50;
        } else {
            checks.push("❌ Missing custom App component");
        }

        if (/import\s+{.*App.*}\s+from\s+['"]next\/app['"]/i.test(userCode)) {
            checks.push("✅ Imports App from next/app");
            score += 50;
        } else {
            checks.push("❌ Missing App import");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include custom App component with proper import`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Custom App and Document", language: "javascript" }
    };
}

console.log("✅ Test ready for: Custom App and Document");