
// mongodb/basic/5/tests.js
"use client";

console.log("🧪 Testing: Updating Documents");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.updateOne\s*\(\s*{.*},\s*{.*\$set:.*}\s*\)/i.test(userCode)) {
            checks.push("✅ Uses updateOne with $set");
            score += 50;
        } else {
            checks.push("❌ Missing updateOne with $set");
        }

        if (/await\s+collection\.updateOne/i.test(userCode)) {
            checks.push("✅ Uses await with updateOne");
            score += 50;
        } else {
            checks.push("❌ Missing await with updateOne");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include updateOne with $set and await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Updating Documents", language: "javascript" }
    };
}

console.log("✅ Test ready for: Updating Documents");
