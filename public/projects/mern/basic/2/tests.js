// Test for MERN Basic 2 - Blog System (Single File)
// Tests blog backend, post management, and React frontend

console.log("🧪 Testing: MERN Blog System (Single File)");

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

        const hasPostsRoutes = jsContent.includes("'/api/posts'") || jsContent.includes('"/api/posts"');
        if (hasPostsRoutes) {
            checks.push("✅ Backend: Blog posts API routes defined");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing /api/posts routes");
        }

        const hasGetPosts = jsContent.includes("app.get") && jsContent.includes("posts");
        const hasCreatePost = jsContent.includes("app.post") && jsContent.includes("posts");
        const hasUpdatePost = jsContent.includes("app.put") && jsContent.includes("posts");
        const hasDeletePost = jsContent.includes("app.delete") && jsContent.includes("posts");

        if (hasGetPosts && hasCreatePost && hasUpdatePost && hasDeletePost) {
            checks.push("✅ Backend: Complete blog CRUD operations");
            backendScore += 15;
        } else {
            checks.push(`❌ Backend: Missing blog CRUD (GET:${hasGetPosts}, POST:${hasCreatePost}, PUT:${hasUpdatePost}, DELETE:${hasDeletePost})`);
        }

        // Database/MongoDB Tests (30 points total)
        let databaseScore = 0;

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Database: MongoDB connection configured");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing MongoDB connection");
        }

        if (jsContent.includes('mongoose.Schema') && (jsContent.includes('Post') || jsContent.includes('Blog'))) {
            checks.push("✅ Database: Blog post schema defined");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing blog post schema");
        }

        if (jsContent.includes('title') && jsContent.includes('content') && jsContent.includes('author')) {
            checks.push("✅ Database: Post schema has required fields");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing required post fields (title, content, author)");
        }

        if (jsContent.includes('createdAt') || jsContent.includes('Date.now') || jsContent.includes('timestamps')) {
            checks.push("✅ Database: Timestamp tracking for posts");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing timestamp tracking");
        }

        // Frontend/React Tests (35 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        if (jsContent.includes('blog') || jsContent.includes('Blog') || jsContent.includes('post')) {
            checks.push("✅ Frontend: Blog-themed UI components");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing blog-themed components");
        }

        if (jsContent.includes('form') && (jsContent.includes('title') || jsContent.includes('content'))) {
            checks.push("✅ Frontend: Post creation form");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing post creation form");
        }

        if (jsContent.includes('map') && (jsContent.includes('post') || jsContent.includes('article'))) {
            checks.push("✅ Frontend: Post list display");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing post list display");
        }

        if (jsContent.includes('edit') || jsContent.includes('Edit')) {
            checks.push("✅ Frontend: Post editing functionality");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing post editing feature");
        }

        // Content Management Features
        if (jsContent.includes('textarea') || jsContent.includes('contentEditable')) {
            checks.push("✅ Content: Rich text input support");
        } else {
            checks.push("❌ Content: Missing text area for content");
        }

        if (jsContent.includes('delete') && jsContent.includes('confirm')) {
            checks.push("✅ Content: Safe post deletion with confirmation");
        } else {
            checks.push("❌ Content: Missing safe deletion confirmation");
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
            ? `Excellent! Blog system complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing blog features, post CRUD operations, and content management`;

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
            topic: "MERN Blog System (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Blog System (Single File)");