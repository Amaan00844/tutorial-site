// Test for Static Portfolio Site
// JavaScript test that validates Next.js code for a static portfolio site

console.log("🧪 Testing: Static Portfolio Site");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: "", details: [] };

    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }

        let score = 0;
        const checks = [];

        // Check for export default
        if (/export\s+default/.test(userCode)) {
            checks.push("✅ Has default export");
            score += 25;
        } else {
            checks.push("❌ Missing default export");
        }

        // Check for function component
        if (/function\s+\w+\s*\(/.test(userCode) || /const\s+\w+\s*=\s*\(/.test(userCode)) {
            checks.push("✅ Has function component");
            score += 25;
        } else {
            checks.push("❌ Missing function component");
        }

        // Check for JSX return with multiple sections
        if (/return\s*\(/.test(userCode) && /<h1|<h2|<section/.test(userCode)) {
            checks.push("✅ Returns JSX with heading or section elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with heading or section elements");
        }

        // Check for CSS module import
        if (/import\s+.*from\s+['"].*\.module\.css['"]/.test(userCode)) {
            checks.push("✅ Uses CSS modules for styling");
            score += 25;
        } else {
            checks.push("❌ Missing CSS module import");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Create a static portfolio with CSS modules`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Static Portfolio Site", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Static Portfolio Site");