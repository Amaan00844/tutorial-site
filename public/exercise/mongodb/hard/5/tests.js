
// mongodb/hard/5/tests.js
"use client";

console.log("🧪 Testing: Full-Text Search");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/collection\.createIndex\s*\(\s*{.*text\s*:\s*['"]text['"]/i.test(userCode)) {
            checks.push("✅ Creates text index for full-text search");
            score += 50;
        } else {
            checks.push("❌ Missing text index creation");
        }

        if (/\$text\s*:\s*{.*\$search\s*:\s*['"][^'"]+['"]/i.test(userCode)) {
            checks.push("✅ Uses $text for full-text search");
            score += 50;
        } else {
            checks.push("❌ Missing $text search query");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include text index and $text search`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Full-Text Search", language: "javascript" }
    };
}

console.log("✅ Test ready for: Full-Text Search");