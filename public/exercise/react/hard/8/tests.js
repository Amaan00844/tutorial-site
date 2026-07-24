
// react/hard/8/tests.js
// Test for Web Vitals Optimization
console.log("🧪 Testing: Web Vitals Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for React.lazy
        const hasReactLazy = userCode.match(/React\.lazy\s*\(\s*\(\s*\)\s*=>\s*import\s*\(/);
        if (hasReactLazy) {
            checks.push("✅ Has React.lazy for code splitting");
            score += 25;
        } else {
            checks.push("❌ Missing React.lazy for code splitting");
        }
        
        // Check for useMemo
        const hasUseMemo = userCode.match(/useMemo\s*\(\s*\(\s*\)\s*=>\s*{/);
        if (hasUseMemo) {
            checks.push("✅ Has useMemo for optimization");
            score += 25;
        } else {
            checks.push("❌ Missing useMemo for optimization");
        }
        
        // Check for image optimization
        const hasImageOpt = userCode.match(/<img\s+[^>]*loading\s*=\s*['"]lazy['"]/);
        if (hasImageOpt) {
            checks.push("✅ Has lazy image loading");
            score += 25;
        } else {
            checks.push("❌ Missing lazy image loading");
        }
        
        // Check for performance monitoring
        const hasPerfMonitoring = userCode.match(/PerformanceObserver|performance\.mark/);
        if (hasPerfMonitoring) {
            checks.push("✅ Has performance monitoring");
            score += 25;
        } else {
            checks.push("❌ Missing performance monitoring");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more web vitals optimization features`;
            
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
console.log("✅ Test ready for: Web Vitals Optimization");