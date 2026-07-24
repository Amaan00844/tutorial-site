"use client";

console.log("🧪 Testing: PWA Implementation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*Workbox.*}\s+from\s+['"]workbox-window['"]/i.test(userCode)) {
            checks.push("✅ Imports Workbox for PWA");
            score += 50;
        } else {
            checks.push("❌ Missing Workbox import");
        }

        if (/<Head>.*<link\s+rel=['"]manifest['"]/i.test(userCode)) {
            checks.push("✅ Includes manifest link in Head");
            score += 50;
        } else {
            checks.push("❌ Missing manifest link in Head");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Workbox and manifest link`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "PWA Implementation", language: "javascript" }
    };
}

console.log("✅ Test ready for: PWA Implementation");