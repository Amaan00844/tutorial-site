// python/intermediate/1/tests.js
// Test for Object-Oriented Programming
console.log("🧪 Testing: Object-Oriented Programming");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for class definition
        const hasClassDef = userCode.match(/\bclass\s+\w+\s*:/);
        if (hasClassDef) {
            checks.push("✅ Has class definition");
            score += 25;
        } else {
            checks.push("❌ Missing class definition");
        }
        
        // Check for class inheritance
        const hasInheritance = userCode.match(/\bclass\s+\w+\s*\(\s*\w+\s*\)\s*:/);
        if (hasInheritance) {
            checks.push("✅ Has class inheritance");
            score += 25;
        } else {
            checks.push("❌ Missing class inheritance");
        }
        
        // Check for method definition
        const hasMethod = userCode.match(/\bdef\s+\w+\s*\(\s*self\s*(,\s*\w+\s*)*\)\s*:/);
        if (hasMethod) {
            checks.push("✅ Has method definition");
            score += 25;
        } else {
            checks.push("❌ Missing method definition");
        }
        
        // Check for object instantiation
        const hasObject = userCode.match(/\b\w+\s*=\s*\w+\s*\(\s*[^)]*\)/);
        if (hasObject) {
            checks.push("✅ Has object instantiation");
            score += 25;
        } else {
            checks.push("❌ Missing object instantiation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more OOP features`;
            
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
console.log("✅ Test ready for: Object-Oriented Programming");