
// java/intermediate/2/tests.js
// Test for Collections Framework
console.log("🧪 Testing: Collections Framework");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for HashMap
        const hasHashMap = userCode.match(/\bHashMap\s*<\s*\w+\s*,\s*\w+\s*>\s+\w+\s*(=\s*new\s+HashMap\s*<\s*\w+\s*,\s*\w+\s*>\s*\(\s*\))?\s*;/);
        if (hasHashMap) {
            checks.push("✅ Has HashMap");
            score += 25;
        } else {
            checks.push("❌ Missing HashMap");
        }
        
        // Check for TreeSet
        const hasTreeSet = userCode.match(/\bTreeSet\s*<\s*\w+\s*>\s+\w+\s*(=\s*new\s+TreeSet\s*<\s*\w+\s*>\s*\(\s*\))?\s*;/);
        if (hasTreeSet) {
            checks.push("✅ Has TreeSet");
            score += 25;
        } else {
            checks.push("❌ Missing TreeSet");
        }
        
        // Check for LinkedList
        const hasLinkedList = userCode.match(/\bLinkedList\s*<\s*\w+\s*>\s+\w+\s*(=\s*new\s+LinkedList\s*<\s*\w+\s*>\s*\(\s*\))?\s*;/);
        if (hasLinkedList) {
            checks.push("✅ Has LinkedList");
            score += 25;
        } else {
            checks.push("❌ Missing LinkedList");
        }
        
        // Check for collection method (e.g., put, add)
        const hasCollectionMethod = userCode.match(/\b\w+\.(put|add)\s*\(\s*[^)]+\)\s*;/);
        if (hasCollectionMethod) {
            checks.push("✅ Has collection method");
            score += 25;
        } else {
            checks.push("❌ Missing collection method");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more collections framework features`;
            
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

console.log("✅ Test ready for: Collections Framework");