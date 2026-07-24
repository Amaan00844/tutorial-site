"use client";

console.log("🧪 Testing: Authentication Integration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*useSession.*}\s+from\s+['"]next-auth\/react['"]/i.test(userCode)) {
            checks.push("✅ Imports useSession from next-auth/react");
            score += 50;
        } else {
            checks.push("❌ Missing useSession import");
        }

        if (/useSession\s*\(\s*\)/i.test(userCode)) {
            checks.push("✅ Uses useSession hook");
            score += 50;
        } else {
            checks.push("❌ Missing useSession hook usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include useSession from next-auth/react`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Authentication Integration", language: "javascript" }
    };
}

console.log("✅ Test ready for: Authentication Integration");