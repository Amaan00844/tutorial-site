// python/hard/1/tests.js
// Test for Advanced OOP Patterns
console.log("🧪 Testing: Advanced OOP Patterns");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for abstract base class
        const hasAbstractClass = userCode.match(/\bfrom\s+abc\s+import\s+ABC,\s*abstractmethod\b/);
        if (hasAbstractClass) {
            checks.push("✅ Has abstract base class");
            score += 25;
        } else {
            checks.push("❌ Missing abstract base class");
        }
        
        // Check for abstract method
        const hasAbstractMethod = userCode.match(/@abstractmethod\s*\n\s*def\s+\w+\s*\(/);
        if (hasAbstractMethod) {
            checks.push("✅ Has abstract method");
            score += 25;
        } else {
            checks.push("❌ Missing abstract method");
        }
        
        // Check for property decorator
        const hasProperty = userCode.match(/@property\s*\n\s*def\s+\w+\s*\(/);
        if (hasProperty) {
            checks.push("✅ Has property decorator");
            score += 25;
        } else {
            checks.push("❌ Missing property decorator");
        }
        
        // Check for Singleton pattern
        const hasSingleton = userCode.match(/\bdef\s+__new__\s*\(\s*cls\s*\)/);
        if (hasSingleton) {
            checks.push("✅ Has Singleton pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Singleton pattern");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced OOP patterns`;
            
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
console.log("✅ Test ready for: Advanced OOP Patterns");