
// mongodb/intermediate/1/tests.js
"use client";

console.log("🧪 Testing: Advanced Querying");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.find\s*\(\s*{.*\$or|\$and|\$in/i.test(userCode)) {
            checks.push("✅ Uses advanced query operators ($or, $and, or $in)");
            score += 50;
        } else {
            checks.push("❌ Missing advanced query operators");
        }

        if (/await\s+collection\.find\s*\(\s*{.*}\s*\)\.sort\s*\(\s*{/i.test(userCode)) {
            checks.push("✅ Uses sort with find query");
            score += 50;
        } else {
            checks.push("❌ Missing sort with find query");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include advanced query operators and sort`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Querying", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Querying");