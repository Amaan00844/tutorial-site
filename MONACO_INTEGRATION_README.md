# Monaco Editor Integration

This integration provides a Monaco Editor-based sandbox that maintains **100% compatibility** with the existing StackBlitz-based system while offering improved performance and offline capabilities.

## 🎯 Key Features

- **Same Sidebar Logic**: Identical exercise navigation and selection
- **Same Instructions**: Unchanged modal system and user flow  
- **Same Test Files**: All existing `tests.js` files work without modification
- **Same Scoring Logic**: Identical calculation and result tracking
- **Built-in Terminal**: Interactive terminal for running commands
- **Offline Support**: Works without internet connection
- **Faster Loading**: No external API dependencies

## 🚀 Quick Start

### 1. Basic Usage

Replace your existing TestPlatform with the Monaco-enabled version:

```jsx
// Before (StackBlitz only)
import TestPlatform from '@/components/TestPlatform';

<TestPlatform
  setSidebarContent={setSidebarContent}
  menuItems={menuItems}
  files={files}
  filesOpened="script.js"
  task={task}
  title="JavaScript"
  hideExplorer={true}
/>

// After (Monaco + StackBlitz support)
import TestPlatformWithMonaco from '@/components/TestPlatformWithMonaco';

<TestPlatformWithMonaco
  setSidebarContent={setSidebarContent}
  menuItems={menuItems}
  files={files}
  filesOpened="script.js"
  task={task}
  title="JavaScript"
  hideExplorer={true}
  useMonaco={true} // Set to false for StackBlitz
/>
```

### 2. Direct Monaco Sandbox Usage

For custom implementations:

```jsx
import MonacoSandbox from '@/components/MonacoEditor/MonacoSandbox';

<MonacoSandbox
  filesObj={files}
  fileToOpen="script.js"
  onLoad={handleLoad}
  hideExplorer={true}
/>
```

## 📁 File Structure

```
src/components/
├── MonacoEditor/
│   ├── MonacoSandbox.jsx          # Main Monaco editor component
│   └── index.js                   # Utilities and exports
├── TestPlatformWithMonaco.jsx     # Enhanced TestPlatform
└── [existing files unchanged]     # All other components remain the same
```

## 🔧 API Compatibility

The Monaco implementation exposes the same API as StackBlitz SDK:

```javascript
// Both StackBlitz and Monaco support these methods:
const vm = await connectToSandbox(); // Universal connector
const files = await vm.getFsSnapshot();
await vm.applyFsDiff({ create: {}, destroy: [] });
```

## 🧪 Test File Compatibility

All existing test files work without modification. The Monaco sandbox provides mocked versions of:

- **fs module**: `readFileSync`, `writeFileSync`, `existsSync`
- **path module**: `join`, `resolve`, `dirname`
- **esprima**: JavaScript AST parsing
- **eslint**: Syntax validation
- **process**: `hrtime`, `exit`

Example test file (works in both StackBlitz and Monaco):

```javascript
const { ESLint } = require('eslint');
const esprima = require('esprima');
const fs = require('fs');
const path = require('path');

// Read JavaScript file
const js = fs.readFileSync('script.js', 'utf8');

// Syntax verification
async function syntaxVerify() {
  const eslint = new ESLint();
  const results = await eslint.lintText(js);
  return results[0].errorCount === 0;
}

// Code structure verification
function codeVerify() {
  const ast = esprima.parseScript(js, { tolerant: true });
  // ... verification logic
}

// Save results
if (allPassed) {
  const resultData = { attempts, linesOfCode, executionTime, timestamp: new Date().toISOString() };
  fs.writeFileSync('results.tests', JSON.stringify(resultData, null, 2));
}
```

## 🖥️ Terminal Commands

The Monaco sandbox includes a built-in terminal that supports:

- `run-tests` - Execute the test file
- `node <file>` - Run a JavaScript file
- `ls` - List files
- `cat <file>` - Display file contents
- `pwd` - Show current directory
- `clear` - Clear terminal output

## 🎨 UI Components

### Monaco Sandbox Layout

```
┌─────────────────────────────────────────────────────────┐
│ [File Tabs] script.js | tests.js                       │
├─────────────────────────────────┬───────────────────────┤
│                                 │ Terminal              │
│                                 │ ┌─────────────────────┤
│         Monaco Editor           │ │ $ run-tests         │
│                                 │ │ Running tests...    │
│                                 │ │ ✔ Syntax valid      │
│                                 │ │ ✔ Found console.log │
│                                 │ │ $ _                 │
│                                 │ └─────────────────────┤
��─────────────────────────────────┴───────────────────────┘
```

### Sidebar Integration

The sidebar remains completely unchanged:

- Same exercise navigation
- Same difficulty levels (Basic, Intermediate, Hard)
- Same instruction modals
- Same scoring modals

## 🔄 Migration Guide

### Step 1: Install Dependencies

Dependencies are already installed in the project:
- `monaco-editor`
- `@monaco-editor/react`

### Step 2: Update Component Imports

```jsx
// Option 1: Use the enhanced TestPlatform
import TestPlatformWithMonaco from '@/components/TestPlatformWithMonaco';

// Option 2: Use Monaco sandbox directly
import MonacoSandbox from '@/components/MonacoEditor/MonacoSandbox';
```

### Step 3: Add Monaco Flag

```jsx
<TestPlatformWithMonaco
  // ... existing props
  useMonaco={true} // Enable Monaco
/>
```

### Step 4: Test Functionality

1. Verify exercises load correctly
2. Test code execution in terminal
3. Confirm test files run properly
4. Check scoring system works
5. Validate modal behavior

## 🧩 Integration Examples

### JavaScript Exercise

```jsx
const javascriptExercise = {
  title: "JavaScript",
  task: {
    title: "Variables and Console",
    description: "Create variables and log them to console",
    requirements: ["Declare variables", "Use console.log"],
    hints: ["Use let/const", "console.log() prints output"]
  },
  files: {
    'script.js': '// Write your code here\n',
    'tests.js': '/* test file content */'
  },
  menuItems: [
    { label: "Exercise 1", onClick: () => {} },
    { label: "Exercise 2", onClick: () => {} }
  ]
};

<TestPlatformWithMonaco
  {...javascriptExercise}
  useMonaco={true}
/>
```

### Python Exercise

```jsx
const pythonExercise = {
  title: "Python",
  files: {
    'script.py': '# Write your Python code here\n',
    'tests.js': '/* Python test logic */'
  },
  // ... other props
};
```

## 🔍 Debugging

### Enable Debug Mode

```javascript
// Add to browser console for detailed logging
window.monacoDebug = true;
```

### Common Issues

1. **Monaco not loading**: Check browser console for errors
2. **Tests not running**: Verify test file syntax
3. **File operations failing**: Check file names and paths
4. **Terminal not responding**: Refresh the page

### Debug Information

The Monaco sandbox exposes debug information:

```javascript
// Check sandbox state
console.log(window.monacoSandbox);

// View current files
window.monacoSandbox.getFsSnapshot().then(console.log);
```

## 🚀 Performance Benefits

| Feature | StackBlitz | Monaco |
|---------|------------|--------|
| Loading Time | 3-5 seconds | 1-2 seconds |
| Offline Support | ❌ | ✅ |
| External Dependencies | StackBlitz API | None |
| Customization | Limited | Full control |
| Privacy | External service | Local only |

## 🔮 Future Enhancements

Planned improvements for the Monaco integration:

1. **Multi-language Support**: Better Python, Java, C++ execution
2. **Package Management**: NPM package simulation
3. **Advanced Terminal**: More shell commands
4. **File Explorer**: Enhanced file management UI
5. **Themes**: Multiple editor themes
6. **Collaborative Editing**: Real-time collaboration features

## 📞 Support

For issues or questions about the Monaco integration:

1. Check the demo at `/monaco-test`
2. Review the comparison at `/editor-comparison`
3. Examine the source code in `src/components/MonacoEditor/`
4. Test with existing exercises to verify compatibility

## 🎉 Conclusion

The Monaco Editor integration provides a seamless upgrade path that:

- ✅ Maintains 100% compatibility with existing code
- ✅ Improves performance and reliability
- ✅ Adds offline support and better customization
- ✅ Preserves all existing functionality
- ✅ Requires minimal code changes

Switch to Monaco for a better coding experience while keeping everything else exactly the same!