"use client";

console.log("🧪 Testing: Streaming and Suspense");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*Suspense.*}\s+from\s+['"]react['"]/i.test(userCode)) {
            checks.push("✅ Imports Suspense from react");
            score += 50;
        } else {
            checks.push("❌ Missing Suspense import");
        }

        if (/<Suspense\s+fallback\s*=\s*{[^}]+}>.*<\/Suspense>/i.test(userCode)) {
            checks.push("✅ Uses Suspense with fallback");
            score += 50;
        } else {
            checks.push("❌ Missing Suspense with fallback");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Suspense with fallback`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Streaming and Suspense", language: "javascript" }
    };
}

console.log("✅ Test ready for: Streaming and Suspense");