// Test for Personal Portfolio Project - Basic Level 1 (Single HTML File)
// Tests HTML structure, embedded CSS styling, and embedded JavaScript functionality

console.log("🧪 Testing: Personal Portfolio Project (Single HTML File)");

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

        // HTML Tests (40 points total)
        let htmlScore = 0;
        
        if (htmlContent.includes('<!DOCTYPE html>')) {
            checks.push("✅ HTML: Has DOCTYPE declaration");
            htmlScore += 5;
        } else {
            checks.push("❌ HTML: Missing DOCTYPE declaration");
        }

        if (/<header[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has header element");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing header element");
        }

        if (/<main[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has main element");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing main element");
        }

        if (/<footer[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has footer element");
            htmlScore += 10;
        } else {
            checks.push("❌ HTML: Missing footer element");
        }

        if (/<h1[\s>]/.test(htmlContent)) {
            checks.push("✅ HTML: Has h1 heading");
            htmlScore += 5;
        } else {
            checks.push("❌ HTML: Missing h1 heading");
        }

        // CSS Tests (30 points total)
        let cssScore = 0;

        if (cssContent && /body\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Has body styling");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing body styling in <style> tags");
        }

        if (cssContent && /header\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Has header styling");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing header styling in <style> tags");
        }

        if (cssContent && /footer\s*\{/.test(cssContent)) {
            checks.push("✅ CSS: Has footer styling");
            cssScore += 10;
        } else {
            checks.push("❌ CSS: Missing footer styling in <style> tags");
        }

        // JavaScript Tests (30 points total)
        let jsScore = 0;

        if (jsContent && /addEventListener/.test(jsContent)) {
            checks.push("✅ JS: Uses event listeners");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing event listeners in <script> tags");
        }

        if (jsContent && /alert\s*\(/.test(jsContent)) {
            checks.push("✅ JS: Has alert functionality");
            jsScore += 15;
        } else {
            checks.push("❌ JS: Missing alert functionality in <script> tags");
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
        result.breakdown.html = Math.min(htmlScore, 40);
        result.breakdown.css = Math.min(cssScore, 30);
        result.breakdown.js = Math.min(jsScore, 30);
        
        totalScore = result.breakdown.html + result.breakdown.css + result.breakdown.js;
        
        result.details = checks;
        result.score = Math.min(totalScore, 100);
        result.passed = result.score >= 70;
        result.message = result.passed 
            ? `Excellent! Portfolio complete. Score: ${result.score}/100` 
            : `Score: ${result.score}/100 - Add missing CSS in <style> tags and JS in <script> tags`;

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
            topic: "Personal Portfolio Project (Single HTML File)",
            language: "html",
            type: "project",
            fileStructure: "single"
        }
    };
}

console.log("✅ Test ready for: Personal Portfolio Project (Single HTML File)");