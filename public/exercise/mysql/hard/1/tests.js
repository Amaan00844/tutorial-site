
// mysql/hard/1/tests.js
"use client";

console.log("🧪 Testing: Advanced Joins");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*\s+FROM\s+.*\s+(LEFT|RIGHT|FULL)\s+(OUTER\s+)?JOIN/i.test(userCode)) {
            checks.push("✅ Uses LEFT, RIGHT, or FULL OUTER JOIN");
            score += 50;
        } else {
            checks.push("❌ Missing LEFT, RIGHT, or FULL OUTER JOIN");
        }

        if (/SELECT\s+.*\s+FROM\s+.*\s+(LEFT|RIGHT|FULL)\s+(OUTER\s+)?JOIN\s+.*\s+ON\s+.*\s+(LEFT|RIGHT|FULL)\s+(OUTER\s+)?JOIN/i.test(userCode)) {
            checks.push("✅ Uses multiple advanced JOINs");
            score += 50;
        } else {
            checks.push("❌ Missing multiple advanced JOINs");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include advanced JOINs (LEFT/RIGHT/FULL)`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Joins", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Joins");