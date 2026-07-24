// python/basic/6/tests.js
// Test for Lists and Basic Methods
console.log("🧪 Testing: Lists and Basic Methods");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for list declaration
        const hasList = userCode.match(/\b\w+\s*=\s*\[\s*[^]]*\]/);
        if (hasList) {
            checks.push("✅ Has list declaration");
            score += 25;
        } else {
            checks.push("❌ Missing list declaration");
        }
        
        // Check for append method
        const hasAppend = userCode.match(/\b\w+\.append\s*\(\s*[^)]+\)/);
        if (hasAppend) {
            checks.push("✅ Has append method");
            score += 25;
        } else {
            checks.push("❌ Missing append method");
        }
        
        // Check for remove method
        const hasRemove = userCode.match(/\b\w+\.remove\s*\(\s*[^)]+\)/);
        if (hasRemove) {
            checks.push("✅ Has remove method");
            score += 25;
        } else {
            checks.push("❌ Missing remove method");
        }
        
        // Check for list slicing
        const hasSlice = userCode.match(/\b\w+\[\s*\d*\s*:\s*\d*\s*\]/);
        if (hasSlice) {
            checks.push("✅ Has list slicing");
            score += 25;
        } else {
            checks.push("❌ Missing list slicing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more list methods`;
            
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
console.log("✅ Test ready for: Lists and Basic Methods");
