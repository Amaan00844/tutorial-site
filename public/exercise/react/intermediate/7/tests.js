// react/intermediate/7/tests.js
// Test for Lazy Loading Components
console.log("🧪 Testing: Lazy Loading Components");

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
            checks.push("✅ Has React.lazy");
            score += 25;
        } else {
            checks.push("❌ Missing React.lazy");
        }
        
        // Check for Suspense
        const hasSuspense = userCode.match(/<Suspense\s+fallback\s*=\s*{[^}]+}/);
        if (hasSuspense) {
            checks.push("✅ Has Suspense component");
            score += 25;
        } else {
            checks.push("❌ Missing Suspense component");
        }
        
        // Check for dynamic import
        const hasDynamicImport = userCode.match(/import\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasDynamicImport) {
            checks.push("✅ Has dynamic import");
            score += 25;
        } else {
            checks.push("❌ Missing dynamic import");
        }
        
        // Check for lazy component usage
        const hasLazyComponent = userCode.match(/<\w+\s+[^>]*>\s*<\/\w+>/);
        if (hasLazyComponent) {
            checks.push("✅ Has lazy component usage");
            score += 25;
        } else {
            checks.push("❌ Missing lazy component usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more lazy loading features`;
            
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
console.log("✅ Test ready for: Lazy Loading Components");