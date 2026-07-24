
// mysql/basic/5/tests.js
"use client";

console.log("🧪 Testing: Selecting Data");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s+FROM\s+[`'"]?\w+[`'"]?/i.test(userCode)) {
            checks.push("✅ Uses SELECT FROM query");
            score += 50;
        } else {
            checks.push("❌ Missing SELECT FROM query");
        }

        if (/connection\.query\s*\(\s*['"]SELECT\s+.*\s+FROM/i.test(userCode)) {
            checks.push("✅ Executes SELECT query via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for SELECT");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include SELECT FROM and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Selecting Data", language: "javascript" }
    };
}

console.log("✅ Test ready for: Selecting Data");