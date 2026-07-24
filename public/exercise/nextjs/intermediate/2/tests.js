"use client";

console.log("🧪 Testing: Middleware");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/export\s+default\s+function\s+middleware\s*\(req\)\s*{/i.test(userCode)) {
            checks.push("✅ Defines middleware function");
            score += 50;
        } else {
            checks.push("❌ Missing middleware function");
        }

        if (/NextResponse\.(next|redirect|rewrite)\s*\(/i.test(userCode)) {
            checks.push("✅ Uses NextResponse for middleware actions");
            score += 50;
        } else {
            checks.push("❌ Missing NextResponse usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include middleware function with NextResponse`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Middleware", language: "javascript" }
    };
}

console.log("✅ Test ready for: Middleware");