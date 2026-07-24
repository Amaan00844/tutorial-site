// react/basic/3/tests.js
// Test for State and useState Hook
console.log("🧪 Testing: State and useState Hook");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for useState import
        const hasUseState = userCode.match(/import\s+{[^}]*useState[^}]*}\s+from\s+['"]react['"]/);
        if (hasUseState) {
            checks.push("✅ Has useState import");
            score += 25;
        } else {
            checks.push("❌ Missing useState import");
        }
        
        // Check for useState declaration
        const hasStateDeclaration = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasStateDeclaration) {
            checks.push("✅ Has useState declaration");
            score += 25;
        } else {
            checks.push("❌ Missing useState declaration");
        }
        
        // Check for state usage
        const hasStateUsage = userCode.match(/{\s*\w+\s*}/);
        if (hasStateUsage) {
            checks.push("✅ Has state usage in JSX");
            score += 25;
        } else {
            checks.push("❌ Missing state usage in JSX");
        }
        
        // Check for setState call
        const hasSetState = userCode.match(/\b\w+\s*\(\s*[^)]+\)/);
        if (hasSetState) {
            checks.push("✅ Has setState call");
            score += 25;
        } else {
            checks.push("❌ Missing setState call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more state and useState features`;
            
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

console.log("✅ Test ready for: State and useState Hook");