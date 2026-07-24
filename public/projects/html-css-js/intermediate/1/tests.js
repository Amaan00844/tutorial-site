// Test for Responsive Landing Page Project - Intermediate Level 1 (Single HTML File)
// Tests HTML structure, embedded CSS styling, and embedded JavaScript functionality

console.log("🧪 Testing: Responsive Landing Page Project (Single HTML File)");

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

        // HTML Tests (30 points total)
        let htmlScore = 0;
        
        if (/<nav[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has navigation bar");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing navigation bar");
        }

        if (/hero|banner|jumbotron/.test(htmlContent)) {
            checks.push("✅ HTML: Has hero section");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing hero section");
        }

        if (/<form[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has contact form");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing contact form");
        }

        // CSS Tests (40 points total)
        let cssScore = 0;

        if (cssContent && /(display\s*:\s*flex|display\s*:\s*grid)/.test(cssContent)) {
            checks.push("✅ CSS: Uses Flexbox or Grid layout");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing Flexbox or Grid layout in <style> tags");
        }

        if (cssContent && /@media/.test(cssContent)) {
            checks.push("✅ CSS: Has media queries for responsiveness");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing media queries in <style> tags");
        }

        if (cssContent && /nav\s*\{|\.nav/.test(cssContent)) {
            checks.push("✅ CSS: Navigation styling present");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing navigation styling in <style> tags");
        }

        // JavaScript Tests (30 points total)
        let jsScore = 0;

        if (jsContent && /(validate|validation)/.test(jsContent)) {
            checks.push("✅ JS: Has form validation");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing form validation in <script> tags");
        }

        if (jsContent && /preventDefault/.test(jsContent)) {
            checks.push("✅ JS: Prevents default form submission");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing preventDefault for form handling in <script> tags");
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
        result.breakdown.html = Math.min(htmlScore, 30);
        result.breakdown.css = Math.min(cssScore, 40);
        result.breakdown.js = Math.min(jsScore, 30);
        
        totalScore = result.breakdown.html + result.breakdown.css + result.breakdown.js;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Outstanding! Responsive landing page complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Add navigation, hero section, form, Flexbox/Grid, media queries, and validation`;

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
            topic: "Responsive Landing Page Project (Single HTML File)",
            language: "html",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: Responsive Landing Page Project (Single HTML File)");