// Test for HTML Validation
console.log("🧪 Testing: HTML Validation");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for DOCTYPE
        if (/<!DOCTYPE\s+html>/i.test(userCode)) {
            checks.push("✅ Has DOCTYPE declaration");
            score += 20;
        } else {
            checks.push("❌ Missing DOCTYPE declaration");
        }
        
        // Check for lang attribute
        if (/<html[^>]+lang\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has lang attribute");
            score += 20;
        } else {
            checks.push("❌ Missing lang attribute");
        }
        
        // Check for charset meta tag
        if (/<meta[^>]+charset\s*=\s*["']UTF-8["']/i.test(userCode)) {
            checks.push("✅ Has charset meta tag");
            score += 20;
        } else {
            checks.push("❌ Missing charset meta tag");
        }
        
        // Check for proper tag nesting
        if (/<html[^>]*>[\s\S]*<head[^>]*>[\s\S]*<\/head>[\s\S]*<body[^>]*>[\s\S]*<\/body>[\s\S]*<\/html>/i.test(userCode)) {
            checks.push("✅ Has proper tag nesting");
            score += 20;
        } else {
            checks.push("❌ Missing proper tag nesting");
        }
        
        // Check for no unclosed tags
        const openTags = (userCode.match(/<[a-zA-Z][^>]*>/g) || []).length;
        const closeTags = (userCode.match(/<\/[a-zA-Z][^>]*>/g) || []).length;
        const selfClosing = (userCode.match(/<[^>]+\/>/g) || []).length;
        if (openTags <= closeTags + selfClosing) {
            checks.push("✅ No unclosed tags");
            score += 20;
        } else {
            checks.push("❌ Has unclosed tags");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 80;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Fix HTML validation issues`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "HTML Validation", language: "html"}
    };
}

console.log("✅ Test ready for: HTML Validation");