
// mongodb/basic/6/tests.js
"use client";

console.log("🧪 Testing: Deleting Documents");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.deleteOne\s*\(\s*{.*}\s*\)/i.test(userCode)) {
            checks.push("✅ Uses deleteOne for document removal");
            score += 50;
        } else {
            checks.push("❌ Missing deleteOne usage");
        }

        if (/await\s+collection\.deleteOne/i.test(userCode)) {
            checks.push("✅ Uses await with deleteOne");
            score += 50;
        } else {
            checks.push("❌ Missing await with deleteOne");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include deleteOne with await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Deleting Documents", language: "javascript" }
    };
}

console.log("✅ Test ready for: Deleting Documents");