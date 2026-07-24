"use client";

console.log("🧪 Testing: Internationalization (i18n)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*useRouter.*}\s+from\s+['"]next\/router['"]/i.test(userCode)) {
            checks.push("✅ Imports useRouter for i18n");
            score += 50;
        } else {
            checks.push("❌ Missing useRouter import");
        }

        if (/{.*locale.*}/i.test(userCode)) {
            checks.push("✅ Uses locale from router");
            score += 50;
        } else {
            checks.push("❌ Missing locale usage");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include useRouter and locale for i18n`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Internationalization (i18n)", language: "javascript" }
    };
}

console.log("✅ Test ready for: Internationalization (i18n)");