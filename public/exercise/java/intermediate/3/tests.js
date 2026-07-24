
// java/intermediate/3/tests.js
// Test for Generics and Type Safety
console.log("🧪 Testing: Generics and Type Safety");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for generic class
        const hasGenericClass = userCode.match(/\bclass\s+\w+\s*<\s*\w+\s*>\s*{/);
        if (hasGenericClass) {
            checks.push("✅ Has generic class");
            score += 25;
        } else {
            checks.push("❌ Missing generic class");
        }
        
        // Check for generic method
        const hasGenericMethod = userCode.match(/\b<\s*\w+\s*>\s+\w+\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasGenericMethod) {
            checks.push("✅ Has generic method");
            score += 25;
        } else {
            checks.push("❌ Missing generic method");
        }
        
        // Check for bounded type parameter
        const hasBoundedType = userCode.match(/\b<\s*\w+\s+extends\s+\w+\s*>\s+/);
        if (hasBoundedType) {
            checks.push("✅ Has bounded type parameter");
            score += 25;
        } else {
            checks.push("❌ Missing bounded type parameter");
        }
        
        // Check for generic collection
        const hasGenericCollection = userCode.match(/\b(ArrayList|HashMap)\s*<\s*\w+\s*(,\s*\w+\s*)?>\s+\w+\s*;/);
        if (hasGenericCollection) {
            checks.push("✅ Has generic collection");
            score += 25;
        } else {
            checks.push("❌ Missing generic collection");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more generics features`;
            
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

console.log("✅ Test ready for: Generics and Type Safety");