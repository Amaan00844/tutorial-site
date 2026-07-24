// Test for MERN Hard 2 - Social Media Dashboard (Single File)
// Tests social features, real-time notifications, file uploads, and user interactions

console.log("🧪 Testing: MERN Social Media Dashboard (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            social: 0,
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

        // Real-time Infrastructure
        if (jsContent.includes('socket.io') || jsContent.includes('socketIo')) {
            checks.push("✅ Backend: Socket.IO for real-time features");
            backendScore += 8;
        } else {
            checks.push("❌ Backend: Missing Socket.IO setup");
        }

        // Authentication
        if (jsContent.includes('jwt') && jsContent.includes('auth')) {
            checks.push("✅ Backend: User authentication system");
            backendScore += 6;
        } else {
            checks.push("❌ Backend: Missing authentication system");
        }

        // File Upload Support
        if (jsContent.includes('multer') || jsContent.includes('upload') || jsContent.includes('file')) {
            checks.push("✅ Backend: File upload capability");
            backendScore += 6;
        } else {
            checks.push("❌ Backend: Missing file upload support");
        }

        // Social Features Tests (40 points total)
        let socialScore = 0;

        // User Profiles
        if (jsContent.includes('Profile') && jsContent.includes('Schema')) {
            checks.push("✅ Social: User profile system");
            socialScore += 8;
        } else {
            checks.push("❌ Social: Missing user profiles");
        }

        // Posts and Feed
        if (jsContent.includes('Post') && jsContent.includes('feed')) {
            checks.push("✅ Social: Post creation and feed");
            socialScore += 8;
        } else {
            checks.push("❌ Social: Missing post/feed system");
        }

        // Like System
        if (jsContent.includes('like') || jsContent.includes('Like')) {
            checks.push("✅ Social: Like/reaction system");
            socialScore += 6;
        } else {
            checks.push("❌ Social: Missing like system");
        }

        // Comment System
        if (jsContent.includes('comment') || jsContent.includes('Comment')) {
            checks.push("✅ Social: Comment system");
            socialScore += 6;
        } else {
            checks.push("❌ Social: Missing comment system");
        }

        // Follow/Friend System
        if (jsContent.includes('follow') || jsContent.includes('friend')) {
            checks.push("✅ Social: Follow/friend system");
            socialScore += 8;
        } else {
            checks.push("❌ Social: Missing follow/friend functionality");
        }

        // Notifications
        if (jsContent.includes('notification') || jsContent.includes('Notification')) {
            checks.push("✅ Social: Notification system");
            socialScore += 4;
        } else {
            checks.push("❌ Social: Missing notifications");
        }

        // Frontend/UI Tests (30 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 6;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        // Dashboard Layout
        if (jsContent.includes('dashboard') || jsContent.includes('sidebar')) {
            checks.push("✅ Frontend: Dashboard layout");
            frontendScore += 6;
        } else {
            checks.push("❌ Frontend: Missing dashboard layout");
        }

        // Activity Feed
        if (jsContent.includes('feed') && jsContent.includes('map')) {
            checks.push("✅ Frontend: Activity feed display");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing activity feed");
        }

        // User Interaction Components
        if (jsContent.includes('like') && jsContent.includes('button')) {
            checks.push("✅ Frontend: Interactive like buttons");
            frontendScore += 4;
        } else {
            checks.push("❌ Frontend: Missing like interactions");
        }

        // Real-time Updates
        if (jsContent.includes('useEffect') && jsContent.includes('socket')) {
            checks.push("✅ Frontend: Real-time updates integration");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing real-time updates");
        }

        // Image/Media Display
        if (jsContent.includes('image') || jsContent.includes('img') || jsContent.includes('media')) {
            checks.push("✅ Frontend: Media display components");
            frontendScore += 4;
        } else {
            checks.push("❌ Frontend: Missing media display");
        }

        // Database Schema Complexity
        const hasUserSchema = jsContent.includes('User') && jsContent.includes('Schema');
        const hasPostSchema = jsContent.includes('Post') && jsContent.includes('Schema');
        const hasNotificationSchema = jsContent.includes('Notification') && jsContent.includes('Schema');

        if (hasUserSchema && hasPostSchema && hasNotificationSchema) {
            checks.push("✅ Database: Complete social media schemas");
        } else {
            checks.push(`❌ Database: Missing schemas (User:${hasUserSchema}, Post:${hasPostSchema}, Notification:${hasNotificationSchema})`);
        }

        // Advanced Social Features
        if (jsContent.includes('story') || jsContent.includes('Story')) {
            checks.push("✅ Advanced: Stories/temporary content");
        } else {
            checks.push("❌ Advanced: Missing stories feature");
        }

        if (jsContent.includes('message') || jsContent.includes('chat') || jsContent.includes('dm')) {
            checks.push("✅ Advanced: Direct messaging");
        } else {
            checks.push("❌ Advanced: Missing direct messaging");
        }

        if (jsContent.includes('group') || jsContent.includes('community')) {
            checks.push("✅ Advanced: Groups/communities");
        } else {
            checks.push("❌ Advanced: Missing groups feature");
        }

        // Real-time Features
        if (jsContent.includes('io.emit') && jsContent.includes('notification')) {
            checks.push("✅ Real-time: Live notifications");
        } else {
            checks.push("❌ Real-time: Missing live notifications");
        }

        if (jsContent.includes('online') || jsContent.includes('status')) {
            checks.push("✅ Real-time: User online status");
        } else {
            checks.push("❌ Real-time: Missing online status");
        }

        if (jsContent.includes('typing') || jsContent.includes('activity')) {
            checks.push("✅ Real-time: Activity indicators");
        } else {
            checks.push("❌ Real-time: Missing activity indicators");
        }

        // Media & Content Features
        if (jsContent.includes('hashtag') || jsContent.includes('#')) {
            checks.push("✅ Content: Hashtag support");
        } else {
            checks.push("❌ Content: Missing hashtag system");
        }

        if (jsContent.includes('mention') || jsContent.includes('@')) {
            checks.push("✅ Content: User mentions");
        } else {
            checks.push("❌ Content: Missing user mentions");
        }

        if (jsContent.includes('share') || jsContent.includes('repost')) {
            checks.push("✅ Content: Content sharing/reposting");
        } else {
            checks.push("❌ Content: Missing sharing features");
        }

        // Privacy & Security
        if (jsContent.includes('private') || jsContent.includes('public')) {
            checks.push("✅ Privacy: Content visibility controls");
        } else {
            checks.push("❌ Privacy: Missing privacy controls");
        }

        if (jsContent.includes('block') || jsContent.includes('report')) {
            checks.push("✅ Safety: User blocking/reporting");
        } else {
            checks.push("❌ Safety: Missing safety features");
        }

        // Performance Features
        if (jsContent.includes('pagination') || jsContent.includes('infinite scroll')) {
            checks.push("✅ Performance: Content pagination/infinite scroll");
        } else {
            checks.push("❌ Performance: Missing content pagination");
        }

        if (jsContent.includes('lazy') || jsContent.includes('optimize')) {
            checks.push("✅ Performance: Lazy loading optimization");
        } else {
            checks.push("❌ Performance: Missing optimization features");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 30);
        result.breakdown.social = Math.min(socialScore, 40);
        result.breakdown.frontend = Math.min(frontendScore, 30);
        
        totalScore = result.breakdown.backend + result.breakdown.social + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Social media dashboard complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing social features, real-time notifications, and user interactions`;

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
            topic: "MERN Social Media Dashboard (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Social Media Dashboard (Single File)");