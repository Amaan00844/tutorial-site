
// nodejs/hard/2/tests.js
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
        
        // Check for clustering
        const hasCluster = userCode.match(/const\s+cluster\s*=\s*require\s*\(\s*['"]cluster['"]\s*\)/);
        if (hasCluster) {
            checks.push("✅ Has cluster module");
            score += 25;
        } else {
            checks.push("❌ Missing cluster module");
        }
        
        // Check for worker creation
        const hasWorker = userCode.match(/cluster\.fork\s*\(\s*\)/);
        if (hasWorker) {
            checks.push("✅ Has worker creation");
            score += 25;
        } else {
            checks.push("❌ Missing worker creation");
        }
        
        // Check for caching
        const hasCaching = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]redis['"]\s*\)/);
        if (hasCaching) {
            checks.push("✅ Has caching implementation");
            score += 25;
        } else {
            checks.push("❌ Missing caching implementation");
        }
        
        // Check for compression
        const hasCompression = userCode.match(/const\s+compression\s*=\s*require\s*\(\s*['"]compression['"]\s*\)/);
        if (hasCompression) {
            checks.push("✅ Has compression middleware");
            score += 25;
        } else {
            checks.push("❌ Missing compression middleware");
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
      topic: "Performance Optimization",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Performance Optimization");