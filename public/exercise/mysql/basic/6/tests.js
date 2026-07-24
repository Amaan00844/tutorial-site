
// mysql/basic/6/tests.js
"use client";

console.log("🧪 Testing: Updating Data");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/UPDATE\s+[`'"]?\w+[`'"]?\s+SET\s+.*\s+WHERE/i.test(userCode)) {
            checks.push("✅ Uses UPDATE SET WHERE query");
            score += 50;
        } else {
            checks.push("❌ Missing UPDATE SET WHERE query");
        }

        if (/connection\.query\s*\(\s*['"]UPDATE\s+.*\s+SET/i.test(userCode)) {
            checks.push("✅ Executes UPDATE query via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for UPDATE");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include UPDATE SET WHERE and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Updating Data", language: "javascript" }
    };
}

console.log("✅ Test ready for: Updating Data");