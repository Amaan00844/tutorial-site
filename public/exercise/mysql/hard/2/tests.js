
// mysql/hard/2/tests.js
"use client";

console.log("🧪 Testing: Partitioning");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+TABLE\s+.*\s+PARTITION\s+BY\s+(RANGE|LIST|HASH)/i.test(userCode)) {
            checks.push("✅ Uses PARTITION BY (RANGE, LIST, or HASH)");
            score += 50;
        } else {
            checks.push("❌ Missing PARTITION BY clause");
        }

        if (/PARTITION\s+\w+\s+VALUES/i.test(userCode)) {
            checks.push("✅ Defines partition values");
            score += 50;
        } else {
            checks.push("❌ Missing partition values definition");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include PARTITION BY and partition values`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Partitioning", language: "javascript" }
    };
}

console.log("✅ Test ready for: Partitioning");