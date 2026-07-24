// Test for Message Queues
console.log("🧪 Testing: Message Queues");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for amqplib import
        const hasAmqpImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]amqplib['"]\s*\)/);
        if (hasAmqpImport) {
            checks.push("✅ Has amqplib import");
            score += 25;
        } else {
            checks.push("❌ Missing amqplib import");
        }
        
        // Check for connection to queue
        const hasQueueConnection = userCode.match(/amqp\.connect\s*\(\s*['"][^'"]+['"]/);
        if (hasQueueConnection) {
            checks.push("✅ Has queue connection");
            score += 25;
        } else {
            checks.push("❌ Missing queue connection");
        }
        
        // Check for channel creation
        const hasChannel = userCode.match(/connection\.createChannel\s*\(\s*\)/);
        if (hasChannel) {
            checks.push("✅ Has channel creation");
            score += 25;
        } else {
            checks.push("❌ Missing channel creation");
        }
        
        // Check for message publishing
        const hasPublish = userCode.match(/channel\.sendToQueue\s*\(\s*['"][^'"]+['"]/);
        if (hasPublish) {
            checks.push("✅ Has message publishing");
            score += 25;
        } else {
            checks.push("❌ Missing message publishing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more message queue features`;
            
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
      topic: "Message Queues",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Message Queues");