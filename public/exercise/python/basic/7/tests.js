// python/basic/7/tests.js
// Test for Dictionaries and Sets
console.log("🧪 Testing: Dictionaries and Sets");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for dictionary declaration
        const hasDict = userCode.match(/\b\w+\s*=\s*\{\s*['"]?\w+['"]?\s*:\s*[^,]+/);
        if (hasDict) {
            checks.push("✅ Has dictionary declaration");
            score += 25;
        } else {
            checks.push("❌ Missing dictionary declaration");
        }
        
        // Check for set declaration
        const hasSet = userCode.match(/\b\w+\s*=\s*\{\s*[^}]+?\}\s*$/m) || userCode.match(/\b\w+\s*=\s*set\s*\(\s*[^)]+\)/);
        if (hasSet) {
            checks.push("✅ Has set declaration");
            score += 25;
        } else {
            checks.push("❌ Missing set declaration");
        }
        
        // Check for dictionary access
        const hasDictAccess = userCode.match(/\b\w+\[\s*['"]\w+['"]\s*\]/);
        if (hasDictAccess) {
            checks.push("✅ Has dictionary access");
            score += 25;
        } else {
            checks.push("❌ Missing dictionary access");
        }
        
        // Check for set operation
        const hasSetOp = userCode.match(/\b\w+\.(union|intersection|difference)\s*\(\s*[^)]+\)/);
        if (hasSetOp) {
            checks.push("✅ Has set operation");
            score += 25;
        } else {
            checks.push("❌ Missing set operation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more dictionary and set features`;
            
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
console.log("✅ Test ready for: Dictionaries and Sets");