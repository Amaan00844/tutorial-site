// php/intermediate/6/tests.js
// Test for Templating Engines
console.log("🧪 Testing: Templating Engines");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Twig template
        const hasTwigTemplate = userCode.match(/\$\w+\s*=\s*new\s+Twig_Environment\s*\(\s*[^)]+\)\s*;/);
        if (hasTwigTemplate) {
            checks.push("✅ Has Twig template");
            score += 25;
        } else {
            checks.push("❌ Missing Twig template");
        }
        
        // Check for template render
        const hasRender = userCode.match(/\$\w+\s*->\s*render\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasRender) {
            checks.push("✅ Has template render");
            score += 25;
        } else {
            checks.push("❌ Missing template render");
        }
        
        // Check for template variable
        const hasTemplateVar = userCode.match(/\$\w+\s*->\s*render\s*\(\s*['"][^'"]+['"]\s*,\s*\[\s*['"][^'"]+['"]\s*=>\s*[^)]+\)\s*;/);
        if (hasTemplateVar) {
            checks.push("✅ Has template variable");
            score += 25;
        } else {
            checks.push("❌ Missing template variable");
        }
        
        // Check for require Twig
        const hasTwigRequire = userCode.match(/\brequire\s+['"].*Twig.*['"]\s*;/);
        if (hasTwigRequire) {
            checks.push("✅ Has Twig require");
            score += 25;
        } else {
            checks.push("❌ Missing Twig require");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more templating engine features`;
            
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
console.log("✅ Test ready for: Templating Engines");