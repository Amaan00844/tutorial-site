
// javascript/basic/9/tests.js
// Test for DOM Manipulation Basics
console.log("🧪 Testing: DOM Manipulation Basics");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for getElementById
        const hasGetElementById = userCode.match(/\bdocument\.getElementById\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasGetElementById) {
            checks.push("✅ Has getElementById");
            score += 25;
        } else {
            checks.push("❌ Missing getElementById");
        }
        
        // Check for querySelector
        const hasQuerySelector = userCode.match(/\bdocument\.querySelector\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasQuerySelector) {
            checks.push("✅ Has querySelector");
            score += 25;
        } else {
            checks.push("❌ Missing querySelector");
        }
        
        // Check for innerHTML
        const hasInnerHTML = userCode.match(/\b\w+\.innerHTML\s*=\s*[^;]+;/);
        if (hasInnerHTML) {
            checks.push("✅ Has innerHTML");
            score += 25;
        } else {
            checks.push("❌ Missing innerHTML");
        }
        
        // Check for textContent
        const hasTextContent = userCode.match(/\b\w+\.textContent\s*=\s*[^;]+;/);
        if (hasTextContent) {
            checks.push("✅ Has textContent");
            score += 25;
        } else {
            checks.push("❌ Missing textContent");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more DOM manipulation features`;
            
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

console.log("✅ Test ready for: DOM Manipulation Basics");