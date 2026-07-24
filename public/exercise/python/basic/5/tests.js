// python/basic/5/tests.js
// Test for Loops and Iteration
console.log("🧪 Testing: Loops and Iteration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for for loop
        const hasForLoop = userCode.match(/\bfor\s+\w+\s+in\s+[^:]+:/);
        if (hasForLoop) {
            checks.push("✅ Has for loop");
            score += 25;
        } else {
            checks.push("❌ Missing for loop");
        }
        
        // Check for while loop
        const hasWhileLoop = userCode.match(/\bwhile\s+[^:]+:/);
        if (hasWhileLoop) {
            checks.push("✅ Has while loop");
            score += 25;
        } else {
            checks.push("❌ Missing while loop");
        }
        
        // Check for list comprehension
        const hasListComp = userCode.match(/\[\s*[^[]+\s+for\s+\w+\s+in\s+[^]]+\]/);
        if (hasListComp) {
            checks.push("✅ Has list comprehension");
            score += 25;
        } else {
            checks.push("❌ Missing list comprehension");
        }
        
        // Check for range function
        const hasRange = userCode.match(/\brange\s*\(\s*[^)]+\)/);
        if (hasRange) {
            checks.push("✅ Has range function");
            score += 25;
        } else {
            checks.push("❌ Missing range function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more loop features`;
            
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
console.log("✅ Test ready for: Loops and Iteration");
