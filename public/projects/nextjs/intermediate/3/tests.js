// Test for User Profile with Authentication
// JavaScript test that validates Next.js code for a user profile page with authentication

console.log("🧪 Testing: User Profile with Authentication");

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
            score += 20;
        } else {
            checks.push("❌ Missing default export");
        }

        // Check for NextAuth.js import
        if (/import\s+.*from\s*['"]next-auth\/react['"]/.test(userCode)) {
            checks.push("✅ Imports NextAuth.js");
            score += 30;
        } else {
            checks.push("❌ Missing NextAuth.js import");
        }

        // Check for JSX return with profile elements
        if (/return\s*\(/.test(userCode) && /<div.*?profile|<h1|<h2/.test(userCode)) {
            checks.push("✅ Returns JSX with profile elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with profile elements");
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
            : `Score: ${result.score}/100 - Create a user profile with NextAuth.js and CSS modules`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "User Profile with Authentication", language: "nextjs" }
    };
}

console.log("✅ Test ready for: User Profile with Authentication");