// react/intermediate/5/tests.js
// Test for Error Boundaries
console.log("🧪 Testing: Error Boundaries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for componentDidCatch
        const hasComponentDidCatch = userCode.match(/componentDidCatch\s*\(\s*error\s*,\s*info\s*\)\s*{/);
        if (hasComponentDidCatch) {
            checks.push("✅ Has componentDidCatch");
            score += 25;
        } else {
            checks.push("❌ Missing componentDidCatch");
        }
        
        // Check for static getDerivedStateFromError
        const hasGetDerivedState = userCode.match(/static\s+getDerivedStateFromError\s*\(\s*error\s*\)\s*{/);
        if (hasGetDerivedState) {
            checks.push("✅ Has getDerivedStateFromError");
            score += 25;
        } else {
            checks.push("❌ Missing getDerivedStateFromError");
        }
        
        // Check for error state
        const hasErrorState = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasErrorState) {
            checks.push("✅ Has error state");
            score += 25;
        } else {
            checks.push("❌ Missing error state");
        }
        
        // Check for error boundary usage
        const hasErrorBoundary = userCode.match(/<\w+\s+[^>]*>\s*<\w+\s+[^>]*>\s*<\/\w+>/);
        if (hasErrorBoundary) {
            checks.push("✅ Has error boundary usage");
            score += 25;
        } else {
            checks.push("❌ Missing error boundary usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more error boundary features`;
            
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
console.log("✅ Test ready for: Error Boundaries");