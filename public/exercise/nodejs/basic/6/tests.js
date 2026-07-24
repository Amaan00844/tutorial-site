// nodejs/basic/6/tests.js
// Test for Event Emitters
console.log("🧪 Testing: Event Emitters");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for EventEmitter import
        const hasEventEmitter = userCode.match(/const\s+EventEmitter\s*=\s*require\s*\(\s*['"]events['"]\s*\)/);
        if (hasEventEmitter) {
            checks.push("✅ Has EventEmitter import");
            score += 25;
        } else {
            checks.push("❌ Missing EventEmitter import");
        }
        
        // Check for EventEmitter instance
        const hasEmitterInstance = userCode.match(/new\s+EventEmitter\s*\(\s*\)/);
        if (hasEmitterInstance) {
            checks.push("✅ Has EventEmitter instance");
            score += 25;
        } else {
            checks.push("❌ Missing EventEmitter instance");
        }
        
        // Check for event listener
        const hasOnListener = userCode.match(/\.on\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(/);
        if (hasOnListener) {
            checks.push("✅ Has event listener");
            score += 25;
        } else {
            checks.push("❌ Missing event listener");
        }
        
        // Check for event emit
        const hasEmit = userCode.match(/\.emit\s*\(\s*['"][^'"]+['"]/);
        if (hasEmit) {
            checks.push("✅ Has event emit");
            score += 25;
        } else {
            checks.push("❌ Missing event emit");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more event emitter features`;
            
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
      topic: "Event Emitters",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Event Emitters");