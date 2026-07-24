// nodejs/hard/3/tests.js
// Test for Clustering and Load Balancing
console.log("🧪 Testing: Clustering and Load Balancing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for cluster module import
        const hasClusterImport = userCode.match(/const\s+cluster\s*=\s*require\s*\(\s*['"]cluster['"]\s*\)/);
        if (hasClusterImport) {
            checks.push("✅ Has cluster module import");
            score += 25;
        } else {
            checks.push("❌ Missing cluster module import");
        }
        
        // Check for cluster.fork
        const hasClusterFork = userCode.match(/cluster\.fork\s*\(\s*\)/);
        if (hasClusterFork) {
            checks.push("✅ Has cluster.fork");
            score += 25;
        } else {
            checks.push("❌ Missing cluster.fork");
        }
        
        // Check for master process check
        const hasMasterCheck = userCode.match(/if\s*\(\s*cluster\.isMaster\s*\)\s*{/);
        if (hasMasterCheck) {
            checks.push("✅ Has master process check");
            score += 25;
        } else {
            checks.push("❌ Missing master process check");
        }
        
        // Check for worker process
        const hasWorkerProcess = userCode.match(/if\s*\(\s*!cluster\.isMaster\s*\)\s*{/);
        if (hasWorkerProcess) {
            checks.push("✅ Has worker process");
            score += 25;
        } else {
            checks.push("❌ Missing worker process");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more clustering and load balancing features`;
            
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
      topic: "Clustering and Load Balancing",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Clustering and Load Balancing");