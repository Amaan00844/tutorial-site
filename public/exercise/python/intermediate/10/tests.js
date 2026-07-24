// python/intermediate/10/tests.js
// Test for Web Scraping
console.log("🧪 Testing: Web Scraping");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for BeautifulSoup import
        const hasBsImport = userCode.match(/\bfrom\s+bs4\s+import\s+BeautifulSoup\b/);
        if (hasBsImport) {
            checks.push("✅ Has BeautifulSoup import");
            score += 25;
        } else {
            checks.push("❌ Missing BeautifulSoup import");
        }
        
        // Check for requests import
        const hasRequestsImport = userCode.match(/\bimport\s+requests\b/);
        if (hasRequestsImport) {
            checks.push("✅ Has requests import");
            score += 25;
        } else {
            checks.push("❌ Missing requests import");
        }
        
        // Check for BeautifulSoup object creation
        const hasBsObject = userCode.match(/\bBeautifulSoup\s*\(\s*[^)]+\)/);
        if (hasBsObject) {
            checks.push("✅ Has BeautifulSoup object creation");
            score += 25;
        } else {
            checks.push("❌ Missing BeautifulSoup object creation");
        }
        
        // Check for HTML parsing
        const hasHtmlParsing = userCode.match(/\b\w+\.find(_all)?\s*\(\s*['"][^'"]+['"]\s*(,\s*[^)]+)?\)/);
        if (hasHtmlParsing) {
            checks.push("✅ Has HTML parsing");
            score += 25;
        } else {
            checks.push("❌ Missing HTML parsing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more web scraping features`;
            
    } catch (e) {
        result.message = `Error: ${e.message}`;
    }
    
    return result;
}
// Export for Monaco Editor
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: runSimpleTest,
    testConfig: {
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: Web Scraping");