// java/intermediate/1/tests.js
// Test for Advanced OOP Concepts
console.log("🧪 Testing: Advanced OOP Concepts");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for abstract class
        const hasAbstractClass = userCode.match(/\babstract\s+class\s+\w+\s*{/);
        if (hasAbstractClass) {
            checks.push("✅ Has abstract class");
            score += 25;
        } else {
            checks.push("❌ Missing abstract class");
        }
        
        // Check for interface
        const hasInterface = userCode.match(/\binterface\s+\w+\s*{/);
        if (hasInterface) {
            checks.push("✅ Has interface");
            score += 25;
        } else {
            checks.push("❌ Missing interface");
        }
        
        // Check for implements keyword
        const hasImplements = userCode.match(/\bclass\s+\w+\s+implements\s+\w+\s*{/);
        if (hasImplements) {
            checks.push("✅ Has implements keyword");
            score += 25;
        } else {
            checks.push("❌ Missing implements keyword");
        }
        
        // Check for design pattern (e.g., Singleton)
        const hasDesignPattern = userCode.match(/\bprivate\s+static\s+\w+\s+\w+\s*(=\s*new\s+\w+\s*\(\s*\))?\s*;/);
        if (hasDesignPattern) {
            checks.push("✅ Has design pattern (e.g., Singleton)");
            score += 25;
        } else {
            checks.push("❌ Missing design pattern");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced OOP features`;
            
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

console.log("✅ Test ready for: Advanced OOP Concepts");