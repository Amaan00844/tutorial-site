// mysql/basic/1/tests.js
"use client";

console.log("🧪 Testing: MySQL Connection");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/const\s+mysql\s*=\s*require\s*\(\s*['"]mysql2['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Imports mysql2 module");
            score += 50;
        } else {
            checks.push("❌ Missing mysql2 module import");
        }

        if (/mysql\.createConnection\s*\(\s*{/i.test(userCode)) {
            checks.push("✅ Uses createConnection for MySQL");
            score += 50;
        } else {
            checks.push("❌ Missing createConnection usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include mysql2 import and createConnection`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "MySQL Connection", language: "javascript" }
    };
}

console.log("✅ Test ready for: MySQL Connection");