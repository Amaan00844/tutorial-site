// Test for Monitoring and Logging
console.log("🧪 Testing: Monitoring and Logging");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for logging library import (winston or morgan)
        const hasLogImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](winston|morgan)['"]\s*\)/);
        if (hasLogImport) {
            checks.push("✅ Has logging library import");
            score += 25;
        } else {
            checks.push("❌ Missing logging library import");
        }
        
        // Check for logger configuration
        const hasLoggerConfig = userCode.match(/winston\.createLogger\s*\(\s*{/);
        if (hasLoggerConfig) {
            checks.push("✅ Has logger configuration");
            score += 25;
        } else {
            checks.push("❌ Missing logger configuration");
        }
        
        // Check for logging middleware (morgan or custom)
        const hasLoggingMiddleware = userCode.match(/app\.use\s*\(\s*(morgan\s*\(\s*['"][^'"]+['"]|function\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)\s*{[^}]*logger)/);
        if (hasLoggingMiddleware) {
            checks.push("✅ Has logging middleware");
            score += 25;
        } else {
            checks.push("❌ Missing logging middleware");
        }
        
        // Check for monitoring metrics
        const hasMetrics = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]prom-client['"]\s*\)/);
        if (hasMetrics) {
            checks.push("✅ Has monitoring metrics");
            score += 25;
        } else {
            checks.push("❌ Missing monitoring metrics");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more monitoring and logging features`;
            
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
      topic: "Monitoring and Logging",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Monitoring and Logging");