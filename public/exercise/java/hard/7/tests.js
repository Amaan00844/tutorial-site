// java/hard/7/tests.js
// Test for Reactive Programming
console.log("🧪 Testing: Reactive Programming");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Flowable or Observable
        const hasFlowable = userCode.match(/\b(Flowable|Observable)\s*<\s*\w+\s*>\s+\w+\s*(=\s*\1\.\w+\s*\(\s*[^)]+\))?\s*;/);
        if (hasFlowable) {
            checks.push("✅ Has Flowable or Observable");
            score += 25;
        } else {
            checks.push("❌ Missing Flowable or Observable");
        }
        
        // Check for subscribe
        const hasSubscribe = userCode.match(/\b\w+\.subscribe\s*\(\s*[^)]+\)\s*;/);
        if (hasSubscribe) {
            checks.push("✅ Has subscribe");
            score += 25;
        } else {
            checks.push("❌ Missing subscribe");
        }
        
        // Check for reactive operator (e.g., map, filter)
        const hasReactiveOp = userCode.match(/\b\w+\.(map|filter)\s*\(\s*\(\s*\w+\s*\)\s*->\s*[^)]+\)\s*;/);
        if (hasReactiveOp) {
            checks.push("✅ Has reactive operator");
            score += 25;
        } else {
            checks.push("❌ Missing reactive operator");
        }
        
        // Check for import io.reactivex
        const hasRxImport = userCode.match(/\bimport\s+io\.reactivex\.\w+\.\w+\s*;/);
        if (hasRxImport) {
            checks.push("✅ Has io.reactivex import");
            score += 25;
        } else {
            checks.push("❌ Missing io.reactivex import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more reactive programming features`;
            
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


console.log("✅ Test ready for: Reactive Programming");
