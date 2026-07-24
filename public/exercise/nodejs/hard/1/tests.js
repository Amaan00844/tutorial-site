
// nodejs/hard/1/tests.js
// Test for Microservices Architecture
console.log("🧪 Testing: Microservices Architecture");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express import
        const hasExpressImport = userCode.match(/const\s+express\s*=\s*require\s*\(\s*['"]express['"]\s*\)/);
        if (hasExpressImport) {
            checks.push("✅ Has express import");
            score += 25;
        } else {
            checks.push("❌ Missing express import");
        }
        
        // Check for separate service routes
        const hasServiceRoutes = userCode.match(/app\.(get|post)\s*\(\s*['"][^'"]+['"]/g);
        if (hasServiceRoutes && hasServiceRoutes.length >= 2) {
            checks.push("✅ Has multiple service routes");
            score += 25;
        } else {
            checks.push("❌ Missing multiple service routes");
        }
        
        // Check for message queue import
        const hasMqImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](amqplib|kafka)['"]\s*\)/);
        if (hasMqImport) {
            checks.push("✅ Has message queue import");
            score += 25;
        } else {
            checks.push("❌ Missing message queue import");
        }
        
        // Check for service communication
        const hasServiceComm = userCode.match(/axios\.(get|post)\s*\(\s*['"][^'"]+['"]/);
        if (hasServiceComm) {
            checks.push("✅ Has service communication");
            score += 25;
        } else {
            checks.push("❌ Missing service communication");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more microservices features`;
            
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
      topic: "Microservices Architecture",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Microservices Architecture");