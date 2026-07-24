// Test for Python Data Analysis App (intermediate/3)
const testSuite = {
    name: "Python Data Analysis",
    tests: [
        {
            name: "Data Analysis Implementation",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 30) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for pandas import
                if (code.includes("import pandas") || code.includes("import pandas as pd")) {
                    score += 25;
                    result.details.push("✅ Imports pandas");
                } else {
                    result.details.push("❌ Missing pandas import");
                }

                // Check for numpy import
                if (code.includes("import numpy") || code.includes("import numpy as np")) {
                    score += 20;
                    result.details.push("✅ Imports numpy");
                } else {
                    result.details.push("❌ Missing numpy import");
                }

                // Check for data loading
                if (code.includes("read_csv") || code.includes("read_excel") || code.includes("DataFrame")) {
                    score += 20;
                    result.details.push("✅ Loads data from file");
                } else {
                    result.details.push("❌ Missing data loading");
                }

                // Check for data cleaning
                if (code.includes("dropna") || code.includes("fillna") || code.includes("isnull") || code.includes("isna")) {
                    score += 15;
                    result.details.push("✅ Handles missing values");
                } else {
                    result.details.push("❌ Missing data cleaning");
                }

                // Check for statistical operations
                if (code.includes("mean()") || code.includes("median()") || code.includes("std()") || code.includes("describe()")) {
                    score += 15;
                    result.details.push("✅ Performs statistical analysis");
                } else {
                    result.details.push("❌ Missing statistical operations");
                }

                // Check for data visualization (bonus)
                if (code.includes("matplotlib") || code.includes("plot") || code.includes("seaborn")) {
                    score += 5;
                    result.details.push("✅ Includes data visualization");
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