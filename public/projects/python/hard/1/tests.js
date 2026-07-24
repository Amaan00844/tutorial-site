// Test for Machine Learning Model App (hard/1)
const testSuite = {
    name: "Machine Learning Model",
    tests: [
        {
            name: "ML Model Implementation",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 40) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for scikit-learn imports
                if (code.includes("sklearn") || code.includes("from sklearn")) {
                    score += 30;
                    result.details.push("✅ Imports scikit-learn");
                } else {
                    result.details.push("❌ Missing scikit-learn imports");
                }

                // Check for specific ML model
                if (code.includes("LogisticRegression") || code.includes("RandomForest") || 
                    code.includes("SVM") || code.includes("DecisionTree") || code.includes("LinearRegression")) {
                    score += 20;
                    result.details.push("✅ Uses ML model");
                } else {
                    result.details.push("❌ Missing ML model");
                }

                // Check for train-test split
                if (code.includes("train_test_split")) {
                    score += 20;
                    result.details.push("✅ Splits data for training/testing");
                } else {
                    result.details.push("❌ Missing train_test_split");
                }

                // Check for model training
                if (code.includes(".fit(")) {
                    score += 15;
                    result.details.push("✅ Trains the model");
                } else {
                    result.details.push("❌ Missing model training (.fit)");
                }

                // Check for predictions
                if (code.includes(".predict(")) {
                    score += 10;
                    result.details.push("✅ Makes predictions");
                } else {
                    result.details.push("❌ Missing predictions");
                }

                // Check for evaluation
                if (code.includes("accuracy") || code.includes("score") || code.includes("classification_report")) {
                    score += 5;
                    result.details.push("✅ Evaluates model performance");
                } else {
                    result.details.push("❌ Missing model evaluation");
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