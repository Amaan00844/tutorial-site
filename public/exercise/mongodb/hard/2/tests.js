
// mongodb/hard/2/tests.js
"use client";

console.log("🧪 Testing: Replica Sets");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/replSet=[^'"]+/i.test(userCode)) {
            checks.push("✅ Specifies replica set in connection string");
            score += 50;
        } else {
            checks.push("❌ Missing replica set in connection string");
        }

        if (/MongoClient\.connect\s*\(\s*['"]mongodb:\/\/[^'"]+['"],\s*{.*readPreference/i.test(userCode)) {
            checks.push("✅ Uses readPreference for replica set");
            score += 50;
        } else {
            checks.push("❌ Missing readPreference for replica set");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include replica set and readPreference`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Replica Sets", language: "javascript" }
    };
}

console.log("✅ Test ready for: Replica Sets");