// java/hard/3/tests.js
// Test for Design Patterns
console.log("🧪 Testing: Design Patterns");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Singleton pattern
        const hasSingleton = userCode.match(/\bprivate\s+static\s+\w+\s+\w+\s*(=\s*new\s+\w+\s*\(\s*\))?\s*;/);
        if (hasSingleton) {
            checks.push("✅ Has Singleton pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Singleton pattern");
        }
        
        // Check for Factory pattern
        const hasFactory = userCode.match(/\binterface\s+\w+\s*{[^}]*}\s*\n\s*class\s+\w+\s+implements\s+\w+\s*{/);
        if (hasFactory) {
            checks.push("✅ Has Factory pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Factory pattern");
        }
        
        // Check for Observer pattern
        const hasObserver = userCode.match(/\b\w+\.add\w*Listener\s*\(\s*[^)]+\)\s*;/);
        if (hasObserver) {
            checks.push("✅ Has Observer pattern");
            score += 25;
        } else {
            checks.push("❌ Missing Observer pattern");
        }
        
        // Check for import java.util.Observer or Observable
        const hasObserverImport = userCode.match(/\bimport\s+java\.util\.(Observer|Observable)\s*;/);
        if (hasObserverImport) {
            checks.push("✅ Has java.util.Observer or Observable import");
            score += 25;
        } else {
            checks.push("❌ Missing java.util.Observer or Observable import");
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

console.log("✅ Test ready for: Design Patterns");