// java/basic/1/tests.js
// Test for Java Basics and Syntax
console.log("🧪 Testing: Java Basics and Syntax");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for public class declaration
        const hasClassDecl = userCode.match(/\bpublic\s+class\s+\w+\s*{/);
        if (hasClassDecl) {
            checks.push("✅ Has public class declaration");
            score += 25;
        } else {
            checks.push("❌ Missing public class declaration");
        }
        
        // Check for main method
        const hasMainMethod = userCode.match(/\bpublic\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s+\w+\s*\)\s*{/);
        if (hasMainMethod) {
            checks.push("✅ Has main method");
            score += 25;
        } else {
            checks.push("❌ Missing main method");
        }
        
        // Check for System.out.println
        const hasPrint = userCode.match(/\bSystem\.out\.println\s*\(\s*[^)]+\)\s*;/);
        if (hasPrint) {
            checks.push("✅ Has System.out.println");
            score += 25;
        } else {
            checks.push("❌ Missing System.out.println");
        }
        
        // Check for variable declaration
        const hasVariable = userCode.match(/\b(int|double|String|boolean)\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasVariable) {
            checks.push("✅ Has variable declaration");
            score += 25;
        } else {
            checks.push("❌ Missing variable declaration");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more basic Java syntax features`;
            
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


console.log("✅ Test ready for: Java Basics and Syntax");