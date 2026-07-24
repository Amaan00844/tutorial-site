// Test for MERN Intermediate 3 - E-Commerce Products System (Single File)
// Tests product management, search/filter functionality, and shopping interface

console.log("🧪 Testing: MERN E-Commerce Products System (Single File)");

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
            backendScore += 8;
        } else {
            checks.push("❌ Backend: Missing Express server setup");
        }

        const hasProductRoutes = jsContent.includes("'/api/products'") || jsContent.includes('"/api/products"');
        if (hasProductRoutes) {
            checks.push("✅ Backend: Product API routes defined");
            backendScore += 10;
        } else {
            checks.push("❌ Backend: Missing /api/products routes");
        }

        const hasGetProducts = jsContent.includes("app.get") && jsContent.includes("products");
        const hasCreateProduct = jsContent.includes("app.post") && jsContent.includes("products");
        const hasUpdateProduct = jsContent.includes("app.put") && jsContent.includes("products");
        const hasDeleteProduct = jsContent.includes("app.delete") && jsContent.includes("products");

        if (hasGetProducts && hasCreateProduct && hasUpdateProduct && hasDeleteProduct) {
            checks.push("✅ Backend: Complete product CRUD operations");
            backendScore += 12;
        } else {
            checks.push(`❌ Backend: Missing product CRUD (GET:${hasGetProducts}, POST:${hasCreateProduct}, PUT:${hasUpdateProduct}, DELETE:${hasDeleteProduct})`);
        }

        if (jsContent.includes('search') || jsContent.includes('query')) {
            checks.push("✅ Backend: Search functionality");
            backendScore += 5;
        } else {
            checks.push("❌ Backend: Missing search endpoint");
        }

        // Database/MongoDB Tests (30 points total)
        let databaseScore = 0;

        if (jsContent.includes('mongoose.connect')) {
            checks.push("✅ Database: MongoDB connection configured");
            databaseScore += 8;
        } else {
            checks.push("❌ Database: Missing MongoDB connection");
        }

        if (jsContent.includes('mongoose.Schema') && jsContent.includes('Product')) {
            checks.push("✅ Database: Product schema defined");
            databaseScore += 10;
        } else {
            checks.push("❌ Database: Missing Product schema");
        }

        if (jsContent.includes('name') && jsContent.includes('price') && jsContent.includes('description')) {
            checks.push("✅ Database: Essential product fields");
            databaseScore += 7;
        } else {
            checks.push("❌ Database: Missing essential product fields (name, price, description)");
        }

        if (jsContent.includes('category') || jsContent.includes('brand')) {
            checks.push("✅ Database: Product categorization");
            databaseScore += 5;
        } else {
            checks.push("❌ Database: Missing product categorization");
        }

        // Frontend/React Tests (35 points total)
        let frontendScore = 0;

        if (jsContent.includes('React') && jsContent.includes('useState')) {
            checks.push("✅ Frontend: React components with hooks");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing React components or hooks");
        }

        const hasProductCard = jsContent.includes('product') && (jsContent.includes('card') || jsContent.includes('item'));
        if (hasProductCard) {
            checks.push("✅ Frontend: Product card components");
            frontendScore += 8;
        } else {
            checks.push("❌ Frontend: Missing product card display");
        }

        if (jsContent.includes('map') && jsContent.includes('product')) {
            checks.push("✅ Frontend: Product list rendering");
            frontendScore += 5;
        } else {
            checks.push("❌ Frontend: Missing product list display");
        }

        const hasProductForm = jsContent.includes('form') && (jsContent.includes('name') || jsContent.includes('price'));
        if (hasProductForm) {
            checks.push("✅ Frontend: Product creation form");
            frontendScore += 7;
        } else {
            checks.push("❌ Frontend: Missing product creation form");
        }

        if (jsContent.includes('search') || jsContent.includes('filter')) {
            checks.push("✅ Frontend: Search/filter interface");
            frontendScore += 7;
        } else {
            checks.push("❌ Frontend: Missing search/filter functionality");
        }

        // E-Commerce Features
        if (jsContent.includes('$') || jsContent.includes('price') || jsContent.includes('currency')) {
            checks.push("✅ Feature: Price display formatting");
        } else {
            checks.push("❌ Feature: Missing price formatting");
        }

        if (jsContent.includes('image') || jsContent.includes('photo') || jsContent.includes('img')) {
            checks.push("✅ Feature: Product image support");
        } else {
            checks.push("❌ Feature: Missing product images");
        }

        if (jsContent.includes('stock') || jsContent.includes('quantity') || jsContent.includes('inventory')) {
            checks.push("✅ Feature: Inventory management");
        } else {
            checks.push("❌ Feature: Missing inventory tracking");
        }

        if (jsContent.includes('cart') || jsContent.includes('add to cart') || jsContent.includes('shopping')) {
            checks.push("✅ Feature: Shopping cart functionality");
        } else {
            checks.push("❌ Feature: Missing shopping cart");
        }

        if (jsContent.includes('rating') || jsContent.includes('review') || jsContent.includes('stars')) {
            checks.push("✅ Feature: Product ratings/reviews");
        } else {
            checks.push("❌ Feature: Missing product ratings");
        }

        // Advanced Features
        if (jsContent.includes('sort') || jsContent.includes('order by')) {
            checks.push("✅ Advanced: Product sorting");
        } else {
            checks.push("❌ Advanced: Missing product sorting");
        }

        if (jsContent.includes('pagination') || jsContent.includes('limit') || jsContent.includes('skip')) {
            checks.push("✅ Advanced: Pagination support");
        } else {
            checks.push("❌ Advanced: Missing pagination");
        }

        if (jsContent.includes('responsive') || jsContent.includes('@media') || jsContent.includes('grid')) {
            checks.push("✅ Advanced: Responsive product grid");
        } else {
            checks.push("❌ Advanced: Missing responsive design");
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
            ? `Excellent! E-commerce system complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Complete missing product management, search functionality, and shopping features`;

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
            topic: "MERN E-Commerce Products System (Single File)",
            language: "javascript",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: MERN E-Commerce Products System (Single File)");