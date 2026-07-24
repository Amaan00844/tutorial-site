// php/basic/7/tests.js
// Test for Form Handling
console.log("🧪 Testing: Form Handling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for $_POST access
        const hasPost = userCode.match(/\$_POST\s*\[\s*['"][^'"]+['"]\s*\]/);
        if (hasPost) {
            checks.push("✅ Has $_POST access");
            score += 25;
        } else {
            checks.push("❌ Missing $_POST access");
        }
        
        // Check for $_GET access
        const hasGet = userCode.match(/\$_GET\s*\[\s*['"][^'"]+['"]\s*\]/);
        if (hasGet) {
            checks.push("✅ Has $_GET access");
            score += 25;
        } else {
            checks.push("❌ Missing $_GET access");
        }
        
        // Check for form validation
        const hasValidation = userCode.match(/\b(empty|isset)\s*\(\s*\$_[A-Z]+\s*\[\s*['"][^'"]+['"]\s*\]\s*\)\s*;/);
        if (hasValidation) {
            checks.push("✅ Has form validation");
            score += 25;
        } else {
            checks.push("❌ Missing form validation");
        }
        
        // Check for form output
        const hasFormOutput = userCode.match(/\becho\s+['"][^'"]*\$_(POST|GET)\s*\[\s*['"][^'"]+['"]\s*\][^'"]*['"]\s*;/);
        if (hasFormOutput) {
            checks.push("✅ Has form output");
            score += 25;
        } else {
            checks.push("❌ Missing form output");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more form handling features`;
            
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
console.log("✅ Test ready for: Form Handling");
