
// mongodb/intermediate/7/tests.js
"use client";

console.log("🧪 Testing: Mongoose Population");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/ref\s*:\s*['"][^'"]+['"]/i.test(userCode)) {
            checks.push("✅ Defines ref in Mongoose schema");
            score += 50;
        } else {
            checks.push("❌ Missing ref in schema");
        }

        if (/\.populate\s*\(\s*['"][^'"]+['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Uses populate for referencing documents");
            score += 50;
        } else {
            checks.push("❌ Missing populate usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include ref in schema and populate`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Mongoose Population", language: "javascript" }
    };
}

console.log("✅ Test ready for: Mongoose Population");