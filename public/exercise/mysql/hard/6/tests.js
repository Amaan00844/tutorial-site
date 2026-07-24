
// mysql/hard/6/tests.js
"use client";

console.log("🧪 Testing: Database Normalization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/CREATE\s+TABLE\s+.*\s+PRIMARY\s+KEY\s*\(\s*[`'"]?\w+[`'"]?\s*\).*CREATE\s+TABLE\s+.*\s+FOREIGN\s+KEY/i.test(userCode)) {
            checks.push("✅ Creates multiple tables with PRIMARY and FOREIGN KEY");
            score += 50;
        } else {
            checks.push("❌ Missing multiple tables with PRIMARY and FOREIGN KEY");
        }

        if (/UNIQUE\s*\(\s*[`'"]?\w+[`'"]?\s*\)/i.test(userCode)) {
            checks.push("✅ Uses UNIQUE constraint for normalization");
            score += 50;
        } else {
            checks.push("❌ Missing UNIQUE constraint");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include multiple tables with keys and UNIQUE constraint`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Database Normalization", language: "javascript" }
    };
}

console.log("✅ Test ready for: Database Normalization");