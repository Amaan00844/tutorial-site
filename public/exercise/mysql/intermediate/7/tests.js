
// mysql/intermediate/7/tests.js
"use client";

console.log("🧪 Testing: Subqueries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s*\(\s*SELECT\s+.*\s+FROM\s+.*\)/i.test(userCode)) {
            checks.push("✅ Uses subquery in SELECT");
            score += 50;
        } else {
            checks.push("❌ Missing subquery in SELECT");
        }

        if (/connection\.query\s*\(\s*['"]SELECT\s+.*\s*\(\s*SELECT/i.test(userCode)) {
            checks.push("✅ Executes subquery via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for subquery");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include subquery and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Subqueries", language: "javascript" }
    };
}

console.log("✅ Test ready for: Subqueries");
