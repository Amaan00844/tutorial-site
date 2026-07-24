// react/intermediate/6/tests.js
// Test for React Portals
console.log("🧪 Testing: React Portals");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for createPortal import
        const hasCreatePortal = userCode.match(/import\s+{[^}]*createPortal[^}]*}\s+from\s+['"]react-dom['"]/);
        if (hasCreatePortal) {
            checks.push("✅ Has createPortal import");
            score += 25;
        } else {
            checks.push("❌ Missing createPortal import");
        }
        
        // Check for createPortal usage
        const hasPortalUsage = userCode.match(/createPortal\s*\(\s*<\w+[^>]*>/);
        if (hasPortalUsage) {
            checks.push("✅ Has createPortal usage");
            score += 25;
        } else {
            checks.push("❌ Missing createPortal usage");
        }
        
        // Check for DOM element reference
        const hasDomElement = userCode.match(/document\.getElementById\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasDomElement) {
            checks.push("✅ Has DOM element reference");
            score += 25;
        } else {
            checks.push("❌ Missing DOM element reference");
        }
        
        // Check for portal component
        const hasPortalComponent = userCode.match(/return\s+createPortal\s*\(\s*<\w+[^>]*>/);
        if (hasPortalComponent) {
            checks.push("✅ Has portal component");
            score += 25;
        } else {
            checks.push("❌ Missing portal component");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more portal features`;
            
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
console.log("✅ Test ready for: React Portals");