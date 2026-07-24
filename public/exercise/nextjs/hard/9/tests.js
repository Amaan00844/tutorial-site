"use client";

console.log("🧪 Testing: Performance Monitoring");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/import\s+{.*useEffect.*}\s+from\s+['"]react['"]/i.test(userCode)) {
            checks.push("✅ Imports useEffect for monitoring");
            score += 50;
        } else {
            checks.push("❌ Missing useEffect import");
        }

        if (/useEffect\s*\(\s*\(\)\s*=>\s*{[^}]*performance/i.test(userCode)) {
            checks.push("✅ Uses useEffect for performance monitoring");
            score += 50;
        } else {
            checks.push("❌ Missing performance monitoring in useEffect");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include useEffect for performance monitoring`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Performance Monitoring", language: "javascript" }
    };
}

console.log("✅ Test ready for: Performance Monitoring");