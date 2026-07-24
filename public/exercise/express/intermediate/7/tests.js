
// express/intermediate/7/tests.js
// Test for File Uploads
console.log("🧪 Testing: File Uploads");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for multer import
        const has_multer = /const\s+\w+\s*=\s*require\s*\(\s*['"]multer['"]\s*\)/i.test(user_code);
        if (has_multer) {
            checks.push("✅ Has multer import");
            score += 25;
        } else {
            checks.push("❌ Missing multer import");
        }
        
        // Check for multer setup
        const has_multer_setup = /const\s+\w+\s*=\s*\w+\s*\(\s*{/i.test(user_code);
        if (has_multer_setup) {
            checks.push("✅ Has multer setup");
            score += 25;
        } else {
            checks.push("❌ Missing multer setup");
        }
        
        // Check for upload middleware
        const has_upload_middleware = /\w+\s*\.\s*post\s*\(\s*['"][^'"]+['"]\s*,\s*\w+\s*\.\s*(single|array)\s*\(\s*['"]/i.test(user_code);
        if (has_upload_middleware) {
            checks.push("✅ Has upload middleware");
            score += 25;
        } else {
            checks.push("❌ Missing upload middleware");
        }
        
        // Check for file access
        const has_file_access = /\w+\s*\.\s*file\s*\.\s*\w+/i.test(user_code);
        if (has_file_access) {
            checks.push("✅ Has file access");
            score += 25;
        } else {
            checks.push("❌ Missing file access");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file upload features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "File Uploads", language: "express" }
    };
}

console.log("✅ Test ready for: File Uploads");