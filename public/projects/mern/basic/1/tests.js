// Test for MERN Basic 1 - Simple CRUD App (Single File)
// Tests Express server, MongoDB integration, CRUD operations, and React frontend

console.log("🧪 Testing: MERN Simple CRUD App (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            database: 0,
            frontend: 0
        }
    };

    try {
        let totalScore = 0;
        const checks = [];

        if (!jsContent) {
            result.message = "No JavaScript content provided";
            return result;
        }

        // Backend/Express Tests (35 points total)
        let backendScore = 0;
        
        if (jsContent.includes('express()') && jsContent.includes('app.listen')) {
            checks.push("✅ Backend: Express server setup");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        if (jsContent.includes('app.use(express.json())')) {
            checks.push("✅ Backend: JSON middleware configured");
            backendScore += 5;
        } else {
            checks.push("❌ Backend: Missing JSON middleware");
        }

        const hasGetRoute = jsContent.includes("app.get('/api/users'") || jsContent.includes('app.get("/api/users"');
        const hasPostRoute = jsContent.includes("app.post('/api/users'") || jsContent.includes('app.post("/api/users"');
        const hasPutRoute = jsContent.includes("app.put('/api/users/:id'") || jsContent.includes('app.put("/api/users/:id"');
        const hasDeleteRoute = jsContent.includes("app.delete('/api/users/:id'") || jsContent.includes('app.delete("/api/users/:id"');

        if (hasGetRoute && hasPostRoute && hasPutRoute && hasDeleteRoute) {
            checks.push("✅ Backend: All CRUD routes implemented");
            backendScore += 20;
        } else {
            checks.push(`❌ Backend: Missing CRUD routes (GET:${hasGetRoute}, POST:${hasPostRoute}, PUT:${hasPutRoute}, DELETE:${hasDeleteRoute})`);
        }

        // Database/MongoDB Tests (25 points total)
        let databaseScore = 0;

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Database: MongoDB connection configured");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing MongoDB connection");
        }

        if (jsContent.includes('mongoose.Schema') && jsContent.includes('mongoose.model')) {
            checks.push("✅ Database: Mongoose schema and model defined");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing Mongoose schema/model");
        }

        if (jsContent.includes('name') && jsContent.includes('email') && jsContent.includes('age')) {
            checks.push("✅ Database: User schema has required fields");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing required user fields (name, email, age)");
        }

        // Frontend/React Tests (40 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 15;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        if (jsContent.includes('axios')) {
            checks.push("✅ Frontend: Axios for API calls");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing Axios for API communication");
        }

        if (jsContent.includes('form') && jsContent.includes('input')) {
            checks.push("✅ Frontend: User input form");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing user input form");
        }

        if (jsContent.includes('map') && jsContent.includes('user')) {
            checks.push("✅ Frontend: User list display");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing user list display");
        }

        // Error Handling and Best Practices
        if (jsContent.includes('try') && jsContent.includes('catch')) {
            checks.push("✅ Best Practice: Error handling implemented");
        } else {
            checks.push("❌ Best Practice: Missing error handling");
        }

        if (jsContent.includes('res.status(500)') || jsContent.includes('res.status(400)')) {
            checks.push("✅ Best Practice: HTTP status codes used");
        } else {
            checks.push("❌ Best Practice: Missing proper HTTP status codes");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 35);
        result.breakdown.database = Math.min(databaseScore, 25);
        result.breakdown.frontend = Math.min(frontendScore, 40);
        
        totalScore = result.breakdown.backend + result.breakdown.database + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! MERN CRUD app complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing Express routes, MongoDB setup, and React components`;

    } catch (error) {
        result.message = "Error: " + error.message;
        console.error("Test error:", error);
    }

    return result;
}

// Export for Monaco Editor
if (typeof window !== "undefined") {
    window.exerciseTest = {
        runTests: runProjectTests,
        testConfig: {
            topic: "MERN Simple CRUD App (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Simple CRUD App (Single File)");