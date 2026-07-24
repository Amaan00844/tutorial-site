// java/hard/8/tests.js
// Test for Security Implementation
console.log("🧪 Testing: Security Implementation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Cipher
        const hasCipher = userCode.match(/\bCipher\s+\w+\s*(=\s*Cipher\.getInstance\s*\(\s*[^)]+\))?\s*;/);
        if (hasCipher) {
            checks.push("✅ Has Cipher");
            score += 25;
        } else {
            checks.push("❌ Missing Cipher");
        }
        
        // Check for KeyGenerator
        const hasKeyGenerator = userCode.match(/\bKeyGenerator\s+\w+\s*(=\s*KeyGenerator\.getInstance\s*\(\s*[^)]+\))?\s*;/);
        if (hasKeyGenerator) {
            checks.push("✅ Has KeyGenerator");
            score += 25;
        } else {
            checks.push("❌ Missing KeyGenerator");
        }
        
        // Check for encryption/decryption
        const hasCryptoOp = userCode.match(/\b\w+\.(doFinal|init)\s*\(\s*[^)]+\)\s*;/);
        if (hasCryptoOp) {
            checks.push("✅ Has encryption/decryption operation");
            score += 25;
        } else {
            checks.push("❌ Missing encryption/decryption operation");
        }
        
        // Check for import javax.crypto
        const hasCryptoImport = userCode.match(/\bimport\s+javax\.crypto\.\w+\s*;/);
        if (hasCryptoImport) {
            checks.push("✅ Has javax.crypto import");
            score += 25;
        } else {
            checks.push("❌ Missing javax.crypto import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more security implementation features`;
            
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

console.log("✅ Test ready for: Security Implementation");