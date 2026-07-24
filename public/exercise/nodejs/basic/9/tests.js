// nodejs/basic/9/tests.js
// Test for Environment Variables
console.log("🧪 Testing: Environment Variables");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for process.env access
        const hasProcessEnv = userCode.match(/process\.env\.\w+/);
        if (hasProcessEnv) {
            checks.push("✅ Has process.env access");
            score += 25;
        } else {
            checks.push("❌ Missing process.env access");
        }
        
        // Check for default value
        const hasDefaultValue = userCode.match(/process\.env\.\w+\s*\|\|\s*['"][^'"]+['"]/);
        if (hasDefaultValue) {
            checks.push("✅ Has default value for env");
            score += 25;
        } else {
            checks.push("❌ Missing default value for env");
        }
        
        // Check for environment variable usage
        const hasEnvUsage = userCode.match(/console\.log\s*\(\s*process\.env\.\w+\s*\)/);
        if (hasEnvUsage) {
            checks.push("✅ Has environment variable usage");
            score += 25;
        } else {
            checks.push("❌ Missing environment variable usage");
        }
        
        // Check for configuration object
        const hasConfigObject = userCode.match(/const\s+\w+\s*=\s*{[^}]*process\.env\.\w+[^}]*}/);
        if (hasConfigObject) {
            checks.push("✅ Has configuration object");
            score += 25;
        } else {
            checks.push("❌ Missing configuration object");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more environment variable features`;
            
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
      topic: "Environment Variables",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Environment Variables");