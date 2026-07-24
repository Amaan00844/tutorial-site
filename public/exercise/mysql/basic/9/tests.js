
// mysql/basic/9/tests.js
"use client";

console.log("🧪 Testing: Basic Joins");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s+FROM\s+[`'"]?\w+[`'"]?\s+(INNER\s+)?JOIN\s+[`'"]?\w+[`'"]?\s+ON/i.test(userCode)) {
            checks.push("✅ Uses JOIN with ON clause");
            score += 50;
        } else {
            checks.push("❌ Missing JOIN with ON clause");
        }

        if (/connection\.query\s*\(\s*['"]SELECT\s+.*\s+FROM\s+.*\s+JOIN/i.test(userCode)) {
            checks.push("✅ Executes JOIN query via connection.query");
            score += 50;
        } else {
            checks.push("❌ Missing connection.query for JOIN");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include JOIN with ON and connection.query`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Basic Joins", language: "javascript" }
    };
}

console.log("✅ Test ready for: Basic Joins");
