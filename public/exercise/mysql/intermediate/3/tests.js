
// mysql/intermediate/3/tests.js
"use client";

console.log("🧪 Testing: Joins with Multiple Tables");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s+FROM\s+[`'"]?\w+[`'"]?\s+(INNER\s+)?JOIN\s+[`'"]?\w+[`'"]?\s+ON\s+.*\s+(INNER\s+)?JOIN/i.test(userCode)) {
            checks.push("✅ Uses multiple JOINs in query");
            score += 50;
        } else {
            checks.push("❌ Missing multiple JOINs in query");
        }

        if (/connection\.query\s*\(\s*['"]SELECT\s+.*\s+FROM\s+.*\s+JOIN\s+.*\s+JOIN/i.test(userCode)) {
            checks.push("✅ Executes multiple JOINs via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for multiple JOINs");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include multiple JOINs and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Joins with Multiple Tables", language: "javascript" }
    };
}

console.log("✅ Test ready for: Joins with Multiple Tables");