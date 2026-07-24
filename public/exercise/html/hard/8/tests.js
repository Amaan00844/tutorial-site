// Test for Web Workers & HTML
console.log("🧪 Testing: Web Workers & HTML");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Web Worker creation
        if (/new\s+Worker\s*\(\s*["'][^"']+["']\s*\)/i.test(userCode)) {
            checks.push("✅ Has Web Worker creation");
            score += 25;
        } else {
            checks.push("❌ Missing Web Worker creation");
        }
        
        // Check for message passing
        if (/postMessage|onmessage|addEventListener\s*\(\s*["']message["']/i.test(userCode)) {
            checks.push("✅ Has message passing");
            score += 25;
        } else {
            checks.push("❌ Missing message passing");
        }
        
        // Check for worker termination
        if (/terminate\(\)|close\(\)/i.test(userCode)) {
            checks.push("✅ Has worker lifecycle management");
            score += 25;
        } else {
            checks.push("❌ Missing worker lifecycle management");
        }
        
        // Check for transferable objects or SharedArrayBuffer
        if (/(Transferable|SharedArrayBuffer|ImageBitmap)/i.test(userCode)) {
            checks.push("✅ Has advanced worker features");
            score += 25;
        } else {
            checks.push("❌ Missing advanced worker features");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more Web Worker features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Web Workers & HTML", language: "html"}
    };
}

console.log("✅ Test ready for: Web Workers & HTML");