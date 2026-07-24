// Test for Real-Time Collaboration App
// JavaScript test that validates Next.js code for a real-time collaboration app

console.log("🧪 Testing: Real-Time Collaboration App");

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

        // Check for WebSocket/Socket.IO usage
        if (/import\s+.*from\s*['"]socket\.io-client['"]/.test(userCode) || /WebSocket/.test(userCode)) {
            checks.push("✅ Uses WebSocket or Socket.IO");
            score += 30;
        } else {
            checks.push("❌ Missing WebSocket or Socket.IO usage");
        }

        // Check for JSX return with collaboration elements
        if (/return\s*\(/.test(userCode) && /<div.*?editor|<textarea/.test(userCode)) {
            checks.push("✅ Returns JSX with editor elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with editor elements");
        }

        // Check for Tailwind CSS classes
        if (/className\s*=\s*['"].*?\b(bg|text|font|p|m)-/.test(userCode)) {
            checks.push("✅ Uses Tailwind CSS for styling");
            score += 25;
        } else {
            checks.push("❌ Missing Tailwind CSS classes");
        }

        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Create a real-time collaboration app with WebSockets and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Real-Time Collaboration App", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Real-Time Collaboration App");