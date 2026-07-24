
// mongodb/intermediate/5/tests.js
"use client";

console.log("🧪 Testing: Transactions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/client\.startSession\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Starts MongoDB session for transactions");
            score += 50;
        } else {
            checks.push("❌ Missing startSession for transactions");
        }

        if (/session\.withTransaction\s*\(\s*async\s*\(\s*\)\s*=>/i.test(userCode)) {
            checks.push("✅ Uses withTransaction for transaction");
            score += 50;
        } else {
            checks.push("❌ Missing withTransaction usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include startSession and withTransaction`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Transactions", language: "javascript" }
    };
}

console.log("✅ Test ready for: Transactions");