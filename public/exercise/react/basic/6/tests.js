// react/basic/6/tests.js
// Test for Lists and Keys
console.log("🧪 Testing: Lists and Keys");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for map function
        const hasMap = userCode.match(/\.\s*map\s*\(\s*\w+\s*=>\s*{/);
        if (hasMap) {
            checks.push("✅ Has map function");
            score += 25;
        } else {
            checks.push("❌ Missing map function");
        }
        
        // Check for key prop
        const hasKeyProp = userCode.match(/key\s*=\s*{[^}]+}/);
        if (hasKeyProp) {
            checks.push("✅ Has key prop");
            score += 25;
        } else {
            checks.push("❌ Missing key prop");
        }
        
        // Check for array data
        const hasArrayData = userCode.match(/const\s+\w+\s*=\s*\[\s*[^]]+\]/);
        if (hasArrayData) {
            checks.push("✅ Has array data");
            score += 25;
        } else {
            checks.push("❌ Missing array data");
        }
        
        // Check for JSX in map
        const hasJsxInMap = userCode.match(/map\s*\(\s*\w+\s*=>\s*<\w+[^>]*>/);
        if (hasJsxInMap) {
            checks.push("✅ Has JSX in map");
            score += 25;
        } else {
            checks.push("❌ Missing JSX in map");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more lists and keys features`;
            
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

console.log("✅ Test ready for: Lists and Keys");
