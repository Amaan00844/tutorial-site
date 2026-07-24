// java/intermediate/4/tests.js
// Test for Multithreading
console.log("🧪 Testing: Multithreading");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Thread class
        const hasThread = userCode.match(/\bclass\s+\w+\s+extends\s+Thread\s*{/);
        if (hasThread) {
            checks.push("✅ Has Thread class");
            score += 25;
        } else {
            checks.push("❌ Missing Thread class");
        }
        
        // Check for Runnable interface
        const hasRunnable = userCode.match(/\bclass\s+\w+\s+implements\s+Runnable\s*{/);
        if (hasRunnable) {
            checks.push("✅ Has Runnable interface");
            score += 25;
        } else {
            checks.push("❌ Missing Runnable interface");
        }
        
        // Check for thread start
        const hasThreadStart = userCode.match(/\b\w+\.start\s*\(\s*\)\s*;/);
        if (hasThreadStart) {
            checks.push("✅ Has thread start");
            score += 25;
        } else {
            checks.push("❌ Missing thread start");
        }
        
        // Check for synchronized keyword
        const hasSynchronized = userCode.match(/\bsynchronized\s+(\(\s*\w+\s*\)|{)/);
        if (hasSynchronized) {
            checks.push("✅ Has synchronized keyword");
            score += 25;
        } else {
            checks.push("❌ Missing synchronized keyword");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more multithreading features`;
            
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

console.log("✅ Test ready for: Multithreading");
