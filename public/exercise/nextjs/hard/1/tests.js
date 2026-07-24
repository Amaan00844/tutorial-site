"use client";

console.log("🧪 Testing: App Router (Next.js 13+)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/'use\s+client'/i.test(userCode)) {
            checks.push("✅ Uses 'use client' directive for App Router");
            score += 50;
        } else {
            checks.push("❌ Missing 'use client' directive");
        }

        if (/export\s+default\s+function\s+\w+\s*\(\)\s*{[^}]*return\s*\(\s*<\w+>.*<\/\w+>\s*\)/i.test(userCode)) {
            checks.push("✅ Defines client component with JSX");
            score += 50;
        } else {
            checks.push("❌ Missing client component with JSX");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include 'use client' directive and client component`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "App Router (Next.js 13+)", language: "javascript" }
    };
}

console.log("✅ Test ready for: App Router (Next.js 13+)");