"use client";

console.log("🧪 Testing: Server-Side Rendering (SSR)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+async\s+function\s+getServerSideProps\s*\(/i.test(userCode)) {
            checks.push("✅ Defines getServerSideProps");
            score += 50;
        } else {
            checks.push("❌ Missing getServerSideProps function");
        }

        if (/return\s*{.*props:.*}/i.test(userCode)) {
            checks.push("✅ Returns props in getServerSideProps");
            score += 50;
        } else {
            checks.push("❌ Missing props return in getServerSideProps");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include getServerSideProps with props return`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Server-Side Rendering (SSR)", language: "javascript" }
    };
}

console.log("✅ Test ready for: Server-Side Rendering (SSR)");