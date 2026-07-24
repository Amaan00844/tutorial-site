"use client";

console.log("🧪 Testing: Advanced Caching Strategies");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+const\s+revalidate\s*=\s*\d+/i.test(userCode)) {
            checks.push("✅ Specifies revalidate for caching");
            score += 50;
        } else {
            checks.push("❌ Missing revalidate specification");
        }

        if (/export\s+async\s+function\s+getStaticProps\s*\(\)\s*{[^}]*revalidate:/i.test(userCode)) {
            checks.push("✅ Uses revalidate in getStaticProps");
            score += 50;
        } else {
            checks.push("❌ Missing revalidate in getStaticProps");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include revalidate in getStaticProps`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced Caching Strategies", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced Caching Strategies");