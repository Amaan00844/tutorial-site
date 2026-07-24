'use client';

import { useEffect, useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

export default function NextJSSandbox({ 
  filesObj, 
  fileToOpen, 
  onLoad, 
  hideExplorer = true 
}) {
  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState(fileToOpen || 'page.jsx');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (filesObj) {
      const processedFiles = {};
      Object.entries(filesObj).forEach(([filename, content]) => {
        if (typeof content === 'string') {
          processedFiles[filename] = content;
        } else if (content && typeof content === 'object' && content.content) {
          processedFiles[filename] = content.content;
        }
      });
      setFiles(processedFiles);
      
      if (fileToOpen && processedFiles[fileToOpen]) {
        setActiveFile(fileToOpen);
      }
    }
  }, [filesObj, fileToOpen]);

  useEffect(() => {
    if (Object.keys(files).length > 0 && onLoad) {
      onLoad();
    }
  }, [files, onLoad]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    monaco.editor.defineTheme('nextjs-theme', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '#0066cc' },
        { token: 'string', foreground: '#cc6600' },
        { token: 'tag', foreground: '#990099' }
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#000000',
      }
    });
    monaco.editor.setTheme('nextjs-theme');
  };

  const handleEditorChange = (value) => {
    if (activeFile && value !== undefined) {
      setFiles(prev => ({
        ...prev,
        [activeFile]: value
      }));
    }
  };

  const handleRunTests = async () => {
    if (!files[activeFile]) return;
    
    setIsRunning(true);
    setOutput('⚡ Running Next.js tests...\n');
    
    try {
      const testFile = Object.keys(files).find(name => 
        name.includes('test') && name.endsWith('.js')
      );
      
      if (!testFile) {
        setOutput(prev => prev + '❌ No Next.js test file found');
        setIsRunning(false);
        return;
      }

      const testCode = files[testFile];
      const userCode = files[activeFile] || '';
      
      // Clear any existing test setup
      if (window.exerciseTest) {
        delete window.exerciseTest;
      }
      
      // Execute test code in proper context
      try {
        const executeTestCode = new Function('window', 'console', testCode);
        executeTestCode(window, console);
      } catch (testSetupError) {
        setOutput(prev => prev + `❌ Next.js test setup error: ${testSetupError.message}\n`);
        setIsRunning(false);
        return;
      }
      
      // Wait for test setup
      await new Promise(resolve => setTimeout(resolve, 100));
      
      if (window.exerciseTest && window.exerciseTest.runTests) {
        const result = window.exerciseTest.runTests(userCode);
        
        let outputText = '📊 Next.js Test Results:\n';
        outputText += `Score: ${result.score || 0}/100\n`;
        outputText += `Passed: ${result.passed ? '✅ Yes' : '❌ No'}\n`;
        
        if (result.details && result.details.length > 0) {
          outputText += '\n📋 Details:\n';
          result.details.forEach(detail => {
            outputText += `  ${detail}\n`;
          });
        }
        
        if (result.message) {
          outputText += `\n💬 ${result.message}`;
        }
        
        setOutput(outputText);
        
        // Store results for parent component (store both passed and failed results)
        setFiles(prev => ({
          ...prev,
          'results.tests': JSON.stringify({
            score: result.score,
            passed: result.passed,
            timestamp: new Date().toISOString(),
            details: result.details || [],
            message: result.message || ''
          }, null, 2)
        }));
        
        // Also store attempt data
        setFiles(prev => ({
          ...prev,
          'attempts.tests': JSON.stringify({
            userCode: userCode,
            timestamp: new Date().toISOString(),
            result: result
          }, null, 2)
        }));
        
      } else {
        setOutput('❌ Next.js test system not available - window.exerciseTest not found');
        console.error('Next.js test setup failed. Available on window:', Object.keys(window).filter(k => k.includes('exercise')));
      }
      
    } catch (error) {
      setOutput(prev => prev + '\n❌ Test error: ' + error.message);
      console.error('Next.js test execution error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
  };

  useEffect(() => {
    if (window) {
      window.monacoSandbox = {
        getFsSnapshot: () => Promise.resolve(files),
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
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{activeFile}</span>
              <span className="text-xs text-gray-500">(Next.js)</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isRunning ? '⏳ Testing...' : '⚡ Test'}
              </button>
              <button
                onClick={clearOutput}
                className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                🗑️ Clear
              </button>
            </div>
          </div>

          <div className="flex-1">
            <Editor
              height="100%"
              language="javascript"
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
                theme: 'nextjs-theme'
              }}
            />
          </div>
        </div>

        <div className="w-1/3 border-l flex flex-col">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <h3 className="text-sm font-medium">Next.js Output</h3>
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