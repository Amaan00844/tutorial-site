// python/intermediate/8/tests.js
// Test for Threading and Multiprocessing
console.log("🧪 Testing: Threading and Multiprocessing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for threading import
        const hasThreadingImport = userCode.match(/\bimport\s+threading\b/);
        if (hasThreadingImport) {
            checks.push("✅ Has threading import");
            score += 25;
        } else {
            checks.push("❌ Missing threading import");
        }
        
        // Check for Thread creation
        const hasThreadCreation = userCode.match(/\bthreading\.Thread\s*\(\s*[^)]+\)/);
        if (hasThreadCreation) {
            checks.push("✅ Has Thread creation");
            score += 25;
        } else {
            checks.push("❌ Missing Thread creation");
        }
        
        // Check for multiprocessing import
        const hasMultiprocessingImport = userCode.match(/\bimport\s+multiprocessing\b/);
        if (hasMultiprocessingImport) {
            checks.push("✅ Has multiprocessing import");
            score += 25;
        } else {
            checks.push("❌ Missing multiprocessing import");
        }
        
        // Check for Process creation
        const hasProcessCreation = userCode.match(/\bmultiprocessing\.Process\s*\(\s*[^)]+\)/);
        if (hasProcessCreation) {
            checks.push("✅ Has Process creation");
            score += 25;
        } else {
            checks.push("❌ Missing Process creation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more threading/multiprocessing features`;
            
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
console.log("✅ Test ready for: Threading and Multiprocessing");