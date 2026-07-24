"use client";

console.log("🧪 Testing: Static Site Generation (SSG)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+async\s+function\s+getStaticProps\s*\(/i.test(userCode)) {
            checks.push("✅ Defines getStaticProps");
            score += 50;
        } else {
            checks.push("❌ Missing getStaticProps function");
        }

        if (/return\s*{.*props:.*}/i.test(userCode)) {
            checks.push("✅ Returns props in getStaticProps");
            score += 50;
        } else {
            checks.push("❌ Missing props return in getStaticProps");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include getStaticProps with props return`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Static Site Generation (SSG)", language: "javascript" }
    };
}

console.log("✅ Test ready for: Static Site Generation (SSG)");