
// mysql/intermediate/8/tests.js
"use client";

console.log("🧪 Testing: Views");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+VIEW\s+[`'"]?\w+[`'"]?\s+AS\s+SELECT/i.test(userCode)) {
            checks.push("✅ Uses CREATE VIEW with SELECT");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE VIEW with SELECT");
        }

        if (/connection\.query\s*\(\s*['"]CREATE\s+VIEW/i.test(userCode)) {
            checks.push("✅ Executes CREATE VIEW via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for CREATE VIEW");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE VIEW and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Views", language: "javascript" }
    };
}

console.log("✅ Test ready for: Views");