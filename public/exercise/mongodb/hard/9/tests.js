
// mongodb/hard/9/tests.js
"use client";

console.log("🧪 Testing: Backup and Restore");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/mongoexport/i.test(userCode)) {
            checks.push("✅ Uses mongoexport for backup");
            score += 50;
        } else {
            checks.push("❌ Missing mongoexport for backup");
        }

        if (/mongoimport/i.test(userCode)) {
            checks.push("✅ Uses mongoimport for restore");
            score += 50;
        } else {
            checks.push("❌ Missing mongoimport for restore");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include mongoexport and mongoimport`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Backup and Restore", language: "javascript" }
    };
}

console.log("✅ Test ready for: Backup and Restore");