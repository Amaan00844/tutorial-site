
// mongodb/hard/1/tests.js
"use client";

console.log("🧪 Testing: Advanced Aggregation Pipelines");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/\$lookup\s*:\s*{/i.test(userCode)) {
            checks.push("✅ Uses $lookup in aggregation pipeline");
            score += 50;
        } else {
            checks.push("❌ Missing $lookup in aggregation pipeline");
        }

        if (/\$unwind\s*:\s*['"]\$[^'"]+['"]/i.test(userCode)) {
            checks.push("✅ Uses $unwind in aggregation pipeline");
            score += 50;
        } else {
            checks.push("❌ Missing $unwind in aggregation pipeline");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include $lookup and $unwind in aggregation`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Aggregation Pipelines", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Aggregation Pipelines");
