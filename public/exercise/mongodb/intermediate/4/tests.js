
// mongodb/intermediate/4/tests.js
"use client";

console.log("🧪 Testing: Bulk Operations");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.insertMany\s*\(\s*\[\s*{/i.test(userCode)) {
            checks.push("✅ Uses insertMany for bulk insert");
            score += 50;
        } else {
            checks.push("❌ Missing insertMany usage");
        }

        if (/await\s+collection\.insertMany/i.test(userCode)) {
            checks.push("✅ Uses await with insertMany");
            score += 50;
        } else {
            checks.push("❌ Missing await with insertMany");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include insertMany with await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Bulk Operations", language: "javascript" }
    };
}

console.log("✅ Test ready for: Bulk Operations");