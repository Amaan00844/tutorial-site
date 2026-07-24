"use client";

console.log("🧪 Testing: CSS and Styling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+styles\s+from\s+['"].*\.module\.css['"]/i.test(userCode)) {
            checks.push("✅ Imports CSS module");
            score += 50;
        } else {
            checks.push("❌ Missing CSS module import");
        }

        if (/<[^>]+className\s*=\s*{\s*styles\.\w+\s*}/i.test(userCode)) {
            checks.push("✅ Uses CSS module className");
            score += 50;
        } else {
            checks.push("❌ Missing CSS module className usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include CSS module import and usage`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "CSS and Styling", language: "javascript" }
    };
}

console.log("✅ Test ready for: CSS and Styling");