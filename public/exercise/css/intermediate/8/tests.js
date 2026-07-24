// css/intermediate/8/tests.js
// Test for CSS Clip Path
console.log("🧪 Testing: CSS Clip Path");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for clip-path property
        const has_clip_path = /clip-path\s*:\s*[^;]+;/i.test(user_code);
        if (has_clip_path) {
            checks.push("✅ Has clip-path property");
            score += 25;
        } else {
            checks.push("❌ Missing clip-path property");
        }
        
        // Check for polygon clip-path
        const has_polygon = /clip-path\s*:\s*polygon\s*\([^)]+\)/i.test(user_code);
        if (has_polygon) {
            checks.push("✅ Has polygon clip-path");
            score += 25;
        } else {
            checks.push("❌ Missing polygon clip-path");
        }
        
        // Check for circle clip-path
        const has_circle = /clip-path\s*:\s*circle\s*\([^)]+\)/i.test(user_code);
        if (has_circle) {
            checks.push("✅ Has circle clip-path");
            score += 25;
        } else {
            checks.push("❌ Missing circle clip-path");
        }
        
        // Check for clip-path with selector
        const has_clip_selector = /[#.a-zA-Z][^{]*{\s*clip-path\s*:/i.test(user_code);
        if (has_clip_selector) {
            checks.push("✅ Has clip-path with selector");
            score += 25;
        } else {
            checks.push("❌ Missing clip-path with selector");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more clip-path features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Clip Path", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Clip Path");