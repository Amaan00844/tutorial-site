
// react/hard/1/tests.js
// Test for Advanced Patterns
console.log("🧪 Testing: Advanced Patterns");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Higher-Order Component
        const hasHOC = userCode.match(/function\s+\w+\s*\(\s*Component\s*\)\s*{/);
        if (hasHOC) {
            checks.push("✅ Has Higher-Order Component");
            score += 25;
        } else {
            checks.push("❌ Missing Higher-Order Component");
        }
        
        // Check for render props
        const hasRenderProps = userCode.match(/render\s*=\s*{[^}]+}/);
        if (hasRenderProps) {
            checks.push("✅ Has render props");
            score += 25;
        } else {
            checks.push("❌ Missing render props");
        }
        
        // Check for HOC usage
        const hasHOCUsage = userCode.match(/<\w+\s+[^>]*>\s*<\w+\s+[^>]*>/);
        if (hasHOCUsage) {
            checks.push("✅ Has HOC usage");
            score += 25;
        } else {
            checks.push("❌ Missing HOC usage");
        }
        
        // Check for component composition
        const hasComposition = userCode.match(/<\w+\s+[^>]*>\s*{children}\s*<\/\w+>/);
        if (hasComposition) {
            checks.push("✅ Has component composition");
            score += 25;
        } else {
            checks.push("❌ Missing component composition");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced pattern features`;
            
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
console.log("✅ Test ready for: Advanced Patterns");