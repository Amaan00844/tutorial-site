// react/hard/4/tests.js
// Test for State Management Libraries
console.log("🧪 Testing: State Management Libraries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Redux import
        const hasReduxImport = userCode.match(/import\s+{[^}]*useSelector[^}]*}\s+from\s+['"]react-redux['"]/);
        if (hasReduxImport) {
            checks.push("✅ Has Redux import");
            score += 25;
        } else {
            checks.push("❌ Missing Redux import");
        }
        
        // Check for useSelector
        const hasUseSelector = userCode.match(/useSelector\s*\(\s*\(\s*state\s*\)\s*=>\s*state\.\w+\s*\)/);
        if (hasUseSelector) {
            checks.push("✅ Has useSelector");
            score += 25;
        } else {
            checks.push("❌ Missing useSelector");
        }
        
        // Check for useDispatch
        const hasUseDispatch = userCode.match(/const\s+dispatch\s*=\s*useDispatch\s*\(\s*\)/);
        if (hasUseDispatch) {
            checks.push("✅ Has useDispatch");
            score += 25;
        } else {
            checks.push("❌ Missing useDispatch");
        }
        
        // Check for Redux Provider
        const hasProvider = userCode.match(/<Provider\s+store\s*=\s*{[^}]+}\s*>/);
        if (hasProvider) {
            checks.push("✅ Has Redux Provider");
            score += 25;
        } else {
            checks.push("❌ Missing Redux Provider");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more state management features`;
            
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
console.log("✅ Test ready for: State Management Libraries");