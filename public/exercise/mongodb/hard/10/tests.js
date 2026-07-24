
// mongodb/hard/10/tests.js
"use client";

console.log("🧪 Testing: Monitoring and Performance Tuning");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/db\.command\s*\(\s*{.*serverStatus/i.test(userCode)) {
            checks.push("✅ Uses serverStatus for monitoring");
            score += 50;
        } else {
            checks.push("❌ Missing serverStatus for monitoring");
        }

        if (/collection\.explain\s*\(\s*['"]executionStats['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Uses explain for performance tuning");
            score += 50;
        } else {
            checks.push("❌ Missing explain for performance tuning");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include serverStatus and explain`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Monitoring and Performance Tuning", language: "javascript" }
    };
}

console.log("✅ Test ready for: Monitoring and Performance Tuning");