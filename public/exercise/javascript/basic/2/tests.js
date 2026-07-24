// Test for JavaScript Functions and Scope
// JavaScript test that validates function concepts

console.log("🧪 Testing: JavaScript Functions and Scope");

function runSimpleTest(userCode) {
  const result = { passed: false, score: 0, message: "", details: [] };

  try {
    if (!userCode || userCode.trim().length < 5) {
      result.message = "Code is empty or too short";
      return result;
    }

    let score = 0;
    const checks = [];

    // Check for function declaration
    if (/function\s+\w+\s*\(/.test(userCode)) {
      checks.push("✅ Has function declaration");
      score += 25;
    } else {
      checks.push("❌ Missing function declaration");
    }

    // Check for function parameters
    if (/function\s+\w+\s*\([^)]+\)/.test(userCode)) {
      checks.push("✅ Function has parameters");
      score += 20;
    } else {
      checks.push("❌ Missing function parameters");
    }

    // Check for return statement
    if (/return\s+/.test(userCode)) {
      checks.push("✅ Has return statement");
      score += 25;
    } else {
      checks.push("❌ Missing return statement");
    }

    // Check for function call
    if (
      /\w+\s*\([^)]*\)\s*;?/.test(userCode) &&
      !/function\s+\w+\s*\(/.test(userCode.match(/\w+\s*\([^)]*\)\s*;?/)[0])
    ) {
      checks.push("✅ Function is called");
      score += 30;
    } else {
      checks.push("❌ Missing function call");
    }

    result.details = checks;
    result.score = Math.min(score, 100);
    result.passed = score >= 70;
    result.message = result.passed
      ? `Great! Score: ${result.score}/100`
      : `Score: ${result.score}/100 - Create functions with parameters and return values`;
  } catch (error) {
    result.message = "Error: " + error.message;
  }

  return result;
}

// Export for Monaco Editor
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: runSimpleTest,
    testConfig: {
      topic: "JavaScript Functions and Scope",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: JavaScript Functions and Scope");
