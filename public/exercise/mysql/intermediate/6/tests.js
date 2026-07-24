
// mysql/intermediate/6/tests.js
"use client";

console.log("🧪 Testing: Aggregation Functions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SELECT\s+.*(COUNT|SUM|AVG|MIN|MAX)\s*\(\s*.*\s*\)/i.test(userCode)) {
            checks.push("✅ Uses aggregation function (COUNT, SUM, AVG, MIN, MAX)");
            score += 50;
        } else {
            checks.push("❌ Missing aggregation function");
        }

        if (/GROUP\s+BY\s+[`'"]?\w+[`'"]?/i.test(userCode)) {
            checks.push("✅ Uses GROUP BY with aggregation");
            score += 50;
        } else {
            checks.push("❌ Missing GROUP BY with aggregation");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include aggregation function and GROUP BY`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Aggregation Functions", language: "javascript" }
    };
}

console.log("✅ Test ready for: Aggregation Functions");