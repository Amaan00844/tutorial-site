
// mongodb/hard/4/tests.js
"use client";

console.log("🧪 Testing: Geospatial Queries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/\$geoNear\s*:\s*{/i.test(userCode)) {
            checks.push("✅ Uses $geoNear for geospatial query");
            score += 50;
        } else {
            checks.push("❌ Missing $geoNear for geospatial query");
        }

        if (/geometry\s*:\s*{.*type\s*:\s*['"]Point['"]/i.test(userCode)) {
            checks.push("✅ Defines Point geometry for geospatial query");
            score += 50;
        } else {
            checks.push("❌ Missing Point geometry definition");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include $geoNear and Point geometry`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Geospatial Queries", language: "javascript" }
    };
}

console.log("✅ Test ready for: Geospatial Queries");