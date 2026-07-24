// nodejs/hard/6/tests.js
// Test for Serverless Architecture
console.log("🧪 Testing: Serverless Architecture");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for AWS SDK import
        const hasAwsSdk = userCode.match(/const\s+AWS\s*=\s*require\s*\(\s*['"]aws-sdk['"]\s*\)/);
        if (hasAwsSdk) {
            checks.push("✅ Has AWS SDK import");
            score += 25;
        } else {
            checks.push("❌ Missing AWS SDK import");
        }
        
        // Check for lambda handler
        const hasLambdaHandler = userCode.match(/exports\.handler\s*=\s*async\s*function\s*\(\s*event\s*,\s*context\s*\)\s*{/);
        if (hasLambdaHandler) {
            checks.push("✅ Has lambda handler");
            score += 25;
        } else {
            checks.push("❌ Missing lambda handler");
        }
        
        // Check for async/await
        const hasAsyncAwait = userCode.match(/await\s+\w+\.\w+\s*\(/);
        if (hasAsyncAwait) {
            checks.push("✅ Has async/await");
            score += 25;
        } else {
            checks.push("❌ Missing async/await");
        }
        
        // Check for response object
        const hasResponse = userCode.match(/return\s*{[^}]*statusCode\s*:[^}]+}/);
        if (hasResponse) {
            checks.push("✅ Has response object");
            score += 25;
        } else {
            checks.push("❌ Missing response object");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more serverless architecture features`;
            
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
      topic: "Serverless Architecture",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Serverless Architecture");
