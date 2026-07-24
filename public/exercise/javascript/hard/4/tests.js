
// javascript/hard/4/tests.js
// Test for Metaprogramming and Proxies
console.log("🧪 Testing: Metaprogramming and Proxies");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Proxy
        const hasProxy = userCode.match(/\bnew\s+Proxy\s*\(\s*\w+\s*,\s*{/);
        if (hasProxy) {
            checks.push("✅ Has Proxy");
            score += 25;
        } else {
            checks.push("❌ Missing Proxy");
        }
        
        // Check for get trap
        const hasGetTrap = userCode.match(/\bget\s*:\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{/);
        if (hasGetTrap) {
            checks.push("✅ Has get trap");
            score += 25;
        } else {
            checks.push("❌ Missing get trap");
        }
        
        // Check for set trap
        const hasSetTrap = userCode.match(/\bset\s*:\s*function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*{/);
        if (hasSetTrap) {
            checks.push("✅ Has set trap");
            score += 25;
        } else {
            checks.push("❌ Missing set trap");
        }
        
        // Check for Reflect API
        const hasReflect = userCode.match(/\bReflect\.\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasReflect) {
            checks.push("✅ Has Reflect API");
            score += 25;
        } else {
            checks.push("❌ Missing Reflect API");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more metaprogramming features`;
            
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

console.log("✅ Test ready for: Metaprogramming and Proxies");
