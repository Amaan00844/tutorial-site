// python/intermediate/4/tests.js
// Test for Lambda Functions and Map/Filter
console.log("🧪 Testing: Lambda Functions and Map/Filter");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for lambda function
        const hasLambda = userCode.match(/\blambda\s+\w+\s*:\s*[^=]+/);
        if (hasLambda) {
            checks.push("✅ Has lambda function");
            score += 25;
        } else {
            checks.push("❌ Missing lambda function");
        }
        
        // Check for map function
        const hasMap = userCode.match(/\bmap\s*\(\s*[^)]+\)/);
        if (hasMap) {
            checks.push("✅ Has map function");
            score += 25;
        } else {
            checks.push("❌ Missing map function");
        }
        
        // Check for filter function
        const hasFilter = userCode.match(/\bfilter\s*\(\s*[^)]+\)/);
        if (hasFilter) {
            checks.push("✅ Has filter function");
            score += 25;
        } else {
            checks.push("❌ Missing filter function");
        }
        
        // Check for reduce function
        const hasReduce = userCode.match(/\breduce\s*\(\s*[^)]+\)/);
        if (hasReduce) {
            checks.push("✅ Has reduce function");
            score += 25;
        } else {
            checks.push("❌ Missing reduce function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more lambda and map/filter features`;
            
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
console.log("✅ Test ready for: Lambda Functions and Map/Filter");