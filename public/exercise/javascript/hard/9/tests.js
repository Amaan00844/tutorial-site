
// javascript/hard/9/tests.js
// Test for Memory Management and Debugging
console.log("🧪 Testing: Memory Management and Debugging");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for WeakMap
        const hasWeakMap = userCode.match(/\bnew\s+WeakMap\s*\(\s*\)\s*;/);
        if (hasWeakMap) {
            checks.push("✅ Has WeakMap");
            score += 25;
        } else {
            checks.push("❌ Missing WeakMap");
        }
        
        // Check for WeakSet
        const hasWeakSet = userCode.match(/\bnew\s+WeakSet\s*\(\s*\)\s*;/);
        if (hasWeakSet) {
            checks.push("✅ Has WeakSet");
            score += 25;
        } else {
            checks.push("❌ Missing WeakSet");
        }
        
        // Check for console.time
        const hasConsoleTime = userCode.match(/\bconsole\.time\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasConsoleTime) {
            checks.push("✅ Has console.time");
            score += 25;
        } else {
            checks.push("❌ Missing console.time");
        }
        
        // Check for console.memory
        const hasConsoleMemory = userCode.match(/\bconsole\.memory\s*;/);
        if (hasConsoleMemory) {
            checks.push("✅ Has console.memory");
            score += 25;
        } else {
            checks.push("❌ Missing console.memory");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more memory management features`;
            
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

console.log("✅ Test ready for: Memory Management and Debugging");