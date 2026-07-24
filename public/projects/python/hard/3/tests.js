// Test for Automated Testing Suite (hard/3)
const testSuite = {
    name: "Automated Testing Suite",
    tests: [
        {
            name: "Testing Framework Implementation",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 40) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for testing framework imports
                if (code.includes("import pytest") || code.includes("import unittest") || code.includes("from unittest")) {
                    score += 30;
                    result.details.push("✅ Imports testing framework");
                } else {
                    result.details.push("❌ Missing testing framework (pytest/unittest)");
                }

                // Check for test function definitions
                if (code.includes("def test_") || code.includes("def setUp") || code.includes("def tearDown")) {
                    score += 25;
                    result.details.push("✅ Defines test functions");
                } else {
                    result.details.push("❌ Missing test function definitions");
                }

                // Check for assertions
                if (code.includes("assert ") || code.includes("assertEqual") || code.includes("assertTrue")) {
                    score += 20;
                    result.details.push("✅ Uses assertion statements");
                } else {
                    result.details.push("❌ Missing assertions in tests");
                }

                // Check for test class structure (unittest style)
                if (code.includes("class") && (code.includes("TestCase") || code.includes("Test"))) {
                    score += 15;
                    result.details.push("✅ Uses test class structure");
                } else if (code.includes("def test_")) {
                    score += 10;
                    result.details.push("✅ Uses function-based tests");
                }

                // Check for fixtures or setup
                if (code.includes("@pytest.fixture") || code.includes("setUp") || code.includes("@fixture")) {
                    score += 10;
                    result.details.push("✅ Includes test fixtures/setup");
                } else {
                    result.details.push("❌ Missing test setup/fixtures");
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