# StackBlitz to Monaco Editor Migration Guide

This guide explains how to migrate from StackBlitz to Monaco Editor for your coding exercises platform.

## Overview

The migration replaces the paid StackBlitz platform with the free Monaco Editor while maintaining all existing functionality and adding enhanced features:

- ✅ **Cost-free**: No subscription fees or usage limits
- ✅ **Enhanced testing**: Advanced test runners with detailed scoring
- ✅ **Better performance**: Faster loading and execution
- ✅ **Multi-language support**: JavaScript, Python, HTML, CSS, and more
- ✅ **Detailed analytics**: Code quality metrics and comprehensive feedback

## Key Components

### 1. MonacoSandbox Component
**File**: `src/components/MonacoSandbox.jsx`

Replaces the StackBlitz sandbox with Monaco Editor functionality:
- Real-time code editing with syntax highlighting
- Integrated test execution
- Output console
- File management
- Keyboard shortcuts (Ctrl+S to save, Ctrl+Enter to run)

### 2. MonacoTestPlatform Component
**File**: `src/components/MonacoTestPlatform.jsx`

Replaces the TestPlatform component with Monaco Editor integration:
- Same UI and functionality as the original
- Compatible with existing modal components
- Enhanced test result handling

### 3. Enhanced Test Runners
**File**: `src/utils/testRunners.js`

Advanced test execution system supporting multiple languages:
- **JavaScriptTestRunner**: Enhanced JavaScript testing with syntax, structure, and functionality checks
- **PythonTestRunner**: Python code analysis and testing
- **HTMLTestRunner**: HTML structure and syntax validation
- **Factory function**: Automatic test runner selection based on language

## Migration Steps

### Step 1: Update Exercise Components

Replace your existing exercise components with Monaco Editor versions:

**Before (StackBlitz)**:
```jsx
import QuestionPlatform from "@/components/TestPlatform";
import sdk from "@stackblitz/sdk";

// StackBlitz-specific code
const handleOnChange = async (level) => {
    const container = document.getElementById("stackblitz-container");
    const vm = await sdk.connect(container);
    // ... StackBlitz operations
};
```

**After (Monaco Editor)**:
```jsx
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

// Monaco Editor-specific code
const handleOnChange = async (level) => {
    if (!window.monacoSandbox) return;
    await window.monacoSandbox.applyFsDiff({
        // ... Monaco operations
    });
};
```

### Step 2: Update File Structure

**Before**:
```jsx
const sandboxFiles = {
    'script.js': '',
    'package.json': `{
        "stackblitz": {
            "startCommand": "node tests.test && source ~/.jshrc"
        }
    }`
};
```

**After**:
```jsx
const sandboxFiles = {
    'script.js': `// Write your code here
console.log("Hello, World!");`,
    'tests.js': `// Test file will be loaded dynamically`,
    'package.json': `{
        "name": "exercise",
        "version": "1.0.0"
    }`
};
```

### Step 3: Update Test File Loading

**Before**:
```jsx
await vm.applyFsDiff({
    destroy: ['tests.test'],
    create: {
        'tests.test': testContent,
    },
});
```

**After**:
```jsx
await window.monacoSandbox.applyFsDiff({
    destroy: ['tests.js'],
    create: {
        'tests.js': testContent,
    },
});
```

## Example Implementations

### JavaScript Exercise Component
See: `src/components/Exercise/JavascriptMonaco.jsx`

### Python Exercise Component
See: `src/components/Exercise/PythonMonaco.jsx`

### Demo Page
See: `src/app/monaco-demo/page.jsx`

## Test File Compatibility

The Monaco Editor platform maintains compatibility with existing test files while adding enhanced features:

### Original Test Structure (Maintained)
```javascript
// Basic test structure remains the same
const syntaxPassed = await syntaxVerify();
const structurePassed = codeVerify();

// Results format compatible with existing modals
const resultData = {
    attempts,
    linesOfCode,
    executionTime,
    syntaxCheckPassed,
    structureCheckPassed,
    timestamp: new Date().toISOString()
};
```

### Enhanced Test Features (New)
```javascript
// Additional scoring and detailed feedback
const result = {
    ...originalFields,
    score: 85,                    // 0-100 score
    functionalityCheckPassed: true,
    errors: [],                   // Detailed error messages
    warnings: [],                 // Code quality warnings
    structureChecks: []           // Detailed check results
};
```

## Language Support

### JavaScript
- Full syntax checking
- Structure validation (variables, functions, loops)
- Code execution in sandboxed environment
- ESLint integration ready

### Python
- Syntax validation
- Structure checking (functions, classes, imports)
- Simulated execution for print statements
- Ready for Python interpreter integration

### HTML/CSS
- HTML structure validation
- CSS syntax checking
- DOM parsing and validation

## API Compatibility

The Monaco Editor platform maintains the same API as StackBlitz for seamless migration:

```javascript
// These methods work the same way
await sandbox.getFsSnapshot();
await sandbox.applyFsDiff(diff);

// Results are compatible with existing modals
<TestPassed result={result} />
<TestNotPassed />
```

## Performance Benefits

1. **Faster Loading**: No external iframe loading
2. **Instant Execution**: No container startup time
3. **Better Caching**: Local file management
4. **Reduced Latency**: No network dependencies

## Cost Savings

- **StackBlitz Pro**: $20/month per user
- **Monaco Editor**: Free and open source
- **Estimated Savings**: 100% of StackBlitz subscription costs

## Deployment

1. Remove StackBlitz SDK dependency:
   ```bash
   npm uninstall @stackblitz/sdk
   ```

2. Monaco Editor is already installed:
   ```bash
   # Already in package.json
   "@monaco-editor/react": "^4.7.0"
   "monaco-editor": "^0.52.2"
   ```

3. Update your exercise pages to use Monaco components

4. Test the migration with the demo page: `/monaco-demo`

## Troubleshooting

### Common Issues

1. **Global reference not available**: Ensure MonacoSandbox component is loaded before calling `window.monacoSandbox`

2. **Test files not loading**: Check file paths and ensure test files exist in the public directory

3. **Language detection**: Verify file extensions match the language detection logic

### Debug Mode

Enable debug logging by adding to your component:
```javascript
console.log("Monaco FS Snapshot:", await window.monacoSandbox.getFsSnapshot());
```

## Future Enhancements

The Monaco Editor platform is designed for easy extension:

1. **Real Python Execution**: Integration with Pyodide for actual Python execution
2. **More Languages**: Easy addition of new language support
3. **Advanced Testing**: Integration with testing frameworks
4. **Code Quality**: ESLint, Prettier, and other tools integration
5. **Collaboration**: Real-time collaborative editing

## Support

For issues or questions about the migration:
1. Check the demo page at `/monaco-demo`
2. Review the example components
3. Test with the enhanced test runners
4. Verify API compatibility with existing modals

The migration maintains full backward compatibility while providing significant improvements in functionality, performance, and cost-effectiveness.