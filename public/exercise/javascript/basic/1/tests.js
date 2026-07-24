// javascript/basic/1/tests.js
// Test for Variables and Data Types
console.log("🧪 Testing: Variables and Data Types");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for let declaration
        const hasLet = userCode.match(/\blet\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasLet) {
            checks.push("✅ Has let declaration");
            score += 25;
        } else {
            checks.push("❌ Missing let declaration");
        }
        
        // Check for const declaration
        const hasConst = userCode.match(/\bconst\s+\w+\s*=\s*[^;]+;/);
        if (hasConst) {
            checks.push("✅ Has const declaration");
            score += 25;
        } else {
            checks.push("❌ Missing const declaration");
        }
        
        // Check for var declaration
        const hasVar = userCode.match(/\bvar\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasVar) {
            checks.push("✅ Has var declaration");
            score += 25;
        } else {
            checks.push("❌ Missing var declaration");
        }
        
        // Check for multiple data types
        const hasMultipleTypes = userCode.match(/(\b(let|const|var)\s+\w+\s*=\s*(\d+|["'][^"']*["']|true|false|null|undefined)\s*;)/g)?.length >= 3;
        if (hasMultipleTypes) {
            checks.push("✅ Has multiple data types");
            score += 25;
        } else {
            checks.push("❌ Missing multiple data types");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more variable and data type features`;
            
    } catch (e) {
        result.message = `Error: ${e.message}`;
    }
    
    return result;
}

console.log("✅ Test ready for: Variables and Data Types");
