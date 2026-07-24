// java/basic/9/tests.js
// Test for String Manipulation
console.log("🧪 Testing: String Manipulation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for String declaration
        const hasStringDecl = userCode.match(/\bString\s+\w+\s*(=\s*["'][^"']+["'])?\s*;/);
        if (hasStringDecl) {
            checks.push("✅ Has String declaration");
            score += 25;
        } else {
            checks.push("❌ Missing String declaration");
        }
        
        // Check for String method (e.g., substring)
        const hasSubstring = userCode.match(/\b\w+\.substring\s*\(\s*[^)]+\)\s*;/);
        if (hasSubstring) {
            checks.push("✅ Has substring method");
            score += 25;
        } else {
            checks.push("❌ Missing substring method");
        }
        
        // Check for String concatenation
        const hasConcat = userCode.match(/\b\w+\s*\+\s*["']\w+["']\s*;/);
        if (hasConcat) {
            checks.push("✅ Has String concatenation");
            score += 25;
        } else {
            checks.push("❌ Missing String concatenation");
        }
        
        // Check for StringBuilder or StringBuffer
        const hasStringBuilder = userCode.match(/\b(StringBuilder|StringBuffer)\s+\w+\s*(=\s*new\s+\1\s*\(\s*\))?\s*;/);
        if (hasStringBuilder) {
            checks.push("✅ Has StringBuilder or StringBuffer");
            score += 25;
        } else {
            checks.push("❌ Missing StringBuilder or StringBuffer");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more string manipulation features`;
            
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

console.log("✅ Test ready for: String Manipulation");