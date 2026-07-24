
// mysql/intermediate/5/tests.js
"use client";

console.log("🧪 Testing: Prepared Statements");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/connection\.query\s*\(\s*['"][^'"]+\?\s*[^'"]*['"],\s*\[/i.test(userCode)) {
            checks.push("✅ Uses prepared statement with placeholders");
            score += 50;
        } else {
            checks.push("❌ Missing prepared statement with placeholders");
        }

        if (/connection\.query\s*\(\s*['"](SELECT|INSERT|UPDATE|DELETE)\s+.*\?\s*[^'"]*['"],\s*\[.*\]/i.test(userCode)) {
            checks.push("✅ Uses prepared statement for CRUD operation");
            score += 50;
        } else {
            checks.push("❌ Missing prepared statement for CRUD");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include prepared statement with placeholders and CRUD`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Prepared Statements", language: "javascript" }
    };
}

console.log("✅ Test ready for: Prepared Statements");
