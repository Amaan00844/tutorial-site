
// mysql/hard/10/tests.js
"use client";

console.log("🧪 Testing: Monitoring and Performance Tuning");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/SHOW\s+STATUS\s+LIKE\s+['"]%innodb%['"]/i.test(userCode)) {
            checks.push("✅ Uses SHOW STATUS for monitoring InnoDB");
            score += 50;
        } else {
            checks.push("❌ Missing SHOW STATUS for monitoring");
        }

        if (/ANALYZE\s+TABLE\s+[`'"]?\w+[`'"]?/i.test(userCode)) {
            checks.push("✅ Uses ANALYZE TABLE for performance tuning");
            score += 50;
        } else {
            checks.push("❌ Missing ANALYZE TABLE for performance tuning");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include SHOW STATUS and ANALYZE TABLE`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Monitoring and Performance Tuning", language: "javascript" }
    };
}

console.log("✅ Test ready for: Monitoring and Performance Tuning");                            