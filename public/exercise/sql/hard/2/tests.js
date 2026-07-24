// Test for Triggers and Events
console.log("🧪 Testing: Triggers and Events");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TRIGGER
        const has_create_trigger = /CREATE\s+TRIGGER\s+\w+/i.test(user_code);
        if (has_create_trigger) {
            checks.push("✅ Has CREATE TRIGGER");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE TRIGGER");
        }
        
        // Check for BEFORE or AFTER
        const has_timing = /(BEFORE|AFTER)\s+(INSERT|UPDATE|DELETE)/i.test(user_code);
        if (has_timing) {
            checks.push("✅ Has BEFORE or AFTER");
            score += 25;
        } else {
            checks.push("❌ Missing BEFORE or AFTER");
        }
        
        // Check for CREATE EVENT
        const has_create_event = /CREATE\s+EVENT\s+\w+/i.test(user_code);
        if (has_create_event) {
            checks.push("✅ Has CREATE EVENT");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE EVENT");
        }
        
        // Check for BEGIN ... END block
        const has_begin_end = /BEGIN\s+.*END/i.test(user_code);
        if (has_begin_end) {
            checks.push("✅ Has BEGIN ... END block");
            score += 25;
        } else {
            checks.push("❌ Missing BEGIN ... END block");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more trigger and event features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Triggers and Events", language: "sql" }
    };
}

console.log("✅ Test ready for: Triggers and Events");