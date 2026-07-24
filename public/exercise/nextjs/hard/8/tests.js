"use client";

console.log("🧪 Testing: Advanced API Routes");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*gql.*}\s+from\s+['"]graphql-tag['"]/i.test(userCode)) {
            checks.push("✅ Imports gql from graphql-tag");
            score += 50;
        } else {
            checks.push("❌ Missing gql import");
        }

        if (/export\s+default\s+async\s+function\s*\(req,\s*res\)\s*{[^}]*graphql/i.test(userCode)) {
            checks.push("✅ Implements GraphQL in API route");
            score += 50;
        } else {
            checks.push("❌ Missing GraphQL implementation");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include GraphQL in API route`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Advanced API Routes", language: "javascript" }
    };
}

console.log("✅ Test ready for: Advanced API Routes");