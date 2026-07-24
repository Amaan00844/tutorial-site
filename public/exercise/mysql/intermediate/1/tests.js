
// mysql/intermediate/1/tests.js
"use client";

console.log("🧪 Testing: Advanced Queries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s+FROM\s+.*\s+WHERE\s+.*\s+(AND|OR)\s+/i.test(userCode)) {
            checks.push("✅ Uses AND/OR in WHERE clause");
            score += 50;
        } else {
            checks.push("❌ Missing AND/OR in WHERE clause");
        }

        if (/SELECT\s+.*\s+FROM\s+.*\s+ORDER\s+BY/i.test(userCode)) {
            checks.push("✅ Uses ORDER BY in query");
            score += 50;
        } else {
            checks.push("❌ Missing ORDER BY in query");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include AND/OR and ORDER BY in query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Queries", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Queries");