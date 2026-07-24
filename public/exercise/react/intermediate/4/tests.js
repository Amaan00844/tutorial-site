
// react/intermediate/4/tests.js
// Test for Performance Optimization
console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for useMemo
        const hasUseMemo = userCode.match(/useMemo\s*\(\s*\(\s*\)\s*=>\s*{/);
        if (hasUseMemo) {
            checks.push("✅ Has useMemo");
            score += 25;
        } else {
            checks.push("❌ Missing useMemo");
        }
        
        // Check for useCallback
        const hasUseCallback = userCode.match(/useCallback\s*\(\s*\(\s*\)\s*=>\s*{/);
        if (hasUseCallback) {
            checks.push("✅ Has useCallback");
            score += 25;
        } else {
            checks.push("❌ Missing useCallback");
        }
        
        // Check for React.memo
        const hasReactMemo = userCode.match(/export\s+default\s+React\.memo\s*\(\s*\w+\s*\)/);
        if (hasReactMemo) {
            checks.push("✅ Has React.memo");
            score += 25;
        } else {
            checks.push("❌ Missing React.memo");
        }
        
        // Check for dependency array
        const hasDependencyArray = userCode.match(/(useMemo|useCallback)\s*\(\s*\(\s*\)\s*=>\s*{[^}]+},\s*\[\s*[^\]]*\]\s*\)/);
        if (hasDependencyArray) {
            checks.push("✅ Has dependency array");
            score += 25;
        } else {
            checks.push("❌ Missing dependency array");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more performance optimization features`;
            
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
console.log("✅ Test ready for: Performance Optimization");