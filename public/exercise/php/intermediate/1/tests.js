// php/intermediate/1/tests.js
// Test for Object-Oriented PHP
console.log("🧪 Testing: Object-Oriented PHP");

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
        const hasObject = userCode.match(/\$\w+\s*=\s*new\s+\w+\s*\(\s*[^)]*\)\s*;/);
        if (hasObject) {
            checks.push("✅ Has object instantiation");
            score += 25;
        } else {
            checks.push("❌ Missing object instantiation");
        }
        
        // Check for private/protected property
        const hasPrivateProperty = userCode.match(/\b(private|protected)\s+\$\w+\s*(=\s*[^;]+)?;/);
        if (hasPrivateProperty) {
            checks.push("✅ Has private/protected property");
            score += 25;
        } else {
            checks.push("❌ Missing private/protected property");
        }
        
        // Check for method declaration
        const hasMethod = userCode.match(/\b(public|private|protected)?\s*function\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasMethod) {
            checks.push("✅ Has method declaration");
            score += 25;
        } else {
            checks.push("❌ Missing method declaration");
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

console.log("✅ Test ready for: Object-Oriented PHP");