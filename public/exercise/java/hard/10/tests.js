// java/hard/10/tests.js
// Test for Microservices with Java
console.log("🧪 Testing: Microservices with Java");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @RestController
        const hasRestController = userCode.match(/@RestController\s*\n\s*(public\s+)?class\s+\w+\s*{/);
        if (hasRestController) {
            checks.push("✅ Has @RestController");
            score += 25;
        } else {
            checks.push("❌ Missing @RestController");
        }
        
        // Check for @RequestMapping or @GetMapping
        const hasRequestMapping = userCode.match(/@(RequestMapping|GetMapping)\s*\(\s*["'][^"']+["']\s*\)/);
        if (hasRequestMapping) {
            checks.push("✅ Has @RequestMapping or @GetMapping");
            score += 25;
        } else {
            checks.push("❌ Missing @RequestMapping or @GetMapping");
        }
        
        // Check for REST method with ResponseEntity
        const hasResponseEntity = userCode.match(/\bResponseEntity\s*<\s*\w+\s*>\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasResponseEntity) {
            checks.push("✅ Has ResponseEntity in method");
            score += 25;
        } else {
            checks.push("❌ Missing ResponseEntity in method");
        }
        
        // Check for import org.springframework.web
        const hasSpringWebImport = userCode.match(/\bimport\s+org\.springframework\.web\.bind\.annotation\.\w+\s*;/);
        if (hasSpringWebImport) {
            checks.push("✅ Has org.springframework.web import");
            score += 25;
        } else {
            checks.push("❌ Missing org.springframework.web import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more microservices features`;
            
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

console.log("✅ Test ready for: Microservices with Java");