// react/basic/9/tests.js
// Test for Component Styling
console.log("🧪 Testing: Component Styling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for className attribute
        const hasClassName = userCode.match(/className\s*=\s*['"][^'"]+['"]/);
        if (hasClassName) {
            checks.push("✅ Has className attribute");
            score += 25;
        } else {
            checks.push("❌ Missing className attribute");
        }
        
        // Check for inline styles
        const hasInlineStyles = userCode.match(/style\s*=\s*{[^}]+}/);
        if (hasInlineStyles) {
            checks.push("✅ Has inline styles");
            score += 25;
        } else {
            checks.push("❌ Missing inline styles");
        }
        
        // Check for CSS module import
        const hasCssModule = userCode.match(/import\s+\w+\s+from\s+['"][^'"]+\.module\.css['"]/);
        if (hasCssModule) {
            checks.push("✅ Has CSS module import");
            score += 25;
        } else {
            checks.push("❌ Missing CSS module import");
        }
        
        // Check for styled-components import
        const hasStyledComponents = userCode.match(/import\s+styled\s+from\s+['"]styled-components['"]/);
        if (hasStyledComponents) {
            checks.push("✅ Has styled-components import");
            score += 25;
        } else {
            checks.push("❌ Missing styled-components import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more styling features`;
            
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
console.log("✅ Test ready for: Component Styling");