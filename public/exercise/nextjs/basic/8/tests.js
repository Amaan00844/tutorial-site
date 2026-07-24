"use client";

console.log("🧪 Testing: Head and Metadata");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+Head\s+from\s+['"]next\/head['"]/i.test(userCode)) {
            checks.push("✅ Imports Next.js Head component");
            score += 50;
        } else {
            checks.push("❌ Missing import of Next.js Head component");
        }

        if (/<Head>.*<(title|meta)[^>]+>.*<\/Head>/i.test(userCode)) {
            checks.push("✅ Uses Head component with title or meta tags");
            score += 50;
        } else {
            checks.push("❌ Missing Head component with title or meta tags");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Head component with title or meta tags`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Head and Metadata", language: "javascript" }
    };
}

console.log("✅ Test ready for: Head and Metadata");