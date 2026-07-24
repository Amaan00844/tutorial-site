// Test for Python File Organizer App
const testSuite = {
  name: "Python File Organizer",
  tests: [
    {
      name: "File Organization Structure",
      test: function (code) {
        const result = { passed: false, score: 0, details: [] };

        // Check if code exists and has minimum content
        if (!code || code.trim().length < 20) {
          result.details.push("❌ Code is too short or empty");
          return result;
        }

        let score = 0;

        // Check for required imports
        if (code.includes("import os")) {
          score += 20;
          result.details.push("✅ Imports os module");
        } else {
          result.details.push("❌ Missing 'import os'");
        }

        if (code.includes("import shutil") || code.includes("from shutil")) {
          score += 20;
          result.details.push("✅ Imports shutil module");
        } else {
          result.details.push("❌ Missing shutil import");
        }

        // Check for file extension handling
        if (
          code.includes("splitext") ||
          code.includes(".split('.')") ||
          code.includes('split(".")')
        ) {
          score += 15;
          result.details.push("✅ Handles file extensions");
        } else {
          result.details.push("❌ Missing file extension handling");
        }

        // Check for directory operations
        if (code.includes("makedirs") || code.includes("mkdir")) {
          score += 15;
          result.details.push("✅ Creates directories");
        } else {
          result.details.push("❌ Missing directory creation");
        }

        // Check for file operations
        if (code.includes("listdir") || code.includes("os.walk")) {
          score += 10;
          result.details.push("✅ Lists directory contents");
        } else {
          result.details.push("❌ Missing directory listing");
        }

        // Check for file moving/copying
        if (
          code.includes("move") ||
          code.includes("copy") ||
          code.includes("rename")
        ) {
          score += 10;
          result.details.push("✅ Moves/copies files");
        } else {
          result.details.push("❌ Missing file move/copy");
        }

        // Check for path handling
        if (code.includes("path.join") || code.includes("os.path")) {
          score += 10;
          result.details.push("✅ Uses proper path handling");
        } else {
          result.details.push("❌ Missing path handling");
        }

        result.score = score;
        result.passed = score >= 60;
        return result;
      },
    },
  ],
};

// Make test suite available in the browser
if (typeof window !== "undefined") {
  window.testSuite = testSuite;
}
