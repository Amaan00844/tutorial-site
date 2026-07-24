/ mongodb/basic/1/tests.js
"use client";

console.log("🧪 Testing: MongoDB Connection");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/const\s+mongodb\s*=\s*require\s*\(\s*['"]mongodb['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Imports mongodb module");
            score += 50;
        } else {
            checks.push("❌ Missing mongodb module import");
        }

        if (/MongoClient\.connect\s*\(\s*['"]mongodb:\/\/[^'"]+['"]/i.test(userCode)) {
            checks.push("✅ Uses MongoClient.connect");
            score += 50;
        } else {
            checks.push("❌ Missing MongoClient.connect usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include mongodb import and MongoClient.connect`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "MongoDB Connection", language: "javascript" }
    };
}

console.log("✅ Test ready for: MongoDB Connection");