// Test for Interactive To-Do List Project - Basic Level 3 (Single HTML File)
// Tests HTML structure, embedded CSS styling, and embedded JavaScript functionality

console.log("🧪 Testing: Interactive To-Do List Project (Single HTML File)");

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
        
        if (/<ul[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has unordered list (ul)");
            htmlScore += 15;
        } else {
            checks.push("❌ HTML: Missing unordered list (ul)");
        }

        if (/<li[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has list items (li)");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing list items (li)");
        }

        if (/<button[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has buttons");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing buttons");
        }

        // CSS Tests (35 points total)
        let cssScore = 0;

        if (cssContent && /(ul|li)\s*\{[\s\S]*border/.test(cssContent)) {
            checks.push("✅ CSS: List items have borders");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing border styling for list items in <style> tags");
        }

        if (cssContent && /:hover/.test(cssContent)) {
            checks.push("✅ CSS: Has hover effects");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing hover effects in <style> tags");
        }

        if (cssContent && /button\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Button styling present");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing button styling in <style> tags");
        }

        // JavaScript Tests (30 points total)
        let jsScore = 0;

        if (jsContent && /createElement/.test(jsContent)) {
            checks.push("✅ JS: Creates new elements dynamically");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing dynamic element creation in <script> tags");
        }

        if (jsContent && /(appendChild|remove\(\)|removeChild)/.test(jsContent)) {
            checks.push("✅ JS: Adds/removes tasks dynamically");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing add/remove functionality in <script> tags");
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
            ? `Perfect! Interactive to-do list working. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Add ul/li structure, borders, hover effects, and dynamic add/remove`;

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
            topic: "Interactive To-Do List Project (Single HTML File)",
            language: "html",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: Interactive To-Do List Project (Single HTML File)");