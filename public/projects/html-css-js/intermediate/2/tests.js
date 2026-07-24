// Test for Interactive Photo Gallery Project - Intermediate Level 2 (Single HTML File)
// Tests HTML structure, embedded CSS styling, and embedded JavaScript functionality

console.log("🧪 Testing: Interactive Photo Gallery Project (Single HTML File)");

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
        
        if (/<img\s/.test(htmlContent)) {
            const imgMatches = htmlContent.match(/<img\s/g);
            if (imgMatches && imgMatches.length >= 3) {
                checks.push("✅ HTML: Has multiple images (3+)");
                htmlScore += 15;
            } else {
                checks.push("❌ HTML: Not enough images (need 3+)");
            }
        } else {
            checks.push("❌ HTML: Missing images");
        }

        if (/(gallery|grid)/.test(htmlContent)) {
            checks.push("✅ HTML: Has gallery container");
            htmlScore += 15;
        } else {
            checks.push("❌ HTML: Missing gallery container");
        }

        // CSS Tests (40 points total)
        let cssScore = 0;

        if (cssContent && /(display\s*:\s*grid|grid-template)/.test(cssContent)) {
            checks.push("✅ CSS: Uses CSS Grid for layout");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing CSS Grid layout in <style> tags");
        }

        if (cssContent && /img.*:hover|:hover.*img/.test(cssContent)) {
            checks.push("✅ CSS: Images have hover effects");
            cssScore += 15;
        } else {
            checks.push("❌ CSS: Missing image hover effects in <style> tags");
        }

        if (cssContent && /transition/.test(cssContent)) {
            checks.push("✅ CSS: Has smooth transitions");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing smooth transitions in <style> tags");
        }

        // JavaScript Tests (30 points total)
        let jsScore = 0;

        if (jsContent && /modal/.test(jsContent)) {
            checks.push("✅ JS: Has modal functionality");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing modal functionality in <script> tags");
        }

        if (jsContent && /click/.test(jsContent)) {
            checks.push("✅ JS: Handles image click events");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing click event handling in <script> tags");
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
            ? `Excellent! Photo gallery with modal ready. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Add multiple images, grid layout, hover effects, transitions, and modal`;

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
            topic: "Interactive Photo Gallery Project (Single HTML File)",
            language: "html",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: Interactive Photo Gallery Project (Single HTML File)");