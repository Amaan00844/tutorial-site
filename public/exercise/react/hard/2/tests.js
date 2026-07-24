
// react/hard/2/tests.js
// Test for Server-Side Rendering
console.log("🧪 Testing: Server-Side Rendering");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Next.js getServerSideProps
        const hasGetServerSideProps = userCode.match(/export\s+async\s+function\s+getServerSideProps\s*\(/);
        if (hasGetServerSideProps) {
            checks.push("✅ Has getServerSideProps");
            score += 25;
        } else {
            checks.push("❌ Missing getServerSideProps");
        }
        
        // Check for SSR component
        const hasSsrComponent = userCode.match(/function\s+\w+\s*\(\s*{[^}]+}\s*\)\s*{/);
        if (hasSsrComponent) {
            checks.push("✅ Has SSR component");
            score += 25;
        } else {
            checks.push("❌ Missing SSR component");
        }
        
        // Check for props passing
        const hasPropsPassing = userCode.match(/return\s*{[^}]*props\s*:[^}]+}/);
        if (hasPropsPassing) {
            checks.push("✅ Has props passing");
            score += 25;
        } else {
            checks.push("❌ Missing props passing");
        }
        
        // Check for Next.js import
        const hasNextJsImport = userCode.match(/import\s+[^;]+from\s+['"]next['"]/);
        if (hasNextJsImport) {
            checks.push("✅ Has Next.js import");
            score += 25;
        } else {
            checks.push("❌ Missing Next.js import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more SSR features`;
            
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
console.log("✅ Test ready for: Server-Side Rendering");
