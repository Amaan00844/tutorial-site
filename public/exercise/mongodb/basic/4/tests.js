
// mongodb/basic/4/tests.js
"use client";

console.log("🧪 Testing: Querying Documents");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.find\s*\(\s*{.*}\s*\)/i.test(userCode)) {
            checks.push("✅ Uses find for querying documents");
            score += 50;
        } else {
            checks.push("❌ Missing find query");
        }

        if (/await\s+collection\.find\s*\(\s*{.*}\s*\)\.toArray\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Uses toArray with find");
            score += 50;
        } else {
            checks.push("❌ Missing toArray with find");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include find query with toArray`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Querying Documents", language: "javascript" }
    };
}

console.log("✅ Test ready for: Querying Documents");
