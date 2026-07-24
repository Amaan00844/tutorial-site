
// react/hard/5/tests.js
// Test for React Concurrent Features
console.log("🧪 Testing: React Concurrent Features");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Suspense
        const hasSuspense = userCode.match(/<Suspense\s+fallback\s*=\s*{[^}]+}/);
        if (hasSuspense) {
            checks.push("✅ Has Suspense");
            score += 25;
        } else {
            checks.push("❌ Missing Suspense");
        }
        
        // Check for startTransition
        const hasStartTransition = userCode.match(/startTransition\s*\(\s*\(\s*\)\s*=>\s*{/);
        if (hasStartTransition) {
            checks.push("✅ Has startTransition");
            score += 25;
        } else {
            checks.push("❌ Missing startTransition");
        }
        
        // Check for useTransition
        const hasUseTransition = userCode.match(/const\s+\[\s*\w+\s*,\s*startTransition\s*\]\s*=\s*useTransition\s*\(\s*\)/);
        if (hasUseTransition) {
            checks.push("✅ Has useTransition");
            score += 25;
        } else {
            checks.push("❌ Missing useTransition");
        }
        
        // Check for deferred value
        const hasDeferredValue = userCode.match(/useDeferredValue\s*\(\s*[^)]+\)/);
        if (hasDeferredValue) {
            checks.push("✅ Has useDeferredValue");
            score += 25;
        } else {
            checks.push("❌ Missing useDeferredValue");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more concurrent features`;
            
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
console.log("✅ Test ready for: React Concurrent Features");