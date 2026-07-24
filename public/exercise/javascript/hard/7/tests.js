
// javascript/hard/7/tests.js
// Test for Web APIs and Browser Features
console.log("🧪 Testing: Web APIs and Browser Features");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Fetch API
        const hasFetch = userCode.match(/\bfetch\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasFetch) {
            checks.push("✅ Has Fetch API");
            score += 25;
        } else {
            checks.push("❌ Missing Fetch API");
        }
        
        // Check for Web Worker
        const hasWebWorker = userCode.match(/\bnew\s+Worker\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasWebWorker) {
            checks.push("✅ Has Web Worker");
            score += 25;
        } else {
            checks.push("❌ Missing Web Worker");
        }
        
        // Check for Service Worker
        const hasServiceWorker = userCode.match(/\bnavigator\.serviceWorker\.register\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasServiceWorker) {
            checks.push("✅ Has Service Worker");
            score += 25;
        } else {
            checks.push("❌ Missing Service Worker");
        }
        
        // Check for Intersection Observer
        const hasIntersectionObserver = userCode.match(/\bnew\s+IntersectionObserver\s*\(\s*[^)]+\)\s*;/);
        if (hasIntersectionObserver) {
            checks.push("✅ Has Intersection Observer");
            score += 25;
        } else {
            checks.push("❌ Missing Intersection Observer");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Web API features`;
            
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

console.log("✅ Test ready for: Web APIs and Browser Features");