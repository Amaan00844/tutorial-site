// java/hard/1/tests.js
// Test for Advanced Concurrency
console.log("🧪 Testing: Advanced Concurrency");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ExecutorService
        const hasExecutorService = userCode.match(/\bExecutorService\s+\w+\s*(=\s*Executors\.\w+\s*\(\s*[^)]*\))?\s*;/);
        if (hasExecutorService) {
            checks.push("✅ Has ExecutorService");
            score += 25;
        } else {
            checks.push("❌ Missing ExecutorService");
        }
        
        // Check for thread pool
        const hasThreadPool = userCode.match(/\bExecutors\.new(Fixed|Cached)ThreadPool\s*\(\s*[^)]+\)\s*;/);
        if (hasThreadPool) {
            checks.push("✅ Has thread pool");
            score += 25;
        } else {
            checks.push("❌ Missing thread pool");
        }
        
        // Check for Callable or Future
        const hasCallableFuture = userCode.match(/\b(Callable|Future)\s*<\s*\w+\s*>\s+\w+\s*;/);
        if (hasCallableFuture) {
            checks.push("✅ Has Callable or Future");
            score += 25;
        } else {
            checks.push("❌ Missing Callable or Future");
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
            : `Score: ${result.score}/100 - Add more advanced concurrency features`;
            
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

console.log("✅ Test ready for: Advanced Concurrency");