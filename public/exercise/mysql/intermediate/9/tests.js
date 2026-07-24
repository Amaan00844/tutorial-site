
// mysql/intermediate/9/tests.js
"use client";

console.log("🧪 Testing: Stored Procedures");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+PROCEDURE\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses CREATE PROCEDURE");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE PROCEDURE");
        }

        if (/CALL\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses CALL to invoke stored procedure");
            score += 50;
        } else {
            checks.push("❌ Missing CALL for stored procedure");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE PROCEDURE and CALL`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Stored Procedures", language: "javascript" }
    };
}

console.log("✅ Test ready for: Stored Procedures");
