// Test for Python Web Scraper App (intermediate/1)
const testSuite = {
    name: "Python Web Scraper",
    tests: [
        {
            name: "Web Scraping Implementation",
            test: function(code) {
                const result = { passed: false, score: 0, details: [] };
                
                // Check if code exists and has minimum content
                if (!code || code.trim().length < 30) {
                    result.details.push("❌ Code is too short or empty");
                    return result;
                }

                let score = 0;
                
                // Check for requests import
                if (code.includes("import requests") || code.includes("from requests")) {
                    score += 25;
                    result.details.push("✅ Imports requests module");
                } else {
                    result.details.push("❌ Missing 'import requests'");
                }

                // Check for BeautifulSoup import
                if (code.includes("BeautifulSoup") || code.includes("from bs4")) {
                    score += 25;
                    result.details.push("✅ Imports BeautifulSoup");
                } else {
                    result.details.push("❌ Missing BeautifulSoup import");
                }

                // Check for HTTP GET request
                if (code.includes("requests.get") || code.includes(".get(")) {
                    score += 20;
                    result.details.push("✅ Makes HTTP GET requests");
                } else {
                    result.details.push("❌ Missing HTTP GET request");
                }

                // Check for HTML parsing
                if (code.includes("BeautifulSoup(") || code.includes("soup =")) {
                    score += 15;
                    result.details.push("✅ Parses HTML content");
                } else {
                    result.details.push("❌ Missing HTML parsing");
                }

                // Check for data extraction methods
                if (code.includes("find(") || code.includes("find_all(") || code.includes("select(")) {
                    score += 10;
                    result.details.push("✅ Extracts data from HTML");
                } else {
                    result.details.push("❌ Missing data extraction");
                }

                // Check for CSV or file output
                if (code.includes("csv") || code.includes("write") || code.includes("open(") || code.includes("to_csv")) {
                    score += 5;
                    result.details.push("✅ Saves data to file");
                } else {
                    result.details.push("❌ Missing file output");
                }

                result.score = score;
                result.passed = score >= 60;
                return result;
            }
        }
    ]
};

// Make test suite available globally
window.testSuite = testSuite;