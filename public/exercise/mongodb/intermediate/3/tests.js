
// mongodb/intermediate/3/tests.js
"use client";

console.log("🧪 Testing: Mongoose Middleware");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/\w+\.pre\s*\(\s*['"](save|update|remove)['"],\s*(async\s*)?function/i.test(userCode)) {
            checks.push("✅ Defines Mongoose pre middleware");
            score += 50;
        } else {
            checks.push("❌ Missing Mongoose pre middleware");
        }

        if (/next\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Calls next() in middleware");
            score += 50;
        } else {
            checks.push("❌ Missing next() call in middleware");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Mongoose pre middleware with next()`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Mongoose Middleware", language: "javascript" }
    };
}

console.log("✅ Test ready for: Mongoose Middleware");