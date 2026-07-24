"use client";

console.log("🧪 Testing: Testing Strategies");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*render.*}\s+from\s+['"]@testing-library\/react['"]/i.test(userCode)) {
            checks.push("✅ Imports render from @testing-library/react");
            score += 50;
        } else {
            checks.push("❌ Missing render import from @testing-library/react");
        }

        if (/render\s*\(\s*<\w+/i.test(userCode)) {
            checks.push("✅ Uses render for component testing");
            score += 50;
        } else {
            checks.push("❌ Missing render usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include render from @testing-library/react and usage`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Testing Strategies", language: "javascript" }
    };
}

console.log("✅ Test ready for: Testing Strategies");