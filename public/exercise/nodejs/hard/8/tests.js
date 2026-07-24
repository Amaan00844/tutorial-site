// Test for GraphQL Implementation
console.log("🧪 Testing: GraphQL Implementation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for apollo-server import
        const hasApolloImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]apollo-server['"]\s*\)/);
        if (hasApolloImport) {
            checks.push("✅ Has apollo-server import");
            score += 25;
        } else {
            checks.push("❌ Missing apollo-server import");
        }
        
        // Check for typeDefs definition
        const hasTypeDefs = userCode.match(/const\s+typeDefs\s*=\s*gql\s*`[^`]+`/);
        if (hasTypeDefs) {
            checks.push("✅ Has typeDefs definition");
            score += 25;
        } else {
            checks.push("❌ Missing typeDefs definition");
        }
        
        // Check for resolvers
        const hasResolvers = userCode.match(/const\s+resolvers\s*=\s*{[^}]*Query\s*:/);
        if (hasResolvers) {
            checks.push("✅ Has resolvers definition");
            score += 25;
        } else {
            checks.push("❌ Missing resolvers definition");
        }
        
        // Check for ApolloServer instantiation
        const hasApolloServer = userCode.match(/new\s+ApolloServer\s*\(\s*{[^}]*typeDefs\s*,\s*resolvers\s*}\s*\)/);
        if (hasApolloServer) {
            checks.push("✅ Has ApolloServer instantiation");
            score += 25;
        } else {
            checks.push("❌ Missing ApolloServer instantiation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more GraphQL implementation features`;
            
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
      topic: "GraphQL Implementation",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: GraphQL Implementation");