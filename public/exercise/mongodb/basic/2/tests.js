
// mongodb/basic/2/tests.js
"use client";

console.log("🧪 Testing: Database and Collection Access");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        if (/db\s*=\s*client\.db\s*\(\s*['"][^'"]+['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Accesses database with client.db");
            score += 50;
        } else {
            checks.push("❌ Missing client.db for database access");
        }

        if (/collection\s*=\s*db\.collection\s*\(\s*['"][^'"]+['"]\s*\)/i.test(userCode)) {
            checks.push("✅ Accesses collection with db.collection");
            score += 50;
        } else {
            checks.push("❌ Missing db.collection for collection access");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Include client.db and db.collection`;
    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Database and Collection Access", language: "javascript" }
    };
}

console.log("✅ Test ready for: Database and Collection Access");
