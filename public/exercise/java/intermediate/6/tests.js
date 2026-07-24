// java/intermediate/6/tests.js
// Test for Stream API
console.log("🧪 Testing: Stream API");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for stream creation
        const hasStream = userCode.match(/\b\w+\.stream\s*\(\s*\)\s*;/);
        if (hasStream) {
            checks.push("✅ Has stream creation");
            score += 25;
        } else {
            checks.push("❌ Missing stream creation");
        }
        
        // Check for stream operation (e.g., map, filter)
        const hasStreamOp = userCode.match(/\b\w+\.(map|filter)\s*\(\s*\(\s*\w+\s*\)\s*->\s*[^)]+\)\s*;/);
        if (hasStreamOp) {
            checks.push("✅ Has stream operation (map/filter)");
            score += 25;
        } else {
            checks.push("❌ Missing stream operation");
        }
        
        // Check for terminal operation (e.g., collect, forEach)
        const hasTerminalOp = userCode.match(/\b\w+\.(collect|forEach)\s*\(\s*[^)]+\)\s*;/);
        if (hasTerminalOp) {
            checks.push("✅ Has terminal operation");
            score += 25;
        } else {
            checks.push("❌ Missing terminal operation");
        }
        
        // Check for import java.util.stream
        const hasStreamImport = userCode.match(/\bimport\s+java\.util\.stream\.\w+\s*;/);
        if (hasStreamImport) {
            checks.push("✅ Has java.util.stream import");
            score += 25;
        } else {
            checks.push("❌ Missing java.util.stream import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Stream API features`;
            
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

console.log("✅ Test ready for: Stream API");