// react/intermediate/10/tests.js
// Test for Type Checking with PropTypes
console.log("🧪 Testing: Type Checking with PropTypes");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PropTypes import
        const hasPropTypes = userCode.match(/import\s+PropTypes\s+from\s+['"]prop-types['"]/);
        if (hasPropTypes) {
            checks.push("✅ Has PropTypes import");
            score += 25;
        } else {
            checks.push("❌ Missing PropTypes import");
        }
        
        // Check for PropTypes definition
        const hasPropTypesDef = userCode.match(/\w+\.propTypes\s*=\s*{/);
        if (hasPropTypesDef) {
            checks.push("✅ Has PropTypes definition");
            score += 25;
        } else {
            checks.push("❌ Missing PropTypes definition");
        }
        
        // Check for specific prop type
        const hasSpecificPropType = userCode.match(/PropTypes\.(string|number|bool|func|object|array)\s*\.isRequired/);
        if (hasSpecificPropType) {
            checks.push("✅ Has specific prop type");
            score += 25;
        } else {
            checks.push("❌ Missing specific prop type");
        }
        
        // Check for prop usage
        const hasPropUsage = userCode.match(/{\s*\w+\.\w+\s*}/);
        if (hasPropUsage) {
            checks.push("✅ Has prop usage");
            score += 25;
        } else {
            checks.push("❌ Missing prop usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more PropTypes features`;
            
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
console.log("✅ Test ready for: Type Checking with PropTypes");