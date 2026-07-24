
// javascript/hard/5/tests.js
// Test for Design Patterns in JavaScript
console.log("🧪 Testing: Design Patterns in JavaScript");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Observer pattern
        const hasObserver = userCode.match(/\b\w+\.addEventListener\s*\(\s*['"][^'"]+['"]\s*,\s*[^)]+\)\s*;/);
        if (hasObserver) {
            checks.push("✅ Has Observer pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Observer pattern");
        }
        
        // Check for Factory pattern
        const hasFactory = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*\)\s*{[^}]*return\s+{[^}]+}/);
        if (hasFactory) {
            checks.push("✅ Has Factory pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Factory pattern");
        }
        
        // Check for Singleton pattern
        const hasSingleton = userCode.match(/\b(const|let)\s+\w+\s*=\s*\(\s*function\s*\(\s*\)\s*{[^}]*return\s+{[^}]+}\s*\)\s*\(\s*\)\s*;/);
        if (hasSingleton) {
            checks.push("✅ Has Singleton pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Singleton pattern");
        }
        
        // Check for Module pattern
        const hasModule = userCode.match(/\b(const|let)\s+\w+\s*=\s*\(\s*function\s*\(\s*\)\s*{[^}]*return\s+{[^}]+}\s*\)\s*\(\s*\)\s*;/);
        if (hasModule) {
            checks.push("✅ Has Module pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Module pattern");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more design pattern features`;
            
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

console.log("✅ Test ready for: Design Patterns in JavaScript");