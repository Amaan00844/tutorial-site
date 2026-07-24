
// mongodb/hard/8/tests.js
"use client";

console.log("🧪 Testing: Advanced Sharding");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/adminCommand\s*\(\s*{.*shardCollection.*hashed\s*:\s*['"][^'"]+['"]/i.test(userCode)) {
            checks.push("✅ Uses hashed sharding key");
            score += 50;
        } else {
            checks.push("❌ Missing hashed sharding key");
        }

        if (/adminCommand\s*\(\s*{.*enableSharding/i.test(userCode)) {
            checks.push("✅ Enables sharding on database");
            score += 50;
        } else {
            checks.push("❌ Missing enableSharding command");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include hashed sharding and enableSharding`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Sharding", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Sharding");