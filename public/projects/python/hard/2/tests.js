// Test for Django Web Application (hard/2)
const testSuite = {
    name: "Django Web Application",
    tests: [
        {
            name: "Django Application Structure",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 40) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for Django imports
                if (code.includes("from django") || code.includes("import django")) {
                    score += 25;
                    result.details.push("✅ Imports Django framework");
                } else {
                    result.details.push("❌ Missing Django imports");
                }

                // Check for models
                if (code.includes("models.Model") || (code.includes("class") && code.includes("Model"))) {
                    score += 20;
                    result.details.push("✅ Defines Django models");
                } else {
                    result.details.push("❌ Missing model definitions");
                }

                // Check for views
                if (code.includes("HttpResponse") || code.includes("render") || code.includes("def") && code.includes("request")) {
                    score += 20;
                    result.details.push("✅ Defines view functions");
                } else {
                    result.details.push("❌ Missing view functions");
                }

                // Check for URL patterns
                if (code.includes("urlpatterns") || code.includes("path(") || code.includes("url(")) {
                    score += 15;
                    result.details.push("✅ Defines URL patterns");
                } else {
                    result.details.push("❌ Missing URL configuration");
                }

                // Check for authentication
                if (code.includes("User") || code.includes("login") || code.includes("authenticate") || code.includes("@login_required")) {
                    score += 10;
                    result.details.push("✅ Includes user authentication");
                } else {
                    result.details.push("❌ Missing authentication features");
                }

                // Check for database operations
                if (code.includes(".save()") || code.includes(".objects") || code.includes(".filter") || code.includes(".get")) {
                    score += 10;
                    result.details.push("✅ Performs database operations");
                } else {
                    result.details.push("❌ Missing database operations");
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