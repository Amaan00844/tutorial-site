// Test for HTML Email Templates
console.log("🧪 Testing: HTML Email Templates");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for table-based layout
        if (/<table[^>]*>[\s\S]*<tr[^>]*>[\s\S]*<td[^>]*>/i.test(userCode)) {
            checks.push("✅ Has table-based layout");
            score += 25;
        } else {
            checks.push("❌ Missing table-based layout");
        }
        
        // Check for inline CSS
        if (/style\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has inline CSS");
            score += 25;
        } else {
            checks.push("❌ Missing inline CSS");
        }
        
        // Check for email-safe attributes
        if (/(cellpadding|cellspacing|border|bgcolor)\s*=\s*["'][^"']*["']/i.test(userCode)) {
            checks.push("✅ Has email-safe attributes");
            score += 25;
        } else {
            checks.push("❌ Missing email-safe attributes");
        }
        
        // Check for alt text and email best practices
        if (/alt\s*=\s*["'][^"']+["'][\s\S]*role\s*=\s*["']presentation["']/i.test(userCode) || 
            /mso-|outlook|gmail/i.test(userCode)) {
            checks.push("✅ Has email client optimizations");
            score += 25;
        } else {
            checks.push("❌ Missing email client optimizations");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more email template features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "HTML Email Templates", language: "html"}
    };
}

console.log("✅ Test ready for: HTML Email Templates");