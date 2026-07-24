// java/intermediate/9/tests.js
// Test for Unit Testing with JUnit
console.log("🧪 Testing: Unit Testing with JUnit");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for JUnit test annotation
        const hasTestAnnotation = userCode.match(/@Test\s*\n\s*(public\s+)?void\s+\w+\s*\(\s*\)\s*{/);
        if (hasTestAnnotation) {
            checks.push("✅ Has JUnit @Test annotation");
            score += 25;
        } else {
            checks.push("❌ Missing JUnit @Test annotation");
        }
        
        // Check for assert statement
        const hasAssert = userCode.match(/\bAssert\.\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasAssert) {
            checks.push("✅ Has assert statement");
            score += 25;
        } else {
            checks.push("❌ Missing assert statement");
        }
        
        // Check for setup or teardown
        const hasSetupTeardown = userCode.match(/@(Before|After|BeforeEach|AfterEach)\s*\n\s*(public\s+)?void\s+\w+\s*\(\s*\)\s*{/);
        if (hasSetupTeardown) {
            checks.push("✅ Has setup or teardown");
            score += 25;
        } else {
            checks.push("❌ Missing setup or teardown");
        }
        
        // Check for import org.junit
        const hasJUnitImport = userCode.match(/\bimport\s+org\.junit\.\w+\.\w+\s*;/);
        if (hasJUnitImport) {
            checks.push("✅ Has org.junit import");
            score += 25;
        } else {
            checks.push("❌ Missing org.junit import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JUnit testing features`;
            
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

console.log("✅ Test ready for: Unit Testing with JUnit");