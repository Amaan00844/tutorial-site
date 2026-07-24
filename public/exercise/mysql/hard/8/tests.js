
// mysql/hard/8/tests.js
"use client";

console.log("🧪 Testing: Replication");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CHANGE\s+MASTER\s+TO/i.test(userCode)) {
            checks.push("✅ Uses CHANGE MASTER TO for replication setup");
            score += 50;
        } else {
            checks.push("❌ Missing CHANGE MASTER TO for replication");
        }

        if (/START\s+SLAVE/i.test(userCode)) {
            checks.push("✅ Uses START SLAVE for replication");
            score += 50;
        } else {
            checks.push("❌ Missing START SLAVE for replication");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CHANGE MASTER TO and START SLAVE`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Replication", language: "javascript" }
    };
}

console.log("✅ Test ready for: Replication");
