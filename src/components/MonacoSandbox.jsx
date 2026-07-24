'use client';

import { useEffect, useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { createTestRunner } from '@/utils/testRunners';

export default function MonacoSandbox({ 
  filesObj, 
  fileToOpen, 
  onLoad, 
  hideExplorer = true,
  language = 'javascript' 
}) {
  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState(fileToOpen || 'script.js');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  // Initialize files from filesObj
  useEffect(() => {
    if (filesObj) {
      const processedFiles = {};
      Object.entries(filesObj).forEach(([filename, content]) => {
        // Handle different content types
        if (typeof content === 'string') {
          processedFiles[filename] = content;
        } else if (content && typeof content === 'object' && content.content) {
          processedFiles[filename] = content.content;
        }
      });
      setFiles(processedFiles);
      
      // Set active file if it exists in the files
      if (fileToOpen && processedFiles[fileToOpen]) {
        setActiveFile(fileToOpen);
      } else {
        // Find the first editable file
        const editableFile = Object.keys(processedFiles).find(name => 
          name.endsWith('.js') || name.endsWith('.py') || name.endsWith('.jsx') || 
          name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.html') ||
          name.endsWith('.css')
        );
        if (editableFile) {
          setActiveFile(editableFile);
        }
      }
    }
  }, [filesObj, fileToOpen]);

  // Call onLoad when component is ready
  useEffect(() => {
    if (Object.keys(files).length > 0 && onLoad) {
      onLoad();
    }
  }, [files, onLoad]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    // Configure Monaco Editor
    monaco.editor.defineTheme('custom-theme', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#000000',
      }
    });
    monaco.editor.setTheme('custom-theme');

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      handleSaveFile();
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      handleRunCode();
    });
  };

  const handleEditorChange = (value) => {
    if (activeFile && value !== undefined) {
      setFiles(prev => ({
        ...prev,
        [activeFile]: value
      }));
    }
  };

  const handleSaveFile = () => {
    // Auto-save is handled by handleEditorChange
    // No output needed for save
  };

  const getLanguageFromFile = (filename) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'js':
      case 'jsx':
        return 'javascript';
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'py':
        return 'python';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      default:
        return 'plaintext';
    }
  };

  const executeJavaScript = (code) => {
    return new Promise((resolve) => {
      const logs = [];
      const errors = [];
      
      // Create a sandbox environment
      const mockConsole = {
        log: (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        },
        error: (...args) => {
          errors.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        },
        warn: (...args) => {
          logs.push('⚠️ ' + args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        }
      };

      try {
        // Create a function to execute the code in a controlled environment
        const executeCode = new Function('console', code);
        executeCode(mockConsole);
        
        resolve({
          output: logs.join('\n'),
          errors: errors.join('\n'),
          success: errors.length === 0
        });
      } catch (error) {
        resolve({
          output: logs.join('\n'),
          errors: error.message,
          success: false
        });
      }
    });
  };

  const executePython = (code) => {
    // Simulate Python execution for basic print statements
    return new Promise((resolve) => {
      const lines = code.split('\n');
      const outputs = [];
      
      try {
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.startsWith('print(')) {
            // Simple print statement parsing
            const match = trimmed.match(/print\((.*)\)/);
            if (match) {
              let content = match[1];
              // Remove quotes if it's a string literal
              if ((content.startsWith('"') && content.endsWith('"')) || 
                  (content.startsWith("'") && content.endsWith("'"))) {
                content = content.slice(1, -1);
              }
              outputs.push(content);
            }
          }
        });
        
        resolve({
          output: outputs.join('\n') || 'Python code executed (limited browser simulation)',
          errors: '',
          success: true
        });
      } catch (error) {
        resolve({
          output: '',
          errors: error.message,
          success: false
        });
      }
    });
  };

  const handleRunCode = async () => {
    if (!files[activeFile]) return;
    
    const fileLanguage = getLanguageFromFile(activeFile);
    
    // Only allow running for supported languages
    if (fileLanguage !== 'javascript' && fileLanguage !== 'python') {
      setOutput(`❌ Code execution for ${fileLanguage} files is not supported in browser environment.\nUse the 🧪 Test button instead.`);
      return;
    }
    
    setIsRunning(true);
    setOutput('🚀 Running code...\n');
    
    try {
      const code = files[activeFile];
      
      let result;
      if (fileLanguage === 'javascript') {
        result = await executeJavaScript(code);
      } else if (fileLanguage === 'python') {
        result = await executePython(code);
      }
      
      let outputText = '';
      if (result.output) {
        outputText += result.output + '\n';
      }
      if (result.errors) {
        outputText += '❌ Errors:\n' + result.errors + '\n';
      }
      if (result.success) {
        outputText += '\n✅ Code executed successfully';
      }
      
      setOutput(outputText);
      
      // Scroll output to bottom
      setTimeout(() => {
        if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
      }, 100);
      
    } catch (error) {
      setOutput(prev => prev + '\n❌ Execution error: ' + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  const handleRunTests = async () => {
    setIsRunning(true);
    setOutput('🧪 Running tests...\n');
    
    try {
      // Find test file
      const testFile = Object.keys(files).find(name => 
        name.includes('test') || name.includes('spec')
      );
      
      if (!testFile) {
        setOutput(prev => prev + '❌ No test file found');
        setIsRunning(false);
        return;
      }

      const testCode = files[testFile];
      const userCode = files[activeFile] || '';
      const fileLanguage = getLanguageFromFile(activeFile);
      
      // Get or increment attempts
      let attempts = 1;
      try {
        const attemptsData = files['attempts.tests'];
        if (attemptsData) {
          const parsed = JSON.parse(attemptsData);
          attempts = parsed.count + 1;
        }
      } catch (e) {
        attempts = 1;
      }
      
      let result;
      
      // Try to use browser-compatible test first
      try {
        // Execute test code to set up window.exerciseTest
        const executeTestCode = new Function(testCode);
        executeTestCode();
        
        // Check if browser-compatible test is available
        if (window.exerciseTest && window.exerciseTest.runTests) {
          console.log('Using browser-compatible test system');
          result = window.exerciseTest.runTests(userCode);
          result.attempts = attempts;
          result.linesOfCode = userCode.split('\n').filter(line => line.trim()).length;
          result.executionTime = '0.001'; // Minimal time for browser tests
        } else {
          throw new Error('Browser test not available, falling back to test runner');
        }
      } catch (error) {
        console.log('Falling back to test runner system:', error.message);
        // Fallback to original test runner
        const testRunner = createTestRunner(fileLanguage, userCode, testCode);
        result = await testRunner.runTests();
        result.attempts = attempts;
      }
      
      setTestResults(result);
      
      // Update attempts
      setFiles(prev => ({
        ...prev,
        'attempts.tests': JSON.stringify({ count: attempts }, null, 2)
      }));
      
      // Format output
      let outputText = '📊 Test Results:\n';
      outputText += `Syntax Check: ${result.syntaxCheckPassed ? '✅ Passed' : '❌ Failed'}\n`;
      outputText += `Structure Check: ${result.structureCheckPassed ? '✅ Passed' : '❌ Failed'}\n`;
      
      if (result.functionalityCheckPassed !== undefined) {
        outputText += `Functionality Check: ${result.functionalityCheckPassed ? '✅ Passed' : '❌ Failed'}\n`;
      }
      
      outputText += `Lines of Code: ${result.linesOfCode}\n`;
      outputText += `Execution Time: ${result.executionTime}s\n`;
      outputText += `Score: ${result.score}/100\n`;
      outputText += `Attempts: ${result.attempts}\n`;
      
      // Show detailed checks
      if (result.structureChecks) {
        outputText += '\n📋 Structure Checks:\n';
        result.structureChecks.forEach(check => {
          outputText += `  ${check}\n`;
        });
      }
      
      // Show errors if any
      if (result.errors && result.errors.length > 0) {
        outputText += '\n❌ Errors:\n';
        result.errors.forEach(error => {
          outputText += `  ${error}\n`;
        });
      }
      
      // Show warnings if any
      if (result.warnings && result.warnings.length > 0) {
        outputText += '\n⚠️ Warnings:\n';
        result.warnings.forEach(warning => {
          outputText += `  ${warning}\n`;
        });
      }
      
      // Show output if available
      if (result.output) {
        outputText += '\n📤 Program Output:\n';
        outputText += result.output + '\n';
      }
      
      const allTestsPassed = result.syntaxCheckPassed && result.structureCheckPassed && 
                           (result.functionalityCheckPassed === undefined || result.functionalityCheckPassed);
      
      if (allTestsPassed) {
        outputText += '\n🎉 All tests passed!';
        
        // Create results file for compatibility
        const resultData = {
          attempts: result.attempts,
          linesOfCode: result.linesOfCode,
          executionTime: result.executionTime,
          syntaxCheckPassed: result.syntaxCheckPassed,
          structureCheckPassed: result.structureCheckPassed,
          functionalityCheckPassed: result.functionalityCheckPassed,
          score: result.score,
          timestamp: new Date().toISOString()
        };
        
        // Store results in a way that can be accessed by the parent component
        setFiles(prev => ({
          ...prev,
          'results.tests': JSON.stringify(resultData, null, 2)
        }));
      } else {
        outputText += '\n❌ Some tests failed. Please review your code.';
      }
      
      setOutput(outputText);
      
    } catch (error) {
      setOutput(prev => prev + '\n❌ Test execution error: ' + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
  };

  // Get files for the current sandbox (expose for parent component access)
  const getFsSnapshot = () => {
    return Promise.resolve(files);
  };

  // Expose methods for parent component
  useEffect(() => {
    if (window) {
      window.monacoSandbox = {
        getFsSnapshot,
        applyFsDiff: (diff) => {
          setFiles(prev => {
            const newFiles = { ...prev };
            if (diff.destroy) {
              diff.destroy.forEach(filename => {
                delete newFiles[filename];
              });
            }
            if (diff.create) {
              Object.assign(newFiles, diff.create);
            }
            return newFiles;
          });
          return Promise.resolve();
        }
      };
    }
  }, [files]);

  return (
    <div className="w-full h-[calc(100vh-11rem)] flex flex-col">
      {/* File Tabs */}
      {!hideExplorer && (
        <div className="flex bg-gray-100 border-b overflow-x-auto">
          {Object.keys(files).map(filename => (
            <button
              key={filename}
              onClick={() => setActiveFile(filename)}
              className={`px-4 py-2 text-sm border-r whitespace-nowrap ${
                activeFile === filename 
                  ? 'bg-white border-b-2 border-blue-500 text-blue-600' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {filename}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1">
        {/* Editor */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{activeFile}</span>
              <span className="text-xs text-gray-500">
                ({getLanguageFromFile(activeFile)})
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isRunning ? '⏳ Running...' : '▶️ Run'}
              </button>
              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isRunning ? '⏳ Testing...' : '🧪 Test'}
              </button>
              <button
                onClick={clearOutput}
                className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                🗑️ Clear
              </button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              language={getLanguageFromFile(activeFile)}
              value={files[activeFile] || ''}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                insertSpaces: true,
                wordWrap: 'on',
                theme: 'vs'
              }}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-1/3 border-l flex flex-col">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <h3 className="text-sm font-medium">Output</h3>
          </div>
          <div 
            ref={outputRef}
            className="flex-1 p-4 bg-black text-green-400 font-mono text-sm overflow-y-auto"
          >
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}