
// mongodb/intermediate/6/tests.js
"use client";

console.log("🧪 Testing: Aggregation Pipelines");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.aggregate\s*\(\s*\[\s*{.*\$group/i.test(userCode)) {
            checks.push("✅ Uses $group in aggregation pipeline");
            score += 50;
        } else {
            checks.push("❌ Missing $group in aggregation pipeline");
        }

        if (/await\s+collection\.aggregate\s*\(\s*\[\s*{.*}\s*\]\s*\)\.toArray\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Uses toArray with aggregation");
            score += 50;
        } else {
            checks.push("❌ Missing toArray with aggregation");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include $group and toArray in aggregation`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Aggregation Pipelines", language: "javascript" }
    };
}

console.log("✅ Test ready for: Aggregation Pipelines");