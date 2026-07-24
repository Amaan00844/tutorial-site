
// mongodb/intermediate/2/tests.js
"use client";

console.log("🧪 Testing: Indexing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.createIndex\s*\(\s*{/i.test(userCode)) {
            checks.push("✅ Uses createIndex for indexing");
            score += 50;
        } else {
            checks.push("❌ Missing createIndex usage");
        }

        if (/await\s+collection\.createIndex/i.test(userCode)) {
            checks.push("✅ Uses await with createIndex");
            score += 50;
        } else {
            checks.push("❌ Missing await with createIndex");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include createIndex with await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Indexing", language: "javascript" }
    };
}

console.log("✅ Test ready for: Indexing");