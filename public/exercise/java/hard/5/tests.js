// java/hard/5/tests.js
// Test for Performance Optimization
console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for StringBuilder
        const hasStringBuilder = userCode.match(/\bStringBuilder\s+\w+\s*(=\s*new\s+StringBuilder\s*\(\s*\))?\s*;/);
        if (hasStringBuilder) {
            checks.push("✅ Has StringBuilder");
            score += 25;
        } else {
            checks.push("❌ Missing StringBuilder");
        }
        
        // Check for object pooling
        const hasObjectPooling = userCode.match(/\b\w+\s+\w+\s*=\s*new\s+\w+\s*\(\s*\)\s*;/g)?.length > 1;
        if (hasObjectPooling) {
            checks.push("✅ Has object pooling");
            score += 25;
        } else {
            checks.push("❌ Missing object pooling");
        }
        
        // Check for synchronized optimization
        const hasSyncOptimization = userCode.match(/\bsynchronized\s+\(\s*\w+\s*\)\s*{/);
        if (hasSyncOptimization) {
            checks.push("✅ Has synchronized optimization");
            score += 25;
        } else {
            checks.push("❌ Missing synchronized optimization");
        }
        
        // Check for import java.util.concurrent
        const hasConcurrentImport = userCode.match(/\bimport\s+java\.util\.concurrent\.\w+\s*;/);
        if (hasConcurrentImport) {
            checks.push("✅ Has java.util.concurrent import");
            score += 25;
        } else {
            checks.push("❌ Missing java.util.concurrent import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more performance optimization features`;
            
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

console.log("✅ Test ready for: Performance Optimization");