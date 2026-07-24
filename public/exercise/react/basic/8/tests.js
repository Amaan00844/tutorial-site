// react/basic/8/tests.js
// Test for useEffect Hook
console.log("🧪 Testing: useEffect Hook");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for useEffect import
        const hasUseEffect = userCode.match(/import\s+{[^}]*useEffect[^}]*}\s+from\s+['"]react['"]/);
        if (hasUseEffect) {
            checks.push("✅ Has useEffect import");
            score += 25;
        } else {
            checks.push("❌ Missing useEffect import");
        }
        
        // Check for useEffect call
        const hasUseEffectCall = userCode.match(/useEffect\s*\(\s*\(\s*\)\s*=>\s*{/);
        if (hasUseEffectCall) {
            checks.push("✅ Has useEffect call");
            score += 25;
        } else {
            checks.push("❌ Missing useEffect call");
        }
        
        // Check for dependency array
        const hasDependencyArray = userCode.match(/useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]+},\s*\[\s*[^\]]*\]\s*\)/);
        if (hasDependencyArray) {
            checks.push("✅ Has dependency array");
            score += 25;
        } else {
            checks.push("❌ Missing dependency array");
        }
        
        // Check for cleanup function
        const hasCleanup = userCode.match(/useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*return\s*\(\s*\)\s*=>\s*{/);
        if (hasCleanup) {
            checks.push("✅ Has cleanup function");
            score += 25;
        } else {
            checks.push("❌ Missing cleanup function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more useEffect features`;
            
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
console.log("✅ Test ready for: useEffect Hook");
