"use client";

console.log("🧪 Testing: State Management");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*useState.*}\s+from\s+['"]react['"]/i.test(userCode)) {
            checks.push("✅ Imports useState from react");
            score += 50;
        } else {
            checks.push("❌ Missing useState import");
        }

        if (/const\s*\[\s*\w+,\s*set\w+\s*\]\s*=\s*useState\s*\(/i.test(userCode)) {
            checks.push("✅ Uses useState hook");
            score += 50;
        } else {
            checks.push("❌ Missing useState hook usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include useState import and usage`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "State Management", language: "javascript" }
    };
}

console.log("✅ Test ready for: State Management");