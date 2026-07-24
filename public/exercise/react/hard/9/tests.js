// react/hard/9/tests.js
// Test for Custom Renderers
console.log("🧪 Testing: Custom Renderers");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ReactDOM.createRoot
        const hasCreateRoot = userCode.match(/ReactDOM\.createRoot\s*\(\s*[^)]+\)/);
        if (hasCreateRoot) {
            checks.push("✅ Has ReactDOM.createRoot");
            score += 25;
        } else {
            checks.push("❌ Missing ReactDOM.createRoot");
        }
        
        // Check for custom renderer
        const hasCustomRenderer = userCode.match(/render\s*\(\s*<\w+\s+[^>]*>\s*,\s*document/);
        if (hasCustomRenderer) {
            checks.push("✅ Has custom renderer");
            score += 25;
        } else {
            checks.push("❌ Missing custom renderer");
        }
        
        // Check for hydration
        const hasHydration = userCode.match(/ReactDOM\.hydrate\s*\(\s*<\w+\s+[^>]*>/);
        if (hasHydration) {
            checks.push("✅ Has hydration");
            score += 25;
        } else {
            checks.push("❌ Missing hydration");
        }
        
        // Check for custom DOM manipulation
        const hasDomManipulation = userCode.match(/document\.createElement\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasDomManipulation) {
            checks.push("✅ Has custom DOM manipulation");
            score += 25;
        } else {
            checks.push("❌ Missing custom DOM manipulation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more custom renderer features`;
            
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
console.log("✅ Test ready for: Custom Renderers");
