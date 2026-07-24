// Test for Full-Text Search
console.log("🧪 Testing: Full-Text Search");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for MATCH ... AGAINST
        const has_match_against = /MATCH\s*\(.*\)\s+AGAINST\s*\(/i.test(user_code);
        if (has_match_against) {
            checks.push("✅ Has MATCH ... AGAINST");
            score += 25;
        } else {
            checks.push("❌ Missing MATCH ... AGAINST");
        }
        
        // Check for FULLTEXT index
        const has_fulltext_index = /CREATE\s+FULLTEXT\s+INDEX\s+\w+\s+ON\s+\w+/i.test(user_code);
        if (has_fulltext_index) {
            checks.push("✅ Has FULLTEXT index");
            score += 25;
        } else {
            checks.push("❌ Missing FULLTEXT index");
        }
        
        // Check for SELECT with full-text search
        const has_select_fulltext = /SELECT\s+.*MATCH\s*\(.*\)\s+AGAINST/i.test(user_code);
        if (has_select_fulltext) {
            checks.push("✅ Has SELECT with full-text search");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with full-text search");
        }
        
        // Check for IN BOOLEAN MODE
        const has_boolean_mode = /AGAINST\s*\(.*IN\s+BOOLEAN\s+MODE\)/i.test(user_code);
        if (has_boolean_mode) {
            checks.push("✅ Has IN BOOLEAN MODE");
            score += 25;
        } else {
            checks.push("❌ Missing IN BOOLEAN MODE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more full-text search features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Full-Text Search", language: "sql" }
    };
}

console.log("✅ Test ready for: Full-Text Search");