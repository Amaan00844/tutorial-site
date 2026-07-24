
// mysql/hard/7/tests.js
"use client";

console.log("🧪 Testing: User-Defined Functions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+FUNCTION\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses CREATE FUNCTION");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE FUNCTION");
        }

        if (/RETURNS\s+(INT|VARCHAR|DECIMAL|TEXT)/i.test(userCode)) {
            checks.push("✅ Specifies RETURNS type in function");
            score += 50;
        } else {
            checks.push("❌ Missing RETURNS type in function");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE FUNCTION with RETURNS type`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "User-Defined Functions", language: "javascript" }
    };
}

console.log("✅ Test ready for: User-Defined Functions");