// react/basic/2/tests.js
// Test for Props and Component Communication
console.log("🧪 Testing: Props and Component Communication");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for props in function signature
        const hasProps = userCode.match(/function\s+\w+\s*\(\s*{[^}]+}\s*\)/);
        if (hasProps) {
            checks.push("✅ Has props in component");
            score += 25;
        } else {
            checks.push("❌ Missing props in component");
        }
        
        // Check for prop usage in JSX
        const hasPropUsage = userCode.match(/{\s*\w+\.\w+\s*}/);
        if (hasPropUsage) {
            checks.push("✅ Has prop usage in JSX");
            score += 25;
        } else {
            checks.push("❌ Missing prop usage in JSX");
        }
        
        // Check for child component
        const hasChildComponent = userCode.match(/<\w+\s+[^>]+ roze\s*/);
        if (hasChildComponent) {
            checks.push("✅ Has child component");
            score += 25;
        } else {
            checks.push("❌ Missing child component");
        }
        
        // Check for prop passing
        const hasPropPassing = userCode.match(/<\w+\s+\w+\s*=\s*{[^}]+}/);
        if (hasPropPassing) {
            checks.push("✅ Has prop passing to component");
            score += 25;
        } else {
            checks.push("❌ Missing prop passing to component");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more props and communication features`;
            
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

console.log("✅ Test ready for: Props and Component Communication");