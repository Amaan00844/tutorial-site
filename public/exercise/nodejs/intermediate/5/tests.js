
// nodejs/intermediate/5/tests.js
// Test for Testing Node.js Applications
console.log("🧪 Testing: Testing Node.js Applications");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for testing library import
        const hasTestImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](jest|mocha)['"]\s*\)/);
        if (hasTestImport) {
            checks.push("✅ Has testing library import");
            score += 25;
        } else {
            checks.push("❌ Missing testing library import");
        }
        
        // Check for describe block
        const hasDescribe = userCode.match(/describe\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\)\s*{/);
        if (hasDescribe) {
            checks.push("✅ Has describe block");
            score += 25;
        } else {
            checks.push("❌ Missing describe block");
        }
        
        // Check for it/test block
        const hasTestBlock = userCode.match(/(it|test)\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\)\s*{/);
        if (hasTestBlock) {
            checks.push("✅ Has it/test block");
            score += 25;
        } else {
            checks.push("❌ Missing it/test block");
        }
        
        // Check for expect assertion
        const hasExpect = userCode.match(/expect\s*\(\s*[^)]+\)\.to\w+/);
        if (hasExpect) {
            checks.push("✅ Has expect assertion");
            score += 25;
        } else {
            checks.push("❌ Missing expect assertion");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more testing features`;
            
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
      topic: "Testing Node.js Applications",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Testing Node.js Applications");