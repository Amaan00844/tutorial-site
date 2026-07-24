"use client";

console.log("🧪 Testing: Incremental Static Regeneration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+async\s+function\s+getStaticProps\s*\(\)\s*{[^}]*revalidate:.*\d+.*}/i.test(userCode)) {
            checks.push("✅ Defines getStaticProps with revalidate");
            score += 50;
        } else {
            checks.push("❌ Missing getStaticProps with revalidate");
        }

        if (/export\s+async\s+function\s+getStaticPaths\s*\(/i.test(userCode)) {
            checks.push("✅ Defines getStaticPaths for ISR");
            score += 50;
        } else {
            checks.push("❌ Missing getStaticPaths");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include getStaticProps with revalidate and getStaticPaths`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Incremental Static Regeneration", language: "javascript" }
    };
}

console.log("✅ Test ready for: Incremental Static Regeneration");