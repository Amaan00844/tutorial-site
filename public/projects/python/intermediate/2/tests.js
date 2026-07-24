// Test for REST API with Flask App (intermediate/2)
const testSuite = {
    name: "REST API with Flask",
    tests: [
        {
            name: "Flask API Structure",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 30) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for Flask import
                if (code.includes("from flask import Flask") || code.includes("import Flask")) {
                    score += 25;
                    result.details.push("✅ Imports Flask");
                } else {
                    result.details.push("❌ Missing Flask import");
                }

                // Check for Flask app creation
                if (code.includes("Flask(__name__)") || code.includes("app = Flask")) {
                    score += 20;
                    result.details.push("✅ Creates Flask app instance");
                } else {
                    result.details.push("❌ Missing Flask app creation");
                }

                // Check for route decorator
                if (code.includes("@app.route")) {
                    score += 20;
                    result.details.push("✅ Uses route decorators");
                } else {
                    result.details.push("❌ Missing @app.route decorators");
                }

                // Check for HTTP methods
                if (code.includes("methods=") || code.includes("'GET'") || code.includes("'POST'")) {
                    score += 15;
                    result.details.push("✅ Specifies HTTP methods");
                } else {
                    result.details.push("❌ Missing HTTP method specification");
                }

                // Check for JSON handling
                if (code.includes("jsonify") || code.includes("request.json") || code.includes("json")) {
                    score += 10;
                    result.details.push("✅ Handles JSON data");
                } else {
                    result.details.push("❌ Missing JSON handling");
                }

                // Check for app runner
                if (code.includes("app.run") || code.includes("if __name__")) {
                    score += 10;
                    result.details.push("✅ Runs the Flask application");
                } else {
                    result.details.push("❌ Missing app.run() or main block");
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