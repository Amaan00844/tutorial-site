
// css/hard/2/tests.js
// Test for CSS Preprocessors
console.log("🧪 Testing: CSS Preprocessors");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for nested selectors
        const has_nested = /[#.a-zA-Z][^{]*{\s*[#.a-zA-Z][^{]*{/i.test(user_code);
        if (has_nested) {
            checks.push("✅ Has nested selectors");
            score += 25;
        } else {
            checks.push("❌ Missing nested selectors");
        }
        
        // Check for variable definition (Sass-like)
        const has_variable = /\$[a-zA-Z0-9-]+\s*:\s*[^;]+;/i.test(user_code);
        if (has_variable) {
            checks.push("✅ Has variable definition");
            score += 25;
        } else {
            checks.push("❌ Missing variable definition");
        }
        
        // Check for variable usage
        const has_variable_use = /[a-zA-Z-]+:\s*\$[a-zA-Z0-9-]+;/i.test(user_code);
        if (has_variable_use) {
            checks.push("✅ Has variable usage");
            score += 25;
        } else {
            checks.push("❌ Missing variable usage");
        }
        
        // Check for @mixin or @include
        const has_mixin = /(@mixin\s+\w+|@include\s+\w+)/i.test(user_code);
        if (has_mixin) {
            checks.push("✅ Has @mixin or @include");
            score += 25;
        } else {
            checks.push("❌ Missing @mixin or @include");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more preprocessor features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Preprocessors", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Preprocessors");