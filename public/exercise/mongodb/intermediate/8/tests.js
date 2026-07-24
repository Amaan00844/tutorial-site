
// mongodb/intermediate/8/tests.js
"use client";

console.log("🧪 Testing: Data Validation with Mongoose");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/new\s+mongoose\.Schema\s*\(\s*{.*required\s*:\s*true/i.test(userCode)) {
            checks.push("✅ Defines required field in schema");
            score += 50;
        } else {
            checks.push("❌ Missing required field in schema");
        }

        if (/validate\s*:\s*{/i.test(userCode)) {
            checks.push("✅ Uses custom validation in schema");
            score += 50;
        } else {
            checks.push("❌ Missing custom validation in schema");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include required field and custom validation`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Data Validation with Mongoose", language: "javascript" }
    };
}

console.log("✅ Test ready for: Data Validation with Mongoose");
