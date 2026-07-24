
// javascript/intermediate/5/tests.js
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
        const hasClass = userCode.match(/\bclass\s+\w+\s*{/);
        if (hasClass) {
            checks.push("✅ Has class declaration");
            score += 25;
        } else {
            checks.push("❌ Missing class declaration");
        }
        
        // Check for constructor
        const hasConstructor = userCode.match(/\bconstructor\s*\(\s*[^)]*\)\s*{/);
        if (hasConstructor) {
            checks.push("✅ Has constructor");
            score += 25;
        } else {
            checks.push("❌ Missing constructor");
        }
        
        // Check for extends
        const hasExtends = userCode.match(/\bclass\s+\w+\s+extends\s+\w+\s*{/);
        if (hasExtends) {
            checks.push("✅ Has extends");
            score += 25;
        } else {
            checks.push("❌ Missing extends");
        }
        
        // Check for this binding
        const hasThis = userCode.match(/\bthis\.\w+\s*=\s*[^;]+;/);
        if (hasThis) {
            checks.push("✅ Has this binding");
            score += 25;
        } else {
            checks.push("❌ Missing this binding");
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