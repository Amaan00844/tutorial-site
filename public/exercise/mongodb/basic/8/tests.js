
// mongodb/basic/8/tests.js
"use client";

console.log("🧪 Testing: Mongoose Schema and Model");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/const\s+\w+\s*=\s*new\s+mongoose\.Schema\s*\(\s*{/i.test(userCode)) {
            checks.push("✅ Defines Mongoose schema");
            score += 50;
        } else {
            checks.push("❌ Missing Mongoose schema definition");
        }

        if (/mongoose\.model\s*\(\s*['"][^'"]+['"],\s*\w+\s*\)/i.test(userCode)) {
            checks.push("✅ Creates Mongoose model");
            score += 50;
        } else {
            checks.push("❌ Missing Mongoose model creation");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Mongoose schema and model`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Mongoose Schema and Model", language: "javascript" }
    };
}

console.log("✅ Test ready for: Mongoose Schema and Model");
