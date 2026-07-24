
// javascript/intermediate/7/tests.js
// Test for Modules and Imports
console.log("🧪 Testing: Modules and Imports");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for import statement
        const hasImport = userCode.match(/\bimport\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*;/);
        if (hasImport) {
            checks.push("✅ Has import statement");
            score += 25;
        } else {
            checks.push("❌ Missing import statement");
        }
        
        // Check for default import
        const hasDefaultImport = userCode.match(/\bimport\s+\w+\s+from\s+['"][^'"]+['"]\s*;/);
        if (hasDefaultImport) {
            checks.push("✅ Has default import");
            score += 25;
        } else {
            checks.push("❌ Missing default import");
        }
        
        // Check for export statement
        const hasExport = userCode.match(/\bexport\s+(default\s+)?\w+\s*;/);
        if (hasExport) {
            checks.push("✅ Has export statement");
            score += 25;
        } else {
            checks.push("❌ Missing export statement");
        }
        
        // Check for named export
        const hasNamedExport = userCode.match(/\bexport\s+{[^}]+}\s*;/);
        if (hasNamedExport) {
            checks.push("✅ Has named export");
            score += 25;
        } else {
            checks.push("❌ Missing named export");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more module features`;
            
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

console.log("✅ Test ready for: Modules and Imports");
