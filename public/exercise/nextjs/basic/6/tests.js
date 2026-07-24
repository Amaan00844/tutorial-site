"use client";

console.log("🧪 Testing: Image Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+Image\s+from\s+['"]next\/image['"]/i.test(userCode)) {
            checks.push("✅ Imports Next.js Image component");
            score += 50;
        } else {
            checks.push("❌ Missing import of Next.js Image component");
        }

        if (/<Image\s+src\s*=\s*[^>]+/i.test(userCode)) {
            checks.push("✅ Uses Image component with src");
            score += 50;
        } else {
            checks.push("❌ Missing Image component usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Next.js Image component with src`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Image Optimization", language: "javascript" }
    };
}

console.log("✅ Test ready for: Image Optimization");