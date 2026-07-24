
// mongodb/basic/3/tests.js
"use client";

console.log("🧪 Testing: Inserting Documents");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.insertOne\s*\(\s*{.*}\s*\)/i.test(userCode)) {
            checks.push("✅ Uses insertOne for single document");
            score += 50;
        } else {
            checks.push("❌ Missing insertOne usage");
        }

        if (/await\s+collection\.insertOne/i.test(userCode)) {
            checks.push("✅ Uses await with insertOne");
            score += 50;
        } else {
            checks.push("❌ Missing await with insertOne");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include insertOne with await`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Inserting Documents", language: "javascript" }
    };
}

console.log("✅ Test ready for: Inserting Documents");
