// java/hard/4/tests.js
// Test for Reflection and Annotations
console.log("🧪 Testing: Reflection and Annotations");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for advanced reflection
        const hasAdvancedReflection = userCode.match(/\b\w+\.get(Method|Field|Constructor)s\s*\(\s*[^)]+\)\s*;/);
        if (hasAdvancedReflection) {
            checks.push("✅ Has advanced reflection");
            score += 25;
        } else {
            checks.push("❌ Missing advanced reflection");
        }
        
        // Check for annotation with attributes
        const hasAnnotationAttr = userCode.match(/@interface\s+\w+\s*{[^}]*\w+\s+\w+\s*\(\s*\)\s*;/);
        if (hasAnnotationAttr) {
            checks.push("✅ Has annotation with attributes");
            score += 25;
        } else {
            checks.push("❌ Missing annotation with attributes");
        }
        
        // Check for getAnnotation
        const hasGetAnnotation = userCode.match(/\b\w+\.getAnnotation\s*\(\s*\w+\.class\s*\)\s*;/);
        if (hasGetAnnotation) {
            checks.push("✅ Has getAnnotation");
            score += 25;
        } else {
            checks.push("❌ Missing getAnnotation");
        }
        
        // Check for import java.lang.annotation
        const hasAnnotationImport = userCode.match(/\bimport\s+java\.lang\.annotation\.\w+\s*;/);
        if (hasAnnotationImport) {
            checks.push("✅ Has java.lang.annotation import");
            score += 25;
        } else {
            checks.push("❌ Missing java.lang.annotation import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more reflection and annotation features`;
            
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

console.log("✅ Test ready for: Reflection and Annotations");