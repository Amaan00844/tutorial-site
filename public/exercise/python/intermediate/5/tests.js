// python/intermediate/5/tests.js
// Test for Regular Expressions
console.log("🧪 Testing: Regular Expressions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for re import
        const hasReImport = userCode.match(/\bimport\s+re\b/);
        if (hasReImport) {
            checks.push("✅ Has re import");
            score += 25;
        } else {
            checks.push("❌ Missing re import");
        }
        
        // Check for re.match
        const hasReMatch = userCode.match(/\bre\.match\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasReMatch) {
            checks.push("✅ Has re.match");
            score += 25;
        } else {
            checks.push("❌ Missing re.match");
        }
        
        // Check for re.search
        const hasReSearch = userCode.match(/\bre\.search\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasReSearch) {
            checks.push("✅ Has re.search");
            score += 25;
        } else {
            checks.push("❌ Missing re.search");
        }
        
        // Check for re.sub
        const hasReSub = userCode.match(/\bre\.sub\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasReSub) {
            checks.push("✅ Has re.sub");
            score += 25;
        } else {
            checks.push("❌ Missing re.sub");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more regex features`;
            
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
console.log("✅ Test ready for: Regular Expressions");