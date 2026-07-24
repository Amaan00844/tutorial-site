// Test for MERN Hard 3 - Task Management System (Single File)
// Tests project management, team collaboration, task assignment, and analytics dashboard

console.log("🧪 Testing: MERN Task Management System (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            management: 0,
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

        // Backend/Infrastructure Tests (30 points total)
        let backendScore = 0;
        
        if (jsContent.includes('express()') && jsContent.includes('app.listen')) {
            checks.push("✅ Backend: Express server setup");
            backendScore += 6;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Backend: MongoDB connection");
            backendScore += 4;
        } else {
            checks.push("❌ Backend: Missing MongoDB connection");
        }

        // Authentication & Authorization
        if (jsContent.includes('jwt') && jsContent.includes('auth')) {
            checks.push("✅ Backend: User authentication");
            backendScore += 6;
        } else {
            checks.push("❌ Backend: Missing authentication system");
        }

        // API Structure
        const hasProjectRoutes = jsContent.includes("'/api/projects'") || jsContent.includes('"/api/projects"');
        const hasTaskRoutes = jsContent.includes("'/api/tasks'") || jsContent.includes('"/api/tasks"');
        const hasTeamRoutes = jsContent.includes("'/api/teams'") || jsContent.includes('"/api/teams"');

        if (hasProjectRoutes && hasTaskRoutes && hasTeamRoutes) {
            checks.push("✅ Backend: Complete API structure");
            backendScore += 8;
        } else {
            checks.push(`❌ Backend: Missing API routes (Projects:${hasProjectRoutes}, Tasks:${hasTaskRoutes}, Teams:${hasTeamRoutes})`);
        }

        // Real-time Updates
        if (jsContent.includes('socket.io') || jsContent.includes('socketIo')) {
            checks.push("✅ Backend: Real-time collaboration support");
            backendScore += 6;
        } else {
            checks.push("❌ Backend: Missing real-time features");
        }

        // Management Features Tests (40 points total)
        let managementScore = 0;

        // Project Management
        if (jsContent.includes('Project') && jsContent.includes('Schema')) {
            checks.push("✅ Management: Project schema and management");
            managementScore += 10;
        } else {
            checks.push("❌ Management: Missing Project schema");
        }

        // Task Management with Advanced Features
        if (jsContent.includes('Task') && jsContent.includes('priority') && jsContent.includes('status')) {
            checks.push("✅ Management: Advanced task management");
            managementScore += 10;
        } else {
            checks.push("❌ Management: Missing advanced task features");
        }

        // Team Collaboration
        if (jsContent.includes('Team') && jsContent.includes('member')) {
            checks.push("✅ Management: Team collaboration system");
            managementScore += 8;
        } else {
            checks.push("❌ Management: Missing team collaboration");
        }

        // Assignment System
        if (jsContent.includes('assign') || jsContent.includes('assignee')) {
            checks.push("✅ Management: Task assignment system");
            managementScore += 6;
        } else {
            checks.push("❌ Management: Missing task assignment");
        }

        // Status Tracking
        if (jsContent.includes('todo') && jsContent.includes('progress') && jsContent.includes('completed')) {
            checks.push("✅ Management: Comprehensive status tracking");
            managementScore += 6;
        } else {
            checks.push("❌ Management: Missing status tracking system");
        }

        // Frontend/Dashboard Tests (30 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 6;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        // Dashboard Interface
        if (jsContent.includes('dashboard') || jsContent.includes('analytics')) {
            checks.push("✅ Frontend: Analytics dashboard");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing analytics dashboard");
        }

        // Project Views
        if (jsContent.includes('kanban') || jsContent.includes('board') || jsContent.includes('card')) {
            checks.push("✅ Frontend: Kanban board interface");
            frontendScore += 6;
        } else {
            checks.push("❌ Frontend: Missing Kanban board");
        }

        // Task Management UI
        if (jsContent.includes('drag') || jsContent.includes('drop') || jsContent.includes('sortable')) {
            checks.push("✅ Frontend: Drag-and-drop functionality");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing drag-and-drop");
        }

        // Team Management UI
        if (jsContent.includes('avatar') || jsContent.includes('profile') || jsContent.includes('member')) {
            checks.push("✅ Frontend: Team member management UI");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing team management UI");
        }

        // Database Schema Complexity
        const hasProjectSchema = jsContent.includes('Project') && jsContent.includes('Schema');
        const hasTaskSchema = jsContent.includes('Task') && jsContent.includes('Schema');
        const hasTeamSchema = jsContent.includes('Team') && jsContent.includes('Schema');
        const hasUserSchema = jsContent.includes('User') && jsContent.includes('Schema');

        if (hasProjectSchema && hasTaskSchema && hasTeamSchema && hasUserSchema) {
            checks.push("✅ Database: Complete management schemas");
        } else {
            checks.push(`❌ Database: Missing schemas (Project:${hasProjectSchema}, Task:${hasTaskSchema}, Team:${hasTeamSchema}, User:${hasUserSchema})`);
        }

        // Advanced Management Features
        if (jsContent.includes('deadline') || jsContent.includes('dueDate')) {
            checks.push("✅ Advanced: Deadline management");
        } else {
            checks.push("❌ Advanced: Missing deadline tracking");
        }

        if (jsContent.includes('milestone') || jsContent.includes('sprint')) {
            checks.push("✅ Advanced: Milestone/sprint planning");
        } else {
            checks.push("❌ Advanced: Missing milestone planning");
        }

        if (jsContent.includes('comment') || jsContent.includes('discussion')) {
            checks.push("✅ Advanced: Task discussions/comments");
        } else {
            checks.push("❌ Advanced: Missing task discussions");
        }

        // Analytics Features
        if (jsContent.includes('chart') || jsContent.includes('graph') || jsContent.includes('Chart')) {
            checks.push("✅ Analytics: Data visualization");
        } else {
            checks.push("❌ Analytics: Missing data visualization");
        }

        if (jsContent.includes('report') || jsContent.includes('statistics')) {
            checks.push("✅ Analytics: Progress reporting");
        } else {
            checks.push("❌ Analytics: Missing progress reports");
        }

        if (jsContent.includes('burndown') || jsContent.includes('velocity') || jsContent.includes('metrics')) {
            checks.push("✅ Analytics: Advanced project metrics");
        } else {
            checks.push("❌ Analytics: Missing project metrics");
        }

        // Collaboration Features
        if (jsContent.includes('notification') && jsContent.includes('assignment')) {
            checks.push("✅ Collaboration: Assignment notifications");
        } else {
            checks.push("❌ Collaboration: Missing assignment notifications");
        }

        if (jsContent.includes('mention') || jsContent.includes('@')) {
            checks.push("✅ Collaboration: User mentions");
        } else {
            checks.push("❌ Collaboration: Missing user mentions");
        }

        if (jsContent.includes('activity') || jsContent.includes('history') || jsContent.includes('log')) {
            checks.push("✅ Collaboration: Activity tracking");
        } else {
            checks.push("❌ Collaboration: Missing activity tracking");
        }

        // Time Management
        if (jsContent.includes('time') && (jsContent.includes('track') || jsContent.includes('log'))) {
            checks.push("✅ Time: Time tracking functionality");
        } else {
            checks.push("❌ Time: Missing time tracking");
        }

        if (jsContent.includes('estimate') || jsContent.includes('effort')) {
            checks.push("✅ Time: Task estimation");
        } else {
            checks.push("❌ Time: Missing task estimation");
        }

        // Permission System
        if (jsContent.includes('permission') || jsContent.includes('role') || jsContent.includes('access')) {
            checks.push("✅ Security: Permission system");
        } else {
            checks.push("❌ Security: Missing permission controls");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 30);
        result.breakdown.management = Math.min(managementScore, 40);
        result.breakdown.frontend = Math.min(frontendScore, 30);
        
        totalScore = result.breakdown.backend + result.breakdown.management + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Task management system complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing project management, team collaboration, and analytics features`;

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
            topic: "MERN Task Management System (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Task Management System (Single File)");