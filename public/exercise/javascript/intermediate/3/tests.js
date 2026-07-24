
// javascript/intermediate/3/tests.js
// Test for Array Methods (Map, Filter, Reduce)
console.log("🧪 Testing: Array Methods (Map, Filter, Reduce)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for map
        const hasMap = userCode.match(/\b\w+\.map\s*\(\s*\w+\s*=>\s*[^)]+\)\s*;/);
        if (hasMap) {
            checks.push("✅ Has map");
            score += 25;
        } else {
            checks.push("❌ Missing map");
        }
        
        // Check for filter
        const hasFilter = userCode.match(/\b\w+\.filter\s*\(\s*\w+\s*=>\s*[^)]+\)\s*;/);
        if (hasFilter) {
            checks.push("✅ Has filter");
            score += 25;
        } else {
            checks.push("❌ Missing filter");
        }
        
        // Check for reduce
        const hasReduce = userCode.match(/\b\w+\.reduce\s*\(\s*\(\s*\w+\s*,\s*\w+\s*\)\s*=>\s*[^)]+\)\s*;/);
        if (hasReduce) {
            checks.push("✅ Has reduce");
            score += 25;
        } else {
            checks.push("❌ Missing reduce");
        }
        
        // Check for forEach
        const hasForEach = userCode.match(/\b\w+\.forEach\s*\(\s*\w+\s*=>\s*[^)]+\)\s*;/);
        if (hasForEach) {
            checks.push("✅ Has forEach");
            score += 25;
        } else {
            checks.push("❌ Missing forEach");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more array method features`;
            
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

console.log("✅ Test ready for: Array Methods (Map, Filter, Reduce)");