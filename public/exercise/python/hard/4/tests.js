// python/hard/4/tests.js
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
        
        // Check for cProfile import
        const hasCProfile = userCode.match(/\bimport\s+cProfile\b/);
        if (hasCProfile) {
            checks.push("✅ Has cProfile import");
            score += 25;
        } else {
            checks.push("❌ Missing cProfile import");
        }
        
        // Check for list comprehension optimization
        const hasListComp = userCode.match(/\[\s*[^[]+\s+for\s+\w+\s+in\s+[^]]+\]/);
        if (hasListComp) {
            checks.push("✅ Has list comprehension");
            score += 25;
        } else {
            checks.push("❌ Missing list comprehension");
        }
        
        // Check for set usage for optimization
        const hasSet = userCode.match(/\b\w+\s*=\s*set\s*\(\s*[^)]+\)/);
        if (hasSet) {
            checks.push("✅ Has set usage");
            score += 25;
        } else {
            checks.push("❌ Missing set usage");
        }
        
        // Check for time measurement
        const hasTimeMeasure = userCode.match(/\bimport\s+time\b.*\btime\.time\s*\(\s*\)/s);
        if (hasTimeMeasure) {
            checks.push("✅ Has time measurement");
            score += 25;
        } else {
            checks.push("❌ Missing time measurement");
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
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: Performance Optimization");