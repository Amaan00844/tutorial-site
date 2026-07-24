
// express/hard/4/tests.js
// Test for Compression
console.log("🧪 Testing: Compression");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for compression import
        const has_compression = /const\s+\w+\s*=\s*require\s*\(\s*['"]compression['"]\s*\)/i.test(user_code);
        if (has_compression) {
            checks.push("✅ Has compression import");
            score += 25;
        } else {
            checks.push("❌ Missing compression import");
        }
        
        // Check for compression middleware
        const has_compression_middleware = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*\)/i.test(user_code);
        if (has_compression_middleware) {
            checks.push("✅ Has compression middleware");
            score += 25;
        } else {
            checks.push("❌ Missing compression middleware");
        }
        
        // Check for compression options
        const has_compression_options = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*{/i.test(user_code);
        if (has_compression_options) {
            checks.push("✅ Has compression options");
            score += 25;
        } else {
            checks.push("❌ Missing compression options");
        }
        
        // Check for route with compression
        const has_route_compression = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*\)\s*\)\s*;\s*\w+\s*\.\s*(get|post)\s*\(/i.test(user_code);
        if (has_route_compression) {
            checks.push("✅ Has route with compression");
            score += 25;
        } else {
            checks.push("❌ Missing route with compression");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more compression features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Compression", language: "express" }
    };
}
console.log("✅ Test ready for: Compression");