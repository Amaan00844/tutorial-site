// react/intermediate/2/tests.js
// Test for Context API
console.log("🧪 Testing: Context API");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for createContext
        const hasCreateContext = userCode.match(/createContext\s*\(\s*[^)]*\)/);
        if (hasCreateContext) {
            checks.push("✅ Has createContext");
            score += 25;
        } else {
            checks.push("❌ Missing createContext");
        }
        
        // Check for Provider
        const hasProvider = userCode.match(/<\w+\.Provider\s+[^>]+>/);
        if (hasProvider) {
            checks.push("✅ Has Context Provider");
            score += 25;
        } else {
            checks.push("❌ Missing Context Provider");
        }
        
        // Check for useContext
        const hasUseContext = userCode.match(/useContext\s*\(\s*\w+\s*\)/);
        if (hasUseContext) {
            checks.push("✅ Has useContext");
            score += 25;
        } else {
            checks.push("❌ Missing useContext");
        }
        
        // Check for context value
        const hasContextValue = userCode.match(/value\s*=\s*{[^}]+}/);
        if (hasContextValue) {
            checks.push("✅ Has context value");
            score += 25;
        } else {
            checks.push("❌ Missing context value");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Context API features`;
            
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
console.log("✅ Test ready for: Context API");
