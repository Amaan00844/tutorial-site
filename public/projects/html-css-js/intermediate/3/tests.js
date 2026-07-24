// Test for Dynamic Data Table Project - Intermediate Level 3 (Single HTML File)
// Tests HTML structure, embedded CSS styling, and embedded JavaScript functionality

console.log("🧪 Testing: Dynamic Data Table Project (Single HTML File)");

function runProjectTests(htmlContent) {
    const result = { 
        passed: false, 
        score: 0, 
        message: "", 
        details: [],
        breakdown: {
            html: 0,
            css: 0,
            js: 0
        }
    };

    try {
        let totalScore = 0;
        const checks = [];

        if (!htmlContent) {
            result.message = "No HTML content provided";
            return result;
        }

        // Extract CSS content from <style> tags
        const styleMatches = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
        const cssContent = styleMatches ? styleMatches.join(' ') : '';

        // Extract JavaScript content from <script> tags
        const scriptMatches = htmlContent.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
        const jsContent = scriptMatches ? scriptMatches.join(' ') : '';

        console.log("Extracted CSS:", cssContent ? "Found" : "Not found");
        console.log("Extracted JS:", jsContent ? "Found" : "Not found");

        // HTML Tests (35 points total)
        let htmlScore = 0;
        
        if (/<table[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has table element");
            htmlScore += 15;
        } else {
            checks.push("❌ HTML: Missing table element");
        }

        if (/<th[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has table headers (th)");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing table headers (th)");
        }

        if (/<td[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has table data cells (td)");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing table data cells (td)");
        }

        // CSS Tests (35 points total)
        let cssScore = 0;

        if (cssContent && /table\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Table styling present");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing table styling in <style> tags");
        }

        if (cssContent && /(nth-child|odd|even)/.test(cssContent)) {
            checks.push("✅ CSS: Alternate row colors implemented");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing alternate row colors in <style> tags");
        }

        if (cssContent && /(th|td)\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Cell styling present");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing cell styling in <style> tags");
        }

        // JavaScript Tests (30 points total)
        let jsScore = 0;

        if (jsContent && /sort/.test(jsContent)) {
            checks.push("✅ JS: Has sorting functionality");
            jsScore += 20;
        } else {
            checks.push("❌ JS: Missing sorting functionality in <script> tags");
        }

        if (jsContent && /(age|number)/.test(jsContent)) {
            checks.push("✅ JS: Handles age/numeric sorting");
            jsScore += 10;
        } else {
            checks.push("❌ JS: Missing age/numeric sorting in <script> tags");
        }

        // Additional checks for single HTML file structure
        if (htmlContent.includes('<style>') || htmlContent.includes('<style ')) {
            checks.push("✅ Structure: Has embedded <style> tags");
        } else {
            checks.push("❌ Structure: Missing <style> tags for CSS");
        }

        if (htmlContent.includes('<script>') || htmlContent.includes('<script ')) {
            checks.push("✅ Structure: Has embedded <script> tags");
        } else {
            checks.push("❌ Structure: Missing <script> tags for JavaScript");
        }

        // Calculate scores
        result.breakdown.html = Math.min(htmlScore, 35);
        result.breakdown.css = Math.min(cssScore, 35);
        result.breakdown.js = Math.min(jsScore, 30);
        
        totalScore = result.breakdown.html + result.breakdown.css + result.breakdown.js;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Perfect! Sortable data table complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Add table structure (th/td), alternate row colors, and age sorting`;

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
            topic: "Dynamic Data Table Project (Single HTML File)",
            language: "html",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: Dynamic Data Table Project (Single HTML File)");