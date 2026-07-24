// Test for Python Calculator App
const testSuite = {
    name: "Python Calculator App",
    tests: [
        {
            name: "Basic Structure",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 10) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for required functions
                if (code.includes("def add") || code.includes("def addition")) {
                    score += 20;
                    result.details.push("✅ Has addition function");
                } else {
                    result.details.push("❌ Missing addition function");
                }

                if (code.includes("def sub") || code.includes("def subtract")) {
                    score += 20;
                    result.details.push("✅ Has subtraction function");
                } else {
                    result.details.push("❌ Missing subtraction function");
                }

                if (code.includes("def mul") || code.includes("def multiply")) {
                    score += 20;
                    result.details.push("✅ Has multiplication function");
                } else {
                    result.details.push("❌ Missing multiplication function");
                }

                if (code.includes("def div") || code.includes("def divide")) {
                    score += 20;
                    result.details.push("✅ Has division function");
                } else {
                    result.details.push("❌ Missing division function");
                }

                // Check for error handling
                if (code.includes("try") && code.includes("except")) {
                    score += 10;
                    result.details.push("✅ Has error handling");
                } else {
                    result.details.push("❌ Missing error handling");
                }

                // Check for division by zero handling
                if (code.includes("if") && code.includes("== 0") && code.includes("raise")) {
                    score += 10;
                    result.details.push("✅ Handles division by zero");
                } else {
                    result.details.push("❌ Missing division by zero check");
                }

                result.score = score;
                result.passed = score >= 70;
                return result;
            }
        }
    ]
};

// Make test suite available in the browser
if (typeof window !== "undefined") {
    window.testSuite = testSuite;
}
