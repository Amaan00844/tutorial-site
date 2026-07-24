// java/hard/6/tests.js
// Test for Spring Framework Integration
console.log("🧪 Testing: Spring Framework Integration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @Component or @Service
        const hasComponent = userCode.match(/@(Component|Service)\s*\n\s*(public\s+)?class\s+\w+\s*{/);
        if (hasComponent) {
            checks.push("✅ Has @Component or @Service");
            score += 25;
        } else {
            checks.push("❌ Missing @Component or @Service");
        }
        
        // Check for @Autowired
        const hasAutowired = userCode.match(/@Autowired\s*\n\s*\w+\s+\w+\s*;/);
        if (hasAutowired) {
            checks.push("✅ Has @Autowired");
            score += 25;
        } else {
            checks.push("❌ Missing @Autowired");
        }
        
        // Check for ApplicationContext
        const hasApplicationContext = userCode.match(/\bApplicationContext\s+\w+\s*(=\s*new\s+\w+ApplicationContext\s*\(\s*[^)]+\))?\s*;/);
        if (hasApplicationContext) {
            checks.push("✅ Has ApplicationContext");
            score += 25;
        } else {
            checks.push("❌ Missing ApplicationContext");
        }
        
        // Check for import org.springframework
        const hasSpringImport = userCode.match(/\bimport\s+org\.springframework\.\w+\.\w+\s*;/);
        if (hasSpringImport) {
            checks.push("✅ Has org.springframework import");
            score += 25;
        } else {
            checks.push("❌ Missing org.springframework import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Spring Framework features`;
            
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

console.log("✅ Test ready for: Spring Framework Integration");