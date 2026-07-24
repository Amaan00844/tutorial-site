
// mysql/basic/3/tests.js
"use client";

console.log("🧪 Testing: Creating Tables");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+TABLE\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses CREATE TABLE query");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE TABLE query");
        }

        if (/[`'"]?\w+[`'"]?\s+(INT|VARCHAR|TEXT)/i.test(userCode)) {
            checks.push("✅ Defines column with data type");
            score += 50;
        } else {
            checks.push("❌ Missing column definition with data type");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE TABLE with column data type`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Creating Tables", language: "javascript" }
    };
}

console.log("✅ Test ready for: Creating Tables");

