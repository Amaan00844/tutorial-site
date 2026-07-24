
// mongodb/basic/9/tests.js
"use client";

console.log("🧪 Testing: Basic Aggregation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.aggregate\s*\(\s*\[\s*{/i.test(userCode)) {
            checks.push("✅ Uses aggregate pipeline");
            score += 50;
        } else {
            checks.push("❌ Missing aggregate pipeline");
        }

        if (/\$match\s*:\s*{/i.test(userCode)) {
            checks.push("✅ Uses $match in aggregation");
            score += 50;
        } else {
            checks.push("❌ Missing $match in aggregation");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include aggregate pipeline with $match`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Basic Aggregation", language: "javascript" }
    };
}

console.log("✅ Test ready for: Basic Aggregation");
