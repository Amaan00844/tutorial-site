
// mongodb/hard/6/tests.js
"use client";

console.log("🧪 Testing: Data Modeling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/new\s+mongoose\.Schema\s*\(\s*{.*_id\s*:\s*mongoose\.Schema\.Types\.ObjectId/i.test(userCode)) {
            checks.push("✅ Uses ObjectId in schema for referencing");
            score += 50;
        } else {
            checks.push("❌ Missing ObjectId in schema");
        }

        if (/ref\s*:\s*['"][^'"]+['"].*array/i.test(userCode)) {
            checks.push("✅ Defines array with ref for relationships");
            score += 50;
        } else {
            checks.push("❌ Missing array with ref for relationships");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include ObjectId and array with ref`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Data Modeling", language: "javascript" }
    };
}

console.log("✅ Test ready for: Data Modeling");