
// java/basic/6/tests.js
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
        
        // Check for class declaration
        const hasClassDecl = userCode.match(/\bclass\s+\w+\s*{/);
        if (hasClassDecl) {
            checks.push("✅ Has class declaration");
            score += 25;
        } else {
            checks.push("❌ Missing class declaration");
        }
        
        // Check for object instantiation
        const hasObject = userCode.match(/\bnew\s+\w+\s*\(\s*[^)]*\)\s*;/);
        if (hasObject) {
            checks.push("✅ Has object instantiation");
            score += 25;
        } else {
            checks.push("❌ Missing object instantiation");
        }
        
        // Check for private fields
        const hasPrivateField = userCode.match(/\bprivate\s+\w+\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasPrivateField) {
            checks.push("✅ Has private fields");
            score += 25;
        } else {
            checks.push("❌ Missing private fields");
        }
        
        // Check for getter/setter
        const hasGetterSetter = userCode.match(/\b(public|private)\s+\w+\s+(get|set)\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasGetterSetter) {
            checks.push("✅ Has getter or setter");
            score += 25;
        } else {
            checks.push("❌ Missing getter or setter");
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