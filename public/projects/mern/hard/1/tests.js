// Test for MERN Hard 1 - Full Blog Platform (Single File)
// Tests advanced blog features, user authentication, comments, and admin capabilities

console.log("🧪 Testing: MERN Full Blog Platform (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            features: 0,
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

        // Backend/Core System Tests (35 points total)
        let backendScore = 0;
        
        if (jsContent.includes('express()') && jsContent.includes('app.listen')) {
            checks.push("✅ Backend: Express server setup");
            backendScore += 8;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Backend: MongoDB connection");
            backendScore += 5;
        } else {
            checks.push("❌ Backend: Missing MongoDB connection");
        }

        // Authentication System
        if (jsContent.includes('jwt') && jsContent.includes('bcrypt')) {
            checks.push("✅ Backend: Authentication system (JWT + bcrypt)");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing authentication (JWT/bcrypt)");
        }

        // API Routes
        const hasPostRoutes = jsContent.includes("'/api/posts'") || jsContent.includes('"/api/posts"');
        const hasUserRoutes = jsContent.includes("'/api/users'") || jsContent.includes('"/api/users"');
        const hasAuthRoutes = jsContent.includes("'/api/auth'") || jsContent.includes('"/api/auth"');

        if (hasPostRoutes && hasUserRoutes && hasAuthRoutes) {
            checks.push("✅ Backend: Complete API route structure");
            backendScore += 12;
        } else {
            checks.push(`❌ Backend: Missing API routes (Posts:${hasPostRoutes}, Users:${hasUserRoutes}, Auth:${hasAuthRoutes})`);
        }

        // Advanced Features Tests (35 points total)
        let featuresScore = 0;

        // User Management & Roles
        if (jsContent.includes('role') && (jsContent.includes('admin') || jsContent.includes('author'))) {
            checks.push("✅ Features: User roles and permissions");
            featuresScore += 8;
        } else {
            checks.push("❌ Features: Missing user roles system");
        }

        // Comments System
        if (jsContent.includes('Comment') && jsContent.includes('mongoose.Schema')) {
            checks.push("✅ Features: Comments system");
            featuresScore += 8;
        } else {
            checks.push("❌ Features: Missing comments system");
        }

        // Categories/Tags
        if (jsContent.includes('category') || jsContent.includes('tag')) {
            checks.push("✅ Features: Post categorization/tagging");
            featuresScore += 5;
        } else {
            checks.push("❌ Features: Missing post categorization");
        }

        // Rich Text Editor
        if (jsContent.includes('editor') || jsContent.includes('rich text') || jsContent.includes('markdown')) {
            checks.push("✅ Features: Rich text editing");
            featuresScore += 6;
        } else {
            checks.push("❌ Features: Missing rich text editor");
        }

        // Media Upload
        if (jsContent.includes('upload') || jsContent.includes('file') || jsContent.includes('image')) {
            checks.push("✅ Features: Media upload support");
            featuresScore += 4;
        } else {
            checks.push("❌ Features: Missing media upload");
        }

        // Search & SEO
        if (jsContent.includes('search') && jsContent.includes('slug')) {
            checks.push("✅ Features: Search and SEO optimization");
            featuresScore += 4;
        } else {
            checks.push("❌ Features: Missing search/SEO features");
        }

        // Frontend/UI Tests (30 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        // Dashboard/Admin Panel
        if (jsContent.includes('dashboard') || jsContent.includes('admin')) {
            checks.push("✅ Frontend: Admin dashboard");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing admin dashboard");
        }

        // User Profile Pages
        if (jsContent.includes('profile') && jsContent.includes('author')) {
            checks.push("✅ Frontend: User profile pages");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing user profiles");
        }

        // Navigation & Layout
        if (jsContent.includes('nav') || jsContent.includes('menu') || jsContent.includes('header')) {
            checks.push("✅ Frontend: Navigation system");
            frontendScore += 4;
        } else {
            checks.push("❌ Frontend: Missing navigation");
        }

        // Responsive Design
        if (jsContent.includes('@media') || jsContent.includes('responsive')) {
            checks.push("✅ Frontend: Responsive design");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing responsive design");
        }

        // Database Schema Complexity
        const hasUserSchema = jsContent.includes('User') && jsContent.includes('Schema');
        const hasPostSchema = jsContent.includes('Post') && jsContent.includes('Schema');
        const hasCommentSchema = jsContent.includes('Comment') && jsContent.includes('Schema');

        if (hasUserSchema && hasPostSchema && hasCommentSchema) {
            checks.push("✅ Database: Complete schema relationships");
        } else {
            checks.push(`❌ Database: Missing schemas (User:${hasUserSchema}, Post:${hasPostSchema}, Comment:${hasCommentSchema})`);
        }

        // Advanced Blog Features
        if (jsContent.includes('draft') || jsContent.includes('published')) {
            checks.push("✅ Advanced: Post draft/publish system");
        } else {
            checks.push("❌ Advanced: Missing draft system");
        }

        if (jsContent.includes('like') || jsContent.includes('favorite')) {
            checks.push("✅ Advanced: Post engagement (likes/favorites)");
        } else {
            checks.push("❌ Advanced: Missing post engagement");
        }

        if (jsContent.includes('pagination') && jsContent.includes('limit')) {
            checks.push("✅ Advanced: Content pagination");
        } else {
            checks.push("❌ Advanced: Missing pagination");
        }

        if (jsContent.includes('notification') || jsContent.includes('email')) {
            checks.push("✅ Advanced: Notification system");
        } else {
            checks.push("❌ Advanced: Missing notifications");
        }

        // Security Features
        if (jsContent.includes('sanitize') || jsContent.includes('xss')) {
            checks.push("✅ Security: XSS protection");
        } else {
            checks.push("❌ Security: Missing XSS protection");
        }

        if (jsContent.includes('rate limit') || jsContent.includes('throttle')) {
            checks.push("✅ Security: Rate limiting");
        } else {
            checks.push("❌ Security: Missing rate limiting");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 35);
        result.breakdown.features = Math.min(featuresScore, 35);
        result.breakdown.frontend = Math.min(frontendScore, 30);
        
        totalScore = result.breakdown.backend + result.breakdown.features + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Full blog platform complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing advanced features, user management, and admin capabilities`;

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
            topic: "MERN Full Blog Platform (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Full Blog Platform (Single File)");