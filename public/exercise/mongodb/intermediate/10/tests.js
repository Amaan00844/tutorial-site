
// mongodb/intermediate/10/tests.js
"use client";

console.log("🧪 Testing: Sharding Basics");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/adminCommand\s*\(\s*{.*shardCollection/i.test(userCode)) {
            checks.push("✅ Uses shardCollection command");
            score += 50;
        } else {
            checks.push("❌ Missing shardCollection command");
        }

        if (/key\s*:\s*{.*}\s*}/i.test(userCode)) {
            checks.push("✅ Specifies shard key");
            score += 50;
        } else {
            checks.push("❌ Missing shard key specification");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include shardCollection and shard key`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Sharding Basics", language: "javascript" }
    };
}

console.log("✅ Test ready for: Sharding Basics");
