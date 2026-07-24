// php/basic/3/tests.js
// Test for Control Structures
console.log("🧪 Testing: Control Structures");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for if statement
        const hasIf = userCode.match(/\bif\s*\(\s*[^)]+\)\s*{/);
        if (hasIf) {
            checks.push("✅ Has if statement");
            score += 25;
        } else {
            checks.push("❌ Missing if statement");
        }
        
        // Check for else statement
        const hasElse = userCode.match(/\belse\s*{/);
        if (hasElse) {
            checks.push("✅ Has else statement");
            score += 25;
        } else {
            checks.push("❌ Missing else statement");
        }
        
        // Check for for loop
        const hasForLoop = userCode.match(/\bfor\s*\(\s*[^;]+;\s*[^;]+;\s*[^)]+\)\s*{/);
        if (hasForLoop) {
            checks.push("✅ Has for loop");
            score += 25;
        } else {
            checks.push("❌ Missing for loop");
        }
        
        // Check for switch statement
        const hasSwitch = userCode.match(/\bswitch\s*\(\s*\$\w+\s*\)\s*{/);
        if (hasSwitch) {
            checks.push("✅ Has switch statement");
            score += 25;
        } else {
            checks.push("❌ Missing switch statement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more control structure features`;
            
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
console.log("✅ Test ready for: Control Structures");