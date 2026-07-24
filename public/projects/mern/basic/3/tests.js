// Test for MERN Basic 3 - Todo Full Stack App (Single File)
// Tests task management backend, database operations, and React frontend

console.log("🧪 Testing: MERN Todo Full Stack App (Single File)");

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

        const hasTasksRoutes = jsContent.includes("'/api/tasks'") || jsContent.includes('"/api/tasks"');
        if (hasTasksRoutes) {
            checks.push("✅ Backend: Task API routes defined");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing /api/tasks routes");
        }

        const hasGetTasks = jsContent.includes("app.get") && jsContent.includes("tasks");
        const hasCreateTask = jsContent.includes("app.post") && jsContent.includes("tasks");
        const hasUpdateTask = jsContent.includes("app.put") || jsContent.includes("app.patch");
        const hasDeleteTask = jsContent.includes("app.delete") && jsContent.includes("tasks");

        if (hasGetTasks && hasCreateTask && hasUpdateTask && hasDeleteTask) {
            checks.push("✅ Backend: Complete task CRUD operations");
            backendScore += 15;
        } else {
            checks.push(`❌ Backend: Missing task CRUD (GET:${hasGetTasks}, POST:${hasCreateTask}, UPDATE:${hasUpdateTask}, DELETE:${hasDeleteTask})`);
        }

        // Database/MongoDB Tests (30 points total)
        let databaseScore = 0;

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Database: MongoDB connection configured");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing MongoDB connection");
        }

        if (jsContent.includes('mongoose.Schema') && (jsContent.includes('Task') || jsContent.includes('Todo'))) {
            checks.push("✅ Database: Task schema defined");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing task schema");
        }

        if (jsContent.includes('title') && jsContent.includes('completed')) {
            checks.push("✅ Database: Task schema has required fields");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing required task fields (title, completed)");
        }

        if (jsContent.includes('description') || jsContent.includes('priority') || jsContent.includes('dueDate')) {
            checks.push("✅ Database: Additional task properties");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing additional task properties");
        }

        // Frontend/React Tests (35 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        if (jsContent.includes('todo') || jsContent.includes('Todo') || jsContent.includes('task') || jsContent.includes('Task')) {
            checks.push("✅ Frontend: Todo-themed UI components");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing todo-themed components");
        }

        if (jsContent.includes('form') && jsContent.includes('input')) {
            checks.push("✅ Frontend: Task creation form");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing task creation form");
        }

        if (jsContent.includes('checkbox') || jsContent.includes('checked')) {
            checks.push("✅ Frontend: Task completion toggle");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing task completion checkbox");
        }

        if (jsContent.includes('map') && (jsContent.includes('task') || jsContent.includes('todo'))) {
            checks.push("✅ Frontend: Task list display");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing task list display");
        }

        // Advanced Todo Features
        if (jsContent.includes('filter') || jsContent.includes('completed === true') || jsContent.includes('completed === false')) {
            checks.push("✅ Feature: Task filtering by status");
        } else {
            checks.push("❌ Feature: Missing task filtering");
        }

        if (jsContent.includes('All') && jsContent.includes('Active') && jsContent.includes('Completed')) {
            checks.push("✅ Feature: Filter categories (All/Active/Completed)");
        } else {
            checks.push("❌ Feature: Missing filter categories");
        }

        if (jsContent.includes('length') && jsContent.includes('task')) {
            checks.push("✅ Feature: Task counter display");
        } else {
            checks.push("❌ Feature: Missing task counter");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 35);
        result.breakdown.database = Math.min(databaseScore, 30);
        result.breakdown.frontend = Math.min(frontendScore, 35);
        
        totalScore = result.breakdown.backend + result.breakdown.database + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Todo app complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing task management features, status toggles, and filtering`;

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
            topic: "MERN Todo Full Stack App (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Todo Full Stack App (Single File)");