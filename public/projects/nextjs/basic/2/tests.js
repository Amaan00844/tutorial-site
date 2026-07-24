// Test for Blog with Static Generation
// JavaScript test that validates Next.js code for a blog using SSG

console.log("🧪 Testing: Blog with Static Generation");

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

        // Check for getStaticProps
        if (/export\s+async\s+function\s+getStaticProps\s*\(/.test(userCode)) {
            checks.push("✅ Uses getStaticProps for SSG");
            score += 25;
        } else {
            checks.push("❌ Missing getStaticProps");
        }

        // Check for JSX return with blog post elements
        if (/return\s*\(/.test(userCode) && /<h1|<h2|<article/.test(userCode)) {
            checks.push("✅ Returns JSX with blog post elements");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return with blog post elements");
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
            : `Score: ${result.score}/100 - Create a blog with SSG and Tailwind CSS`;

    } catch (error) {
        result.message = "Error: " + error.message;
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: { topic: "Blog with Static Generation", language: "nextjs" }
    };
}

console.log("✅ Test ready for: Blog with Static Generation");