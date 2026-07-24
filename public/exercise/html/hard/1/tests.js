// Test for Web Components
console.log("🧪 Testing: Web Components");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom element definition
        if (/customElements\.define\s*\(\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has custom element definition");
            score += 25;
        } else {
            checks.push("❌ Missing custom element definition");
        }
        
        // Check for extends HTMLElement
        if (/extends\s+HTMLElement/i.test(userCode)) {
            checks.push("✅ Extends HTMLElement");
            score += 25;
        } else {
            checks.push("❌ Missing HTMLElement extension");
        }
        
        // Check for template element
        if (/<template[^>]*>[\s\S]*<\/template>/i.test(userCode)) {
            checks.push("✅ Has template element");
            score += 25;
        } else {
            checks.push("❌ Missing template element");
        }
        
        // Check for shadow DOM usage
        if (/attachShadow\s*\(\s*\{\s*mode\s*:/i.test(userCode)) {
            checks.push("✅ Has shadow DOM usage");
            score += 25;
        } else {
            checks.push("❌ Missing shadow DOM usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more web component features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Web Components", language: "html"}
    };
}

console.log("✅ Test ready for: Web Components");