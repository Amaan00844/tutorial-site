
// express/intermediate/6/tests.js
// Test for Template Engines
console.log("🧪 Testing: Template Engines");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for template engine setup
        const has_engine = /\w+\s*\.\s*set\s*\(\s*['"]view engine['"]/i.test(user_code);
        if (has_engine) {
            checks.push("✅ Has template engine setup");
            score += 25;
        } else {
            checks.push("❌ Missing template engine setup");
        }
        
        // Check for views directory
        const has_views = /\w+\s*\.\s*set\s*\(\s*['"]views['"]/i.test(user_code);
        if (has_views) {
            checks.push("✅ Has views directory");
            score += 25;
        } else {
            checks.push("❌ Missing views directory");
        }
        
        // Check for res.render
        const has_render = /\w+\s*\.\s*render\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_render) {
            checks.push("✅ Has res.render");
            score += 25;
        } else {
            checks.push("❌ Missing res.render");
        }
        
        // Check for template data
        const has_template_data = /\w+\s*\.\s*render\s*\(\s*['"][^'"]+['"]\s*,\s*{/i.test(user_code);
        if (has_template_data) {
            checks.push("✅ Has template data");
            score += 25;
        } else {
            checks.push("❌ Missing template data");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more template engine features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Template Engines", language: "express" }
    };
}

console.log("✅ Test ready for: Template Engines");