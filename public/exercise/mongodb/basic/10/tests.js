
// mongodb/basic/10/tests.js
"use client";

console.log("🧪 Testing: Error Handling in MongoDB");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/try\s*{.*}\s*catch\s*\(\s*\w+\s*\)\s*{/i.test(userCode)) {
            checks.push("✅ Uses try-catch for error handling");
            score += 50;
        } else {
            checks.push("❌ Missing try-catch block");
        }

        if (/console\.error\s*\(\s*['"]|err/i.test(userCode)) {
            checks.push("✅ Logs errors in catch block");
            score += 50;
        } else {
            checks.push("❌ Missing error logging in catch block");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include try-catch with error logging`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Error Handling in MongoDB", language: "javascript" }
    };
}

console.log("✅ Test ready for: Error Handling in MongoDB");