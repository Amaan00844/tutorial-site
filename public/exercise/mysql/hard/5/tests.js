
// mysql/hard/5/tests.js
"use client";

console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/EXPLAIN\s+(SELECT|INSERT|UPDATE|DELETE)/i.test(userCode)) {
            checks.push("✅ Uses EXPLAIN for query optimization");
            score += 50;
        } else {
            checks.push("❌ Missing EXPLAIN for query optimization");
        }

        if (/SELECT\s+.*\s+FROM\s+.*\s+WHERE\s+.*\s+INDEXED\s+BY/i.test(userCode)) {
            checks.push("✅ Uses INDEXED BY for query optimization");
            score += 50;
        } else {
            checks.push("❌ Missing INDEXED BY in query");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include EXPLAIN and INDEXED BY`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Performance Optimization", language: "javascript" }
    };
}

console.log("✅ Test ready for: Performance Optimization");