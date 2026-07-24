
// mysql/basic/7/tests.js
"use client";

console.log("🧪 Testing: Deleting Data");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/DELETE\s+FROM\s+[`'"]?\w+[`'"]?\s+WHERE/i.test(userCode)) {
            checks.push("✅ Uses DELETE FROM WHERE query");
            score += 50;
        } else {
            checks.push("❌ Missing DELETE FROM WHERE query");
        }

        if (/connection\.query\s*\(\s*['"]DELETE\s+FROM/i.test(userCode)) {
            checks.push("✅ Executes DELETE query via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for DELETE");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include DELETE FROM WHERE and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Deleting Data", language: "javascript" }
    };
}

console.log("✅ Test ready for: Deleting Data");