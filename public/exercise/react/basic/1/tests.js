// react/basic/1/tests.js
// Test for React Components and JSX
console.log("🧪 Testing: React Components and JSX");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for functional component
        const hasFunctionComponent = userCode.match(/function\s+\w+\s*\(\s*\)\s*{/);
        if (hasFunctionComponent) {
            checks.push("✅ Has functional component");
            score += 25;
        } else {
            checks.push("❌ Missing functional component");
        }
        
        // Check for JSX return
        const hasJsxReturn = userCode.match(/return\s*\(\s*<\w+/);
        if (hasJsxReturn) {
            checks.push("✅ Has JSX return");
            score += 25;
        } else {
            checks.push("❌ Missing JSX return");
        }
        
        // Check for JSX element
        const hasJsxElement = userCode.match(/<\w+[^>]*>/);
        if (hasJsxElement) {
            checks.push("✅ Has JSX element");
            score += 25;
        } else {
            checks.push("❌ Missing JSX element");
        }
        
        // Check for component export
        const hasExport = userCode.match(/export\s+default\s+\w+/);
        if (hasExport) {
            checks.push("✅ Has component export");
            score += 25;
        } else {
            checks.push("❌ Missing component export");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more component and JSX features`;
            
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

console.log("✅ Test ready for: React Components and JSX");
