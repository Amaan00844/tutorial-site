// react/basic/10/tests.js
// Test for React Router Basics
console.log("🧪 Testing: React Router Basics");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for react-router-dom import
        const hasRouterImport = userCode.match(/import\s+{[^}]*BrowserRouter[^}]*}\s+from\s+['"]react-router-dom['"]/);
        if (hasRouterImport) {
            checks.push("✅ Has react-router-dom import");
            score += 25;
        } else {
            checks.push("❌ Missing react-router-dom import");
        }
        
        // Check for BrowserRouter
        const hasBrowserRouter = userCode.match(/<BrowserRouter\s*>/);
        if (hasBrowserRouter) {
            checks.push("✅ Has BrowserRouter");
            score += 25;
        } else {
            checks.push("❌ Missing BrowserRouter");
        }
        
        // Check for Route component
        const hasRoute = userCode.match(/<Route\s+[^>]+>/);
        if (hasRoute) {
            checks.push("✅ Has Route component");
            score += 25;
        } else {
            checks.push("❌ Missing Route component");
        }
        
        // Check for Link component
        const hasLink = userCode.match(/<Link\s+to\s*=\s*['"][^'"]+['"][^>]*>/);
        if (hasLink) {
            checks.push("✅ Has Link component");
            score += 25;
        } else {
            checks.push("❌ Missing Link component");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more React Router features`;
            
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
console.log("✅ Test ready for: React Router Basics");
