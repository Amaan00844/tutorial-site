
// javascript/basic/6/tests.js
// Test for Arrays and Basic Methods
console.log("🧪 Testing: Arrays and Basic Methods");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for array declaration
        const hasArrayDecl = userCode.match(/\b(let|const|var)\s+\w+\s*=\s*\[\s*[^]]*\]\s*;/);
        if (hasArrayDecl) {
            checks.push("✅ Has array declaration");
            score += 25;
        } else {
            checks.push("❌ Missing array declaration");
        }
        
        // Check for push or pop
        const hasPushPop = userCode.match(/\b\w+\.(push|pop)\s*\(\s*[^)]*\)\s*;/);
        if (hasPushPop) {
            checks.push("✅ Has push or pop");
            score += 25;
        } else {
            checks.push("❌ Missing push or pop");
        }
        
        // Check for shift or unshift
        const hasShiftUnshift = userCode.match(/\b\w+\.(shift|unshift)\s*\(\s*[^)]*\)\s*;/);
        if (hasShiftUnshift) {
            checks.push("✅ Has shift or unshift");
            score += 25;
        } else {
            checks.push("❌ Missing shift or unshift");
        }
        
        // Check for slice or splice
        const hasSliceSplice = userCode.match(/\b\w+\.(slice|splice)\s*\(\s*[^)]+\)\s*;/);
        if (hasSliceSplice) {
            checks.push("✅ Has slice or splice");
            score += 25;
        } else {
            checks.push("❌ Missing slice or splice");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more array method features`;
            
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

console.log("✅ Test ready for: Arrays and Basic Methods");