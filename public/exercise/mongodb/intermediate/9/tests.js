
// mongodb/intermediate/9/tests.js
"use client";

console.log("🧪 Testing: Change Streams");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.watch\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Uses watch for change streams");
            score += 50;
        } else {
            checks.push("❌ Missing watch for change streams");
        }

        if (/changeStream\.on\s*\(\s*['"]change['"],\s*function\s*\(/i.test(userCode)) {
            checks.push("✅ Listens for change events");
            score += 50;
        } else {
            checks.push("❌ Missing change event listener");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include watch and change event listener`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Change Streams", language: "javascript" }
    };
}

console.log("✅ Test ready for: Change Streams");