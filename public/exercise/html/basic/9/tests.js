// Test for Meta Tags and SEO
console.log("🧪 Testing: Meta Tags and SEO");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for title tag
        if (/<title[^>]*>[\s\S]*<\/title>/i.test(userCode)) {
            checks.push("✅ Has title tag");
            score += 25;
        } else {
            checks.push("❌ Missing title tag");
        }
        
        // Check for meta description
        if (/<meta[^>]+name\s*=\s*["']description["'][^>]+content\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has meta description");
            score += 25;
        } else {
            checks.push("❌ Missing meta description");
        }
        
        // Check for viewport meta tag
        if (/<meta[^>]+name\s*=\s*["']viewport["'][^>]+content\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has viewport meta tag");
            score += 25;
        } else {
            checks.push("❌ Missing viewport meta tag");
        }
        
        // Check for keywords or og meta tags
        if (/<meta[^>]+name\s*=\s*["'](keywords|og:[a-z]+)["'][^>]+content\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has SEO meta tags");
            score += 25;
        } else {
            checks.push("❌ Missing SEO meta tags");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more meta tags for SEO`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Meta Tags and SEO", language: "html"}
    };
}

console.log("✅ Test ready for: Meta Tags and SEO");