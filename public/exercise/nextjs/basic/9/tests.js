"use client";

console.log("🧪 Testing: Environment Variables");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/process\.env\.\w+/i.test(userCode)) {
            checks.push("✅ Uses process.env for environment variables");
            score += 50;
        } else {
            checks.push("❌ Missing process.env usage");
        }

        if (/export\s+async\s+function\s+getStaticProps\s*\(\)\s*{[^}]*process\.env/i.test(userCode)) {
            checks.push("✅ Uses environment variables in getStaticProps");
            score += 50;
        } else {
            checks.push("❌ Missing environment variables in getStaticProps");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include process.env in component or getStaticProps`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Environment Variables", language: "javascript" }
    };
}

console.log("✅ Test ready for: Environment Variables");