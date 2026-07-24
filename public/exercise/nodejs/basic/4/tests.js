
// nodejs/basic/4/tests.js
// Test for NPM and Package Management
console.log("🧪 Testing: NPM and Package Management");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for external package require
        const hasPackageRequire = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasPackageRequire) {
            checks.push("✅ Has external package require");
            score += 25;
        } else {
            checks.push("❌ Missing external package require");
        }
        
        // Check for package usage
        const hasPackageUsage = userCode.match(/\w+\.\w+\s*\(/);
        if (hasPackageUsage) {
            checks.push("✅ Has package usage");
            score += 25;
        } else {
            checks.push("❌ Missing package usage");
        }
        
        // Check for module.exports
        const hasModuleExports = userCode.match(/module\.exports\s*=\s*{/);
        if (hasModuleExports) {
            checks.push("✅ Has module.exports");
            score += 25;
        } else {
            checks.push("❌ Missing module.exports");
        }
        
        // Check for function with package
        const hasFunction = userCode.match(/function\s+\w+\s*\(\s*[^)]*\)\s*{[^}]*\w+\.\w+\s*\(/);
        if (hasFunction) {
            checks.push("✅ Has function using package");
            score += 25;
        } else {
            checks.push("❌ Missing function using package");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more NPM package features`;
            
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
      topic: "NPM and Package Management",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: NPM and Package Management");