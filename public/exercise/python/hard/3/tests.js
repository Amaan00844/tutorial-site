// python/hard/3/tests.js
// Test for Async Programming with asyncio
console.log("🧪 Testing: Async Programming with asyncio");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for asyncio import
        const hasAsyncioImport = userCode.match(/\bimport\s+asyncio\b/);
        if (hasAsyncioImport) {
            checks.push("✅ Has asyncio import");
            score += 25;
        } else {
            checks.push("❌ Missing asyncio import");
        }
        
        // Check for async def
        const hasAsyncDef = userCode.match(/\basync\s+def\s+\w+\s*\(/);
        if (hasAsyncDef) {
            checks.push("✅ Has async def");
            score += 25;
        } else {
            checks.push("❌ Missing async def");
        }
        
        // Check for await statement
        const hasAwait = userCode.match(/\bawait\s+[^;]+/);
        if (hasAwait) {
            checks.push("✅ Has await statement");
            score += 25;
        } else {
            checks.push("❌ Missing await statement");
        }
        
        // Check for asyncio.run
        const hasAsyncioRun = userCode.match(/\basyncio\.run\s*\(\s*[^)]+\)/);
        if (hasAsyncioRun) {
            checks.push("✅ Has asyncio.run");
            score += 25;
        } else {
            checks.push("❌ Missing asyncio.run");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more asyncio features`;
            
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
console.log("✅ Test ready for: Async Programming with asyncio");