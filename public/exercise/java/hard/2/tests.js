// java/hard/2/tests.js
// Test for JVM and Memory Management
console.log("🧪 Testing: JVM and Memory Management");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for WeakReference
        const hasWeakReference = userCode.match(/\bWeakReference\s*<\s*\w+\s*>\s+\w+\s*(=\s*new\s+WeakReference\s*<\s*\w+\s*>\s*\(\s*[^)]+\))?\s*;/);
        if (hasWeakReference) {
            checks.push("✅ Has WeakReference");
            score += 25;
        } else {
            checks.push("❌ Missing WeakReference");
        }
        
        // Check for System.gc
        const hasSystemGC = userCode.match(/\bSystem\.gc\s*\(\s*\)\s*;/);
        if (hasSystemGC) {
            checks.push("✅ Has System.gc");
            score += 25;
        } else {
            checks.push("❌ Missing System.gc");
        }
        
        // Check for Runtime.getRuntime
        const hasRuntime = userCode.match(/\bRuntime\.getRuntime\s*\(\s*\)\s*\.\w+\s*\(\s*\)\s*;/);
        if (hasRuntime) {
            checks.push("✅ Has Runtime.getRuntime");
            score += 25;
        } else {
            checks.push("❌ Missing Runtime.getRuntime");
        }
        
        // Check for import java.lang.ref
        const hasRefImport = userCode.match(/\bimport\s+java\.lang\.ref\.\w+\s*;/);
        if (hasRefImport) {
            checks.push("✅ Has java.lang.ref import");
            score += 25;
        } else {
            checks.push("❌ Missing java.lang.ref import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JVM and memory management features`;
            
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

console.log("✅ Test ready for: JVM and Memory Management");
