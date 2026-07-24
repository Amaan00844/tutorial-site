
// mysql/hard/3/tests.js
"use client";

console.log("🧪 Testing: Advanced Transactions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/connection\.beginTransaction\s*\(\s*\).*connection\.query\s*\(\s*['"](INSERT|UPDATE|DELETE)/i.test(userCode)) {
            checks.push("✅ Uses transaction with CRUD operation");
            score += 50;
        } else {
            checks.push("❌ Missing transaction with CRUD operation");
        }

        if (/connection\.rollback\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Handles transaction rollback");
            score += 50;
        } else {
            checks.push("❌ Missing rollback handling");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include transaction with CRUD and rollback`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Transactions", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Transactions");