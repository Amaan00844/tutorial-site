
// mysql/basic/8/tests.js
"use client";

console.log("🧪 Testing: Primary and Foreign Keys");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/PRIMARY\s+KEY\s*\(\s*[`'"]?\w+[`'"]?\s*\)/i.test(userCode)) {
            checks.push("✅ Defines PRIMARY KEY in table");
            score += 50;
        } else {
            checks.push("❌ Missing PRIMARY KEY definition");
        }

        if (/FOREIGN\s+KEY\s*\(\s*[`'"]?\w+[`'"]?\s*\)\s+REFERENCES/i.test(userCode)) {
            checks.push("✅ Defines FOREIGN KEY with REFERENCES");
            score += 50;
        } else {
            checks.push("❌ Missing FOREIGN KEY with REFERENCES");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include PRIMARY KEY and FOREIGN KEY`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Primary and Foreign Keys", language: "javascript" }
    };
}

console.log("✅ Test ready for: Primary and Foreign Keys");