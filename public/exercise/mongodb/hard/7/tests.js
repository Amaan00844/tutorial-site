
// mongodb/hard/7/tests.js
"use client";

console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.find\s*\(\s*{.*}\s*\)\.limit\s*\(\s*\d+\s*\)/i.test(userCode)) {
            checks.push("✅ Uses limit to optimize query performance");
            score += 50;
        } else {
            checks.push("❌ Missing limit in query");
        }

        if (/collection\.find\s*\(\s*{.*}\s*\)\.hint\s*\(\s*{/i.test(userCode)) {
            checks.push("✅ Uses hint for index optimization");
            score += 50;
        } else {
            checks.push("❌ Missing hint for index optimization");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include limit and hint in queries`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Performance Optimization", language: "javascript" }
    };
}

console.log("✅ Test ready for: Performance Optimization");