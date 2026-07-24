// python/hard/7/tests.js
// Test for Data Structures and Algorithms
console.log("🧪 Testing: Data Structures and Algorithms");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom class for data structure
        const hasDataStructure = userCode.match(/\bclass\s+\w+\s*:/);
        if (hasDataStructure) {
            checks.push("✅ Has custom data structure class");
            score += 25;
        } else {
            checks.push("❌ Missing custom data structure class");
        }
        
        // Check for algorithmic function
        const hasAlgorithm = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]+\)\s*:/);
        if (hasAlgorithm) {
            checks.push("✅ Has algorithmic function");
            score += 25;
        } else {
            checks.push("❌ Missing algorithmic function");
        }
        
        // Check for recursion
        const hasRecursion = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]+\)\s*:\s*\n.*\b\w+\s*\(\s*[^)]+\)/s);
        if (hasRecursion) {
            checks.push("✅ Has recursion");
            score += 25;
        } else {
            checks.push("❌ Missing recursion");
        }
        
        // Check for sorting algorithm
        const hasSorting = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]+\)\s*:\s*\n.*\bfor\s+\w+\s+in\s+[^:]+:/s);
        if (hasSorting) {
            checks.push("✅ Has sorting algorithm");
            score += 25;
        } else {
            checks.push("❌ Missing sorting algorithm");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more data structure/algorithm features`;
            
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
console.log("✅ Test ready for: Data Structures and Algorithms");