// java/intermediate/7/tests.js
// Test for Annotations and Reflection
console.log("🧪 Testing: Annotations and Reflection");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom annotation
        const hasAnnotation = userCode.match(/@interface\s+\w+\s*{/);
        if (hasAnnotation) {
            checks.push("✅ Has custom annotation");
            score += 25;
        } else {
            checks.push("❌ Missing custom annotation");
        }
        
        // Check for annotation usage
        const hasAnnotationUsage = userCode.match(/@\w+\s*\n\s*(public\s+)?\w+\s+\w+\s*(\(\s*[^)]*\)\s*{)?/);
        if (hasAnnotationUsage) {
            checks.push("✅ Has annotation usage");
            score += 25;
        } else {
            checks.push("❌ Missing annotation usage");
        }
        
        // Check for reflection API
        const hasReflection = userCode.match(/\b(Class|Method|Field)\s*\.\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasReflection) {
            checks.push("✅ Has reflection API");
            score += 25;
        } else {
            checks.push("❌ Missing reflection API");
        }
        
        // Check for import java.lang.reflect
        const hasReflectImport = userCode.match(/\bimport\s+java\.lang\.reflect\.\w+\s*;/);
        if (hasReflectImport) {
            checks.push("✅ Has java.lang.reflect import");
            score += 25;
        } else {
            checks.push("❌ Missing java.lang.reflect import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more annotation and reflection features`;
            
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

console.log("✅ Test ready for: Annotations and Reflection");