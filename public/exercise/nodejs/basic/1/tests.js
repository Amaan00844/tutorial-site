// nodejs/basic/1/tests.js
// Test for Node.js Basics and Modules
console.log("🧪 Testing: Node.js Basics and Modules");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for module.exports
        const hasModuleExports = userCode.match(/module\.exports\s*=\s*{/);
        if (hasModuleExports) {
            checks.push("✅ Has module.exports");
            score += 25;
        } else {
            checks.push("❌ Missing module.exports");
        }
        
        // Check for require statement
        const hasRequire = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasRequire) {
            checks.push("✅ Has require statement");
            score += 25;
        } else {
            checks.push("❌ Missing require statement");
        }
        
        // Check for function definition
        const hasFunction = userCode.match(/function\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasFunction) {
            checks.push("✅ Has function definition");
            score += 25;
        } else {
            checks.push("❌ Missing function definition");
        }
        
        // Check for console.log
        const hasConsoleLog = userCode.match(/console\.log\s*\(\s*[^)]+\)/);
        if (hasConsoleLog) {
            checks.push("✅ Has console.log");
            score += 25;
        } else {
            checks.push("❌ Missing console.log");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more module and basic features`;
            
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
      topic: "Node.js Basics and Modules",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Node.js Basics and Modules");