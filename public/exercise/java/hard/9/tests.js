// java/hard/9/tests.js
// Test for Build Tools and Maven
console.log("🧪 Testing: Build Tools and Maven");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Maven dependency (simulated in Java code)
        const hasMavenDependency = userCode.match(/\bString\s+\w+\s*=\s*["']<dependency>.*<\/dependency>["']\s*;/);
        if (hasMavenDependency) {
            checks.push("✅ Has Maven dependency");
            score += 25;
        } else {
            checks.push("❌ Missing Maven dependency");
        }
        
        // Check for Maven plugin
        const hasMavenPlugin = userCode.match(/\bString\s+\w+\s*=\s*["']<plugin>.*<\/plugin>["']\s*;/);
        if (hasMavenPlugin) {
            checks.push("✅ Has Maven plugin");
            score += 25;
        } else {
            checks.push("❌ Missing Maven plugin");
        }
        
        // Check for build configuration
        const hasBuildConfig = userCode.match(/\bString\s+\w+\s*=\s*["']<build>.*<\/build>["']\s*;/);
        if (hasBuildConfig) {
            checks.push("✅ Has build configuration");
            score += 25;
        } else {
            checks.push("❌ Missing build configuration");
        }
        
        // Check for XML parsing (simulating pom.xml handling)
        const hasXMLParsing = userCode.match(/\b(DocumentBuilder|XmlParser)\s+\w+\s*(=\s*new\s+\1\s*\(\s*[^)]*\))?\s*;/);
        if (hasXMLParsing) {
            checks.push("✅ Has XML parsing");
            score += 25;
        } else {
            checks.push("❌ Missing XML parsing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Maven features`;
            
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

console.log("✅ Test ready for: Build Tools and Maven");