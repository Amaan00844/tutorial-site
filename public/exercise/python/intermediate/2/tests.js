// python/intermediate/2/tests.js
// Test for List Comprehensions
console.log("🧪 Testing: List Comprehensions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for basic list comprehension
        const hasListComp = userCode.match(/\[\s*[^[]+\s+for\s+\w+\s+in\s+[^]]+\]/);
        if (hasListComp) {
            checks.push("✅ Has basic list comprehension");
            score += 25;
        } else {
            checks.push("❌ Missing basic list comprehension");
        }
        
        // Check for list comprehension with condition
        const hasConditionalComp = userCode.match(/\[\s*[^[]+\s+for\s+\w+\s+in\s+[^]]+\s+if\s+[^]]+\]/);
        if (hasConditionalComp) {
            checks.push("✅ Has list comprehension with condition");
            score += 25;
        } else {
            checks.push("❌ Missing list comprehension with condition");
        }
        
        // Check for nested list comprehension
        const hasNestedComp = userCode.match(/\[\s*[^[]+\s+for\s+\w+\s+in\s+\[\s*[^[]+\s+for\s+\w+\s+in\s+[^]]+\]\]/);
        if (hasNestedComp) {
            checks.push("✅ Has nested list comprehension");
            score += 25;
        } else {
            checks.push("❌ Missing nested list comprehension");
        }
        
        // Check for generator expression
        const hasGenerator = userCode.match(/\(\s*[^)]+\s+for\s+\w+\s+in\s+[^)]+\)/);
        if (hasGenerator) {
            checks.push("✅ Has generator expression");
            score += 25;
        } else {
            checks.push("❌ Missing generator expression");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more list comprehension features`;
            
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
console.log("✅ Test ready for: List Comprehensions");