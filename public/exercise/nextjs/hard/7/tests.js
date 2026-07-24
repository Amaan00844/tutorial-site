"use client";

console.log("🧪 Testing: Micro-frontends Architecture");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/module\.exports\s*=\s*{.*federation:/i.test(userCode)) {
            checks.push("✅ Defines Module Federation configuration");
            score += 50;
        } else {
            checks.push("❌ Missing Module Federation configuration");
        }

        if (/remotes\s*:\s*{/i.test(userCode)) {
            checks.push("✅ Configures remotes for Module Federation");
            score += 50;
        } else {
            checks.push("❌ Missing remotes configuration");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include Module Federation with remotes`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Micro-frontends Architecture", language: "javascript" }
    };
}

console.log("✅ Test ready for: Micro-frontends Architecture");