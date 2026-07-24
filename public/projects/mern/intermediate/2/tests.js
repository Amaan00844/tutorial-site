// Test for MERN Intermediate 2 - Real-Time Chat Application (Single File)
// Tests Socket.IO integration, real-time messaging, and chat interface

console.log("🧪 Testing: MERN Real-Time Chat Application (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            realtime: 0,
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

        // Backend/Express Tests (30 points total)
        let backendScore = 0;
        
        if (jsContent.includes('express()') && jsContent.includes('app.listen')) {
            checks.push("✅ Backend: Express server setup");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        if (jsContent.includes('http.createServer') || jsContent.includes('createServer')) {
            checks.push("✅ Backend: HTTP server for Socket.IO");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing HTTP server creation");
        }

        const hasMessageRoutes = jsContent.includes("'/api/messages'") || jsContent.includes('"/api/messages"');
        if (hasMessageRoutes) {
            checks.push("✅ Backend: Message API routes");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing message API routes");
        }

        // Real-Time/Socket.IO Tests (40 points total)
        let realtimeScore = 0;

        if (jsContent.includes('socket.io') || jsContent.includes('socketIo')) {
            checks.push("✅ Real-time: Socket.IO server setup");
            realtimeScore += 15;
        } else {
            checks.push("❌ Real-time: Missing Socket.IO server");
        }

        if (jsContent.includes('io.on') && jsContent.includes('connection')) {
            checks.push("✅ Real-time: Socket connection handling");
            realtimeScore += 10;
        } else {
            checks.push("❌ Real-time: Missing socket connection handler");
        }

        if (jsContent.includes('socket.on') && jsContent.includes('message')) {
            checks.push("✅ Real-time: Message event handling");
            realtimeScore += 10;
        } else {
            checks.push("❌ Real-time: Missing message event handlers");
        }

        if (jsContent.includes('io.emit') || jsContent.includes('socket.broadcast')) {
            checks.push("✅ Real-time: Message broadcasting");
            realtimeScore += 5;
        } else {
            checks.push("❌ Real-time: Missing message broadcasting");
        }

        // Database Tests
        if (jsContent.includes('mongoose.Schema') && jsContent.includes('Message')) {
            checks.push("✅ Database: Message schema defined");
        } else {
            checks.push("❌ Database: Missing Message schema");
        }

        if (jsContent.includes('content') && jsContent.includes('username') && jsContent.includes('timestamp')) {
            checks.push("✅ Database: Complete message structure");
        } else {
            checks.push("❌ Database: Missing message fields (content, username, timestamp)");
        }

        // Frontend/React Tests (30 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        if (jsContent.includes('useEffect') && jsContent.includes('socket')) {
            checks.push("✅ Frontend: Socket.IO client setup");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing Socket.IO client connection");
        }

        const hasChatUI = jsContent.includes('chat') || jsContent.includes('Chat') || jsContent.includes('message');
        if (hasChatUI) {
            checks.push("✅ Frontend: Chat interface components");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing chat interface");
        }

        if (jsContent.includes('input') && jsContent.includes('send')) {
            checks.push("✅ Frontend: Message input and send");
            frontendScore += 4;
        } else {
            checks.push("❌ Frontend: Missing message input form");
        }

        if (jsContent.includes('map') && jsContent.includes('message')) {
            checks.push("✅ Frontend: Message list display");
            frontendScore += 3;
        } else {
            checks.push("❌ Frontend: Missing message list rendering");
        }

        // Advanced Chat Features
        if (jsContent.includes('username') || jsContent.includes('user')) {
            checks.push("✅ Feature: User identification");
        } else {
            checks.push("❌ Feature: Missing user identification");
        }

        if (jsContent.includes('join') || jsContent.includes('leave')) {
            checks.push("✅ Feature: User join/leave events");
        } else {
            checks.push("❌ Feature: Missing join/leave notifications");
        }

        if (jsContent.includes('online') || jsContent.includes('connected')) {
            checks.push("✅ Feature: Online users tracking");
        } else {
            checks.push("❌ Feature: Missing online users feature");
        }

        if (jsContent.includes('room') || jsContent.includes('channel')) {
            checks.push("✅ Feature: Chat rooms/channels");
        } else {
            checks.push("❌ Feature: Missing chat rooms feature");
        }

        if (jsContent.includes('scrollIntoView') || jsContent.includes('scroll')) {
            checks.push("✅ Feature: Auto-scroll to latest message");
        } else {
            checks.push("❌ Feature: Missing auto-scroll functionality");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 30);
        result.breakdown.realtime = Math.min(realtimeScore, 40);
        result.breakdown.frontend = Math.min(frontendScore, 30);
        
        totalScore = result.breakdown.backend + result.breakdown.realtime + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Real-time chat complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing Socket.IO setup, real-time events, and chat interface`;

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
            topic: "MERN Real-Time Chat Application (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN Real-Time Chat Application (Single File)");