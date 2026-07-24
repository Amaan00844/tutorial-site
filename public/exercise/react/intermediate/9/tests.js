// react/intermediate/9/tests.js
// Test for Animation in React
console.log("🧪 Testing: Animation in React");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Framer Motion import
        const hasFramerMotion = userCode.match(/import\s+{[^}]*motion[^}]*}\s+from\s+['"]framer-motion['"]/);
        if (hasFramerMotion) {
            checks.push("✅ Has Framer Motion import");
            score += 25;
        } else {
            checks.push("❌ Missing Framer Motion import");
        }
        
        // Check for motion component
        const hasMotionComponent = userCode.match(/<motion\.\w+\s+[^>]+>/);
        if (hasMotionComponent) {
            checks.push("✅ Has motion component");
            score += 25;
        } else {
            checks.push("❌ Missing motion component");
        }
        
        // Check for animate prop
        const hasAnimateProp = userCode.match(/animate\s*=\s*{[^}]+}/);
        if (hasAnimateProp) {
            checks.push("✅ Has animate prop");
            score += 25;
        } else {
            checks.push("❌ Missing animate prop");
        }
        
        // Check for transition prop
        const hasTransitionProp = userCode.match(/transition\s*=\s*{[^}]+}/);
        if (hasTransitionProp) {
            checks.push("✅ Has transition prop");
            score += 25;
        } else {
            checks.push("❌ Missing transition prop");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more animation features`;
            
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
console.log("✅ Test ready for: Animation in React");