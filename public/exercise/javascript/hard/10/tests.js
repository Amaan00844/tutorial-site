// javascript/hard/10/tests.js
// Test for Build Tools and Testing
console.log("🧪 Testing: Build Tools and Testing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Webpack/Vite configuration (module.exports or export default)
        const hasBuildConfig = userCode.match(/\b(module\.exports|export\s+default)\s*=\s*{[^}]+}/);
        if (hasBuildConfig) {
            checks.push("✅ Has Webpack/Vite configuration");
            score += 25;
        } else {
            checks.push("❌ Missing Webpack/Vite configuration");
        }
        
        // Check for Jest/Vitest test declaration
        const hasTestDeclaration = userCode.match(/\b(test|it)\s*\(\s*['"][^'"]+['"]\s*,\s*(async\s+)?function\s*\(\s*\)\s*{/);
        if (hasTestDeclaration) {
            checks.push("✅ Has Jest/Vitest test declaration");
            score += 25;
        } else {
            checks.push("❌ Missing Jest/Vitest test declaration");
        }
        
        // Check for expect assertion
        const hasExpect = userCode.match(/\bexpect\s*\(\s*[^)]+\)\s*\.\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasExpect) {
            checks.push("✅ Has expect assertion");
            score += 25;
        } else {
            checks.push("❌ Missing expect assertion");
        }
        
        // Check for import of testing library
        const hasTestImport = userCode.match(/\bimport\s+.*\s+from\s+['"](jest|vitest)['"]\s*;/);
        if (hasTestImport) {
            checks.push("✅ Has Jest/Vitest import");
            score += 25;
        } else {
            checks.push("❌ Missing Jest/Vitest import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more build tools and testing features`;
            
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

console.log("✅ Test ready for: Build Tools and Testing");