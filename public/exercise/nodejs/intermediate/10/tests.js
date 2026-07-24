// nodejs/intermediate/10/tests.js
// Test for Task Scheduling
console.log("🧪 Testing: Task Scheduling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for node-cron import
        const hasCronImport = userCode.match(/const\s+cron\s*=\s*require\s*\(\s*['"]node-cron['"]\s*\)/);
        if (hasCronImport) {
            checks.push("✅ Has node-cron import");
            score += 25;
        } else {
            checks.push("❌ Missing node-cron import");
        }
        
        // Check for cron.schedule
        const hasCronSchedule = userCode.match(/cron\.schedule\s*\(\s*['"][^'"]+['"]/);
        if (hasCronSchedule) {
            checks.push("✅ Has cron.schedule");
            score += 25;
        } else {
            checks.push("❌ Missing cron.schedule");
        }
        
        // Check for scheduled task function
        const hasTaskFunction = userCode.match(/cron\.schedule\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\)\s*{/);
        if (hasTaskFunction) {
            checks.push("✅ Has scheduled task function");
            score += 25;
        } else {
            checks.push("❌ Missing scheduled task function");
        }
        
        // Check for console.log in task
        const hasTaskLog = userCode.match(/cron\.schedule\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\)\s*{[^}]*console\.log/);
        if (hasTaskLog) {
            checks.push("✅ Has console.log in task");
            score += 25;
        } else {
            checks.push("❌ Missing console.log in task");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more task scheduling features`;
            
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
      topic: "Task Scheduling",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Task Scheduling");