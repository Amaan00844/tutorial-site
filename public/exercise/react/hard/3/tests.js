
// react/hard/3/tests.js
// Test for Testing React Components
console.log("🧪 Testing: Testing React Components");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Jest import
        const hasJestImport = userCode.match(/import\s+[^;]+from\s+['"]@testing-library\/jest-dom['"]/);
        if (hasJestImport) {
            checks.push("✅ Has Jest import");
            score += 25;
        } else {
            checks.push("❌ Missing Jest import");
        }
        
        // Check for React Testing Library render
        const hasRender = userCode.match(/render\s*\(\s*<\w+\s+[^>]*>\s*<\/\w+>\s*\)/);
        if (hasRender) {
            checks.push("✅ Has render function");
            score += 25;
        } else {
            checks.push("❌ Missing render function");
        }
        
        // Check for screen query
        const hasScreenQuery = userCode.match(/screen\.getBy\w+\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasScreenQuery) {
            checks.push("✅ Has screen query");
            score += 25;
        } else {
            checks.push("❌ Missing screen query");
        }
        
        // Check for expect assertion
        const hasExpect = userCode.match(/expect\s*\(\s*[^)]+\)\.to\w+/);
        if (hasExpect) {
            checks.push("✅ Has expect assertion");
            score += 25;
        } else {
            checks.push("❌ Missing expect assertion");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more testing features`;
            
    } catch (e) {
        result.message = `Error: ${e.message}`;
    }
    
    return result;
}
// Export for Monaco Editor
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: runSimpleTest,
    testConfig: {
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: Testing React Components");