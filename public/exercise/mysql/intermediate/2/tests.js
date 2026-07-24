
// mysql/intermediate/2/tests.js
"use client";

console.log("🧪 Testing: Indexing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+INDEX\s+\w+\s+ON\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses CREATE INDEX query");
            score += 50;
        } else {
            checks.push("❌ Missing CREATE INDEX query");
        }

        if (/connection\.query\s*\(\s*['"]CREATE\s+INDEX/i.test(userCode)) {
            checks.push("✅ Executes CREATE INDEX via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for CREATE INDEX");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CREATE INDEX and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Indexing", language: "javascript" }
    };
}

console.log("✅ Test ready for: Indexing");

