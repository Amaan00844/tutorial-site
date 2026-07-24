
// mysql/basic/4/tests.js
"use client";

console.log("🧪 Testing: Inserting Data");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/INSERT\s+INTO\s+[`'"]?\w+[`'"]?\s*\(/i.test(userCode)) {
            checks.push("✅ Uses INSERT INTO query");
            score += 50;
        } else {
            checks.push("❌ Missing INSERT INTO query");
        }

        if (/VALUES\s*\(\s*[^)]+\)/i.test(userCode)) {
            checks.push("✅ Specifies VALUES in INSERT query");
            score += 50;
        } else {
            checks.push("❌ Missing VALUES in INSERT query");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include INSERT INTO with VALUES`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Inserting Data", language: "javascript" }
    };
}

console.log("✅ Test ready for: Inserting Data");