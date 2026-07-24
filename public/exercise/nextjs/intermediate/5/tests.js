"use client";

console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/React\.memo\s*\(/i.test(userCode)) {
            checks.push("✅ Uses React.memo for component optimization");
            score += 50;
        } else {
            checks.push("❌ Missing React.memo usage");
        }

        if (/useCallback|useMemo/i.test(userCode)) {
            checks.push("✅ Uses useCallback or useMemo for performance");
            score += 50;
        } else {
            checks.push("❌ Missing useCallback or useMemo");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include React.memo and useCallback/useMemo`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Performance Optimization", language: "javascript" }
    };
}

console.log("✅ Test ready for: Performance Optimization");