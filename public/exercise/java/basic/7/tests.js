
// java/basic/7/tests.js
// Test for Inheritance and Polymorphism
console.log("🧪 Testing: Inheritance and Polymorphism");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for extends keyword
        const hasExtends = userCode.match(/\bclass\s+\w+\s+extends\s+\w+\s*{/);
        if (hasExtends) {
            checks.push("✅ Has extends keyword");
            score += 25;
        } else {
            checks.push("❌ Missing extends keyword");
        }
        
        // Check for super call
        const hasSuper = userCode.match(/\bsuper\s*\(\s*[^)]*\)\s*;/);
        if (hasSuper) {
            checks.push("✅ Has super call");
            score += 25;
        } else {
            checks.push("❌ Missing super call");
        }
        
        // Check for method override
        const hasOverride = userCode.match(/@Override\s*\n\s*(public|private|protected)\s+\w+\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasOverride) {
            checks.push("✅ Has method override");
            score += 25;
        } else {
            checks.push("❌ Missing method override");
        }
        
        // Check for polymorphic reference
        const hasPolymorphicRef = userCode.match(/\b\w+\s+\w+\s*=\s*new\s+\w+\s*\(\s*[^)]*\)\s*;/);
        if (hasPolymorphicRef) {
            checks.push("✅ Has polymorphic reference");
            score += 25;
        } else {
            checks.push("❌ Missing polymorphic reference");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more inheritance and polymorphism features`;
            
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

console.log("✅ Test ready for: Inheritance and Polymorphism");