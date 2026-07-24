
// react/hard/6/tests.js
// Test for Microfrontends
console.log("🧪 Testing: Microfrontends");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for module federation import
        const hasModuleFederation = userCode.match(/import\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasModuleFederation) {
            checks.push("✅ Has dynamic import for module federation");
            score += 25;
        } else {
            checks.push("❌ Missing dynamic import for module federation");
        }
        
        // Check for remote component
        const hasRemoteComponent = userCode.match(/React\.lazy\s*\(\s*\(\s*\)\s*=>\s*import\s*\(/);
        if (hasRemoteComponent) {
            checks.push("✅ Has remote component");
            score += 25;
        } else {
            checks.push("❌ Missing remote component");
        }
        
        // Check for Suspense
        const hasSuspense = userCode.match(/<Suspense\s+fallback\s*=\s*{[^}]+}/);
        if (hasSuspense) {
            checks.push("✅ Has Suspense for microfrontend");
            score += 25;
        } else {
            checks.push("❌ Missing Suspense for microfrontend");
        }
        
        // Check for microfrontend configuration
        const hasMfConfig = userCode.match(/remoteEntry\.js/);
        if (hasMfConfig) {
            checks.push("✅ Has microfrontend configuration");
            score += 25;
        } else {
            checks.push("❌ Missing microfrontend configuration");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more microfrontend features`;
            
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
console.log("✅ Test ready for: Microfrontends");