
// css/basic/10/tests.js
// Test for CSS Media Queries
console.log("🧪 Testing: CSS Media Queries");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @media
        const has_media = /@media\s+\w+/i.test(user_code);
        if (has_media) {
            checks.push("✅ Has @media");
            score += 25;
        } else {
            checks.push("❌ Missing @media");
        }
        
        // Check for max-width or min-width
        const has_width = /(max-width|min-width)\s*:\s*[^)]+\)/i.test(user_code);
        if (has_width) {
            checks.push("✅ Has max-width or min-width");
            score += 25;
        } else {
            checks.push("❌ Missing max-width or min-width");
        }
        
        // Check for CSS rules inside media query
        const has_media_rules = /@media\s+.*{[^}]+}/i.test(user_code);
        if (has_media_rules) {
            checks.push("✅ Has CSS rules in media query");
            score += 25;
        } else {
            checks.push("❌ Missing CSS rules in media query");
        }
        
        // Check for responsive selector
        const has_responsive_selector = /@media\s+.*{[#.a-zA-Z][^{]*{/i.test(user_code);
        if (has_responsive_selector) {
            checks.push("✅ Has responsive selector");
            score += 25;
        } else {
            checks.push("❌ Missing responsive selector");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more media query features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Media Queries", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Media Queries");