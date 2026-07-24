// Test for MERN Intermediate 1 - User Authentication System (Single File)
// Tests JWT authentication, bcrypt hashing, protected routes, and auth frontend

console.log("🧪 Testing: MERN User Authentication System (Single File)");

function runProjectTests(jsContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            backend: 0,
            security: 0,
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

        // Backend/Authentication Tests (35 points total)
        let backendScore = 0;
        
        if (jsContent.includes('express()') && jsContent.includes('app.listen')) {
            checks.push("✅ Backend: Express server setup");
            backendScore += 8;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        const hasAuthRoutes = jsContent.includes("'/api/auth'") || jsContent.includes('"/api/auth"');
        if (hasAuthRoutes) {
            checks.push("✅ Backend: Authentication routes defined");
            backendScore += 7;
        } else {
            checks.push("❌ Backend: Missing /api/auth routes");
        }

        const hasRegisterRoute = jsContent.includes('/register') || jsContent.includes('/signup');
        const hasLoginRoute = jsContent.includes('/login') || jsContent.includes('/signin');
        if (hasRegisterRoute && hasLoginRoute) {
            checks.push("✅ Backend: Register and login endpoints");
            backendScore += 10;
        } else {
            checks.push(`❌ Backend: Missing auth endpoints (Register:${hasRegisterRoute}, Login:${hasLoginRoute})`);
        }

        const hasProfileRoute = jsContent.includes('/profile') || jsContent.includes('/me');
        if (hasProfileRoute) {
            checks.push("✅ Backend: Protected profile route");
            backendScore += 5;
        } else {
            checks.push("❌ Backend: Missing protected profile route");
        }

        const hasMiddleware = jsContent.includes('middleware') || jsContent.includes('authenticateToken');
        if (hasMiddleware) {
            checks.push("✅ Backend: Authentication middleware");
            backendScore += 5;
        } else {
            checks.push("❌ Backend: Missing authentication middleware");
        }

        // Security/Encryption Tests (35 points total)
        let securityScore = 0;

        if (jsContent.includes('bcrypt') || jsContent.includes('bcryptjs')) {
            checks.push("✅ Security: bcrypt for password hashing");
            securityScore += 15;
        } else {
            checks.push("❌ Security: Missing bcrypt password hashing");
        }

        if (jsContent.includes('jwt') || jsContent.includes('jsonwebtoken')) {
            checks.push("✅ Security: JWT token implementation");
            securityScore += 15;
        } else {
            checks.push("❌ Security: Missing JWT implementation");
        }

        if (jsContent.includes('sign') && jsContent.includes('verify')) {
            checks.push("✅ Security: JWT sign and verify methods");
            securityScore += 5;
        } else {
            checks.push("❌ Security: Missing JWT sign/verify methods");
        }

        // Database Schema Tests
        if (jsContent.includes('mongoose.Schema') && jsContent.includes('User')) {
            checks.push("✅ Database: User schema defined");
        } else {
            checks.push("❌ Database: Missing User schema");
        }

        if (jsContent.includes('email') && jsContent.includes('password') && jsContent.includes('unique')) {
            checks.push("✅ Database: User schema with email/password");
        } else {
            checks.push("❌ Database: Missing email/password in User schema");
        }

        // Frontend/React Tests (30 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 10;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        const hasLoginForm = jsContent.includes('login') && jsContent.includes('form');
        const hasRegisterForm = jsContent.includes('register') || jsContent.includes('signup');
        if (hasLoginForm && hasRegisterForm) {
            checks.push("✅ Frontend: Login and register forms");
            frontendScore += 10;
        } else {
            checks.push(`❌ Frontend: Missing auth forms (Login:${hasLoginForm}, Register:${hasRegisterForm})`);
        }

        if (jsContent.includes('token') && jsContent.includes('localStorage')) {
            checks.push("✅ Frontend: Token storage management");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing token storage");
        }

        if (jsContent.includes('logout') || jsContent.includes('signout')) {
            checks.push("✅ Frontend: Logout functionality");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing logout functionality");
        }

        // Advanced Features
        if (jsContent.includes('dashboard') || jsContent.includes('profile')) {
            checks.push("✅ Feature: User dashboard/profile page");
        } else {
            checks.push("❌ Feature: Missing user dashboard");
        }

        if (jsContent.includes('Authorization') && jsContent.includes('Bearer')) {
            checks.push("✅ Feature: Bearer token authorization");
        } else {
            checks.push("❌ Feature: Missing Bearer token implementation");
        }

        if (jsContent.includes('salt') || jsContent.includes('genSalt')) {
            checks.push("✅ Security: Password salting implemented");
        } else {
            checks.push("❌ Security: Missing password salting");
        }

        // Calculate scores
        result.breakdown.backend = Math.min(backendScore, 35);
        result.breakdown.security = Math.min(securityScore, 35);
        result.breakdown.frontend = Math.min(frontendScore, 30);
        
        totalScore = result.breakdown.backend + result.breakdown.security + result.breakdown.frontend;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Authentication system complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing JWT implementation, bcrypt hashing, and auth forms`;

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
            topic: "MERN User Authentication System (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN User Authentication System (Single File)");