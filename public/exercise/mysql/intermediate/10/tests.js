
// mysql/intermediate/10/tests.js
"use client";

console.log("🧪 Testing: Triggers");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+TRIGGER\s+[`'"]?\w+[`'"]?\s+(BEFORE|AFTER)\s+(INSERT|UPDATE|DELETE)/i.test(userCode)) {
            checks.push("✅ Uses CREATE TRIGGER with timing and event");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE TRIGGER with timing and event");
        }

        if (/connection\.query\s*\(\s*['"]CREATE\s+TRIGGER/i.test(userCode)) {
            checks.push("✅ Executes CREATE TRIGGER via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for CREATE TRIGGER");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE TRIGGER and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Triggers", language: "javascript" }
    };
}

console.log("✅ Test ready for: Triggers");