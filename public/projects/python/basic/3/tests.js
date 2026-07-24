// Test for Python Password Generator App (basic/3)
const testSuite = {
    name: "Python Password Generator",
    tests: [
        {
            name: "Password Generation Features",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 20) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for random import
                if (code.includes("import random") || code.includes("from random")) {
                    score += 20;
                    result.details.push("✅ Imports random module");
                } else {
                    result.details.push("❌ Missing 'import random'");
                }

                // Check for string import (optional but common)
                if (code.includes("import string")) {
                    score += 10;
                    result.details.push("✅ Imports string module");
                }

                // Check for character sets - letters
                if (code.includes("ascii") || code.includes("abcdefghijklmnop") || code.includes("ABCDEFGHIJKLMNOP")) {
                    score += 15;
                    result.details.push("✅ Includes letter characters");
                } else {
                    result.details.push("❌ Missing letter characters");
                }

                // Check for character sets - digits
                if (code.includes("digits") || code.includes("0123456789") || code.includes("string.digits")) {
                    score += 15;
                    result.details.push("✅ Includes digit characters");
                } else {
                    result.details.push("❌ Missing digit characters");
                }

                // Check for character sets - symbols
                if (code.includes("punctuation") || code.includes("!@#$") || code.includes("special")) {
                    score += 15;
                    result.details.push("✅ Includes symbol characters");
                } else {
                    result.details.push("❌ Missing symbol characters");
                }

                // Check for password length handling
                if (code.includes("len") || code.includes("length") || code.includes("range(")) {
                    score += 15;
                    result.details.push("✅ Handles password length");
                } else {
                    result.details.push("❌ Missing length handling");
                }

                // Check for randomization methods
                if (code.includes("choice") || code.includes("sample") || code.includes("shuffle") || code.includes("randint")) {
                    score += 10;
                    result.details.push("✅ Uses randomization methods");
                } else {
                    result.details.push("❌ Missing randomization");
                }

                result.score = score;
                result.passed = score >= 60;
                return result;
            }
        }
    ]
};

// Make test suite available globally
window.testSuite = testSuite;