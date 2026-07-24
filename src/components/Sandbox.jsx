'use client';

import { useEffect, useState } from 'react';
import sdk from '@stackblitz/sdk';

const testsTest = {'tests.test': `
const fs = require('fs');
const path = require('path');
const os = require('os');

console.clear();

// 1. Resolve base path
const basePath = path.dirname(__dirname); // current script's folder

const jshrcPath = path.join(os.homedir(), '.jshrc');
const shellPath = path.join(basePath, '.shell.js');

const customShell = \`
const path = require('path');
const readline = require('readline');
const fs = require('fs');
const vm = require('vm');
const { spawn, exec, spawnSync } = require('child_process');

exec('kill 1');

console.log("Installing Dependencies: ")
spawnSync('npm', ['install'], { stdio: 'inherit'});
console.clear();

// Shell prompt setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '',
});

// Directories allowed for execution
const baseDir = \\\`\${__dirname}\\\`;
const allowedDirs = [baseDir];


async function resolveCommandPath(cmd) {
  if (cmd.startsWith('/') || cmd.startsWith('./') || cmd.startsWith('../')) {
    return path.resolve(process.cwd(), cmd);
  }
  const result = spawnSync('which', [cmd], { encoding: 'utf8' });
  if (result.status !== 0) return null;
  return result.stdout.trim();
}

// All blocked commands that could alter filesystem or pose risk
const blockedCommands = new Set([
  'bg',
  'bind',
  'break',
  'builtin', 
  'ls',
  'command',
  'compgen',
  'complete',
  'continue',
  'declare',
  'dirs',
  'disown',
  'echo',
  'enable',
  'eval',
  'exec',
  'exit',
  'export',
  'fc',
  'fg',
  'getopts',
  'hash',
  'help',
  'history',
  'jobs',
  'kill',
  'let',
  'local',
  'logout',
  'popd',
  'printf',
  'pushd',
  'read',
  'readonly',
  'return',
  'set',
  'shift',
  'shopt',
  'source',
  'suspend',
  'test',
  'times',
  'trap',
  'type',
  'typeset',
  'ulimit',
  'umask',
  'unalias',
  'unset',
  'wait',
  'ln',
  'mkdir',
  'rm',
  'rmdir',
  'mv',
  'cp',
  'chmod',
  'chown',
  'chgrp',
  'touch',
  'truncate',
  'bash',
  'sh',
  'zsh',
  'jsh',
  'code',
  'python',
  'python3',
  'pnpm',
  'curl',
  'wget',
  'xdg',
  'cat',
  'head',
  'tail',
  'sort',
  'jq',
  'xxd',
  'env',
  'export',
  'unset',
  'xdg-open',
]);

function updatePrompt() {
  rl.setPrompt(\\\`\\\${process.cwd()} $ \\\`);
  rl.prompt();
}

updatePrompt();

rl.on('SIGINT', () => {
  updatePrompt();});

rl.on('line', async (line) => {
  try {
    const input = line.trim();

    if (input.includes('>') || input.includes('<')) {
      console.log(\\\`shell: \\\${input} not found\\\`);
      updatePrompt();
      return;
    }

    const parts = input.split(/\\\\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    // Block command if on the forbidden list
    if (blockedCommands.has(cmd)) {
      console.log(\\\`shell: \\\${cmd} not found\\\`);
      updatePrompt();
      return;
    }

    // Block path-based execution like ./file or /usr/bin/node
    if (
      cmd.startsWith('/') ||
      cmd.startsWith('./') ||
      cmd.startsWith('../') ||
      cmd.includes('/')
    ) {
      console.error('❌ Executing files via path is not allowed.');
      updatePrompt();
      return;
    }
    // Handle custom 'test' command
    if (cmd === 'run-tests') {
      rl.pause(); // <--- pause readline to free stdin
      const testFile = path.resolve(baseDir, 'tests.test');

      if (!fs.existsSync(testFile)) {
        console.error('❌ tests.test not found in root directory.');
        updatePrompt();
        return;
      }

      const testProcess = spawn('node', [testFile], {
        stdio: 'inherit',
        env: { ...process.env },
      });

      testProcess.on('error', (err) => {
        console.error('❌ Failed to start test process:', err.message);
        rl.resume();
        updatePrompt();
      });

      testProcess.on('close', (code) => {
        console.log(\\\`\\nTest process exited with code: \\\${code}\\\`);
        rl.resume()
        updatePrompt();
      });

      return;
    }

    if (cmd === 'npx') {
      rl.pause(); // <--- pause readline to free stdin
      if (args[0] === 'node') {
        console.error("Error: 'npx node' is disabled. Use node instead.");
        updatePrompt();
        return;
      }

      const npxProcess = spawn('npx', args, { stdio: 'inherit' });

      npxProcess.on('error', (err) => {
        console.error('❌ Failed to start npx process:', err.message);
        rl.resume();
        updatePrompt();
      });

      npxProcess.on('close', (code) => {
        console.log('Process exited with code: ' + code);
        rl.resume()
        updatePrompt();
      });
      return;
    }

    if (cmd === 'node') {
      rl.pause(); // <--- pause readline to free stdin
      const targetFile = args[0];
      if (!targetFile) {
        console.error('Usage: node <script.js>');
        updatePrompt();
        return;
      }

      const blockedFiles = new Set([
        path.resolve(process.cwd(), 'tests.test'),
        path.resolve(process.cwd(), 'attempts.test'),
        path.resolve(process.cwd(), 'result.test'),
      ]);

      function isInsideCwd(filePath) {
        const resolved = path.resolve(process.cwd(), filePath);
        return resolved.startsWith(process.cwd() + path.sep);
      }

      function isBlocked(filePath) {
        const resolved = path.resolve(process.cwd(), filePath);
        return blockedFiles.has(resolved);
      }

      const fsMock = {
        ...fs,
        readFileSync(file, ...args) {
          const resolved = path.resolve(file);
          if (!isInsideCwd(resolved))
            throw new Error('Denied outside CWD: ' + file);
          if (isBlocked(resolved)) throw new Error('Read denied: ' + file);
          return fs.readFileSync(resolved, ...args);
        },
        writeFileSync(file, ...args) {
          const resolved = path.resolve(file);
          if (!isInsideCwd(resolved))
            throw new Error('Denied outside CWD: ' + file);
          if (isBlocked(resolved)) throw new Error('Write denied: ' + file);
          return fs.writeFileSync(resolved, ...args);
        },
        unlinkSync() {
          throw new Error('unlinkSync is blocked');
        },
        unlink() {
          const cb = arguments[arguments.length - 1];
          process.nextTick(() => cb(new Error('unlink is blocked')));
        },
      };

      const blockedBuiltins = [
        'child_process', 'vm'
      ];

      function safeRequire(mod) {
        if (mod === 'fs') return fsMock;
        if (blockedBuiltins.includes(mod)) throw new Error('Module ' + mod + ' is not allowed');
        try {
          const resolved = require.resolve(mod, { paths: [baseDir] });
          return require(resolved);
        } catch (err) {
            throw new Error('Module ' + mod + ' could not be loaded');
        }
        
      }

      let resolvedPath;
      if (targetFile === '.' || targetFile === './') {
        resolvedPath = path.join(process.cwd(), 'index.js');
      } else if (targetFile === '..' || targetFile === '../') {
        resolvedPath = path.join(path.resolve(process.cwd(), '..'), 'index.js');
      } else {
        resolvedPath = path.resolve(process.cwd(), targetFile);
      }

      if (!fs.existsSync(resolvedPath)) {
        console.error('File not found:', resolvedPath);
        updatePrompt();
        return;
      }

      const code = fs.readFileSync(resolvedPath, 'utf-8');
      const sandbox = {
        console,
        setTimeout,
        setInterval,
        clearTimeout,
        clearInterval,
        require: safeRequire,
        Buffer,
        process: { env: {} },
        __dirname: process.cwd()
      };

      const context = vm.createContext(sandbox);
      try {
        vm.runInContext(code, context, {
          filename: resolvedPath,
        });
      } catch (err) {
        console.error('Sandbox error:', err);
      }

      updatePrompt();
      return;
    }

    if (cmd === 'cd') {
      rl.pause(); // <--- pause readline to free stdin
      if (args.length == 0){
            console.log(process.cwd());
            updatePrompt();
            return;
          }
        const targetDir = args[0];
      try {
        if (targetDir.includes('~')) {
          console.error('❌ Error: "~" is not allowed.');
          updatePrompt();
          return;
        }

        const resolved = targetDir.startsWith('/')
          ? path.resolve(baseDir, '.' + targetDir)
          : path.resolve(process.cwd(), targetDir);

        if (
          !allowedDirs.some(
            (dir) => resolved === dir || resolved.startsWith(dir + path.sep)
          )
        ) {
          console.error('❌ Access Restricted.');
          updatePrompt();
          return;
        }

        if (!fs.existsSync(resolved) || !fs.statSync(resolved).isDirectory()) {
          console.error('❌ Error: Not a valid directory.');
          updatePrompt();
          return;
        }

        process.chdir(resolved);
      } catch (err) {
        console.error(\\\`cd: \\\${err.message}\\\`);
      }

      updatePrompt();
      return;
    }

    if (cmd === 'npm') {
      rl.pause(); // <--- pause readline to free stdin
      const env = { ...process.env, npm_config_ignore_scripts: 'true' };
      const npmProcess = spawn('npm', args, { stdio: 'inherit', env });

      npmProcess.on('error', (err) => {
        console.error('❌ Failed to start npm: ' + err.message);
      });
      npmProcess.on('close', (code) => {
        console.log('Process exited with code: ' + code);
        try {
          const Module = require('module');
          if (args.includes('install')) {
            Module._initPaths();
            console.log('🔁 Module paths reloaded. Newly installed packages are now available.');
          }
        } catch (e) {
          console.warn('⚠️ Failed to reinitialize module paths:', e.message);
        }
        rl.resume()
        updatePrompt();
      });
      return;
    }
    const cmdPath = await resolveCommandPath(cmd);

    if (!cmdPath) {
      console.error('shell: Command not found: ' + cmd);
      updatePrompt();
      return;
    }
    // Default execution fallback
    const child = spawn(cmdPath, args, { stdio: 'inherit' });

    child.on('error', (err) => {
      console.error('❌ Failed to start process: ' + err.message);
    });

    child.on('close', (code) => {
      console.log('Process exited with code: ' + code);
      rl.resume()
      updatePrompt();
    });
  } catch(err){console.log(err)}
});
\`;

fs.writeFileSync(shellPath, customShell);

fs.writeFileSync(jshrcPath, \`node ~/projects/.shell.js\`);

const testsFile = path.join(__dirname, 'web-c.done');
fs.writeFileSync(testsFile, "WebContainer Booted", null, 2);
`}

export default function Sandbox({ filesObj, fileToOpen, onLoad, hideExplorer }) {
  const containerId = 'stackblitz-container';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  // Add testsTest to the filesList
  Object.assign(filesObj, testsTest);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    let isComponentMounted = true;

    const initializeStackBlitz = async () => {
      try {
        setError(null);
        
        // Clear any existing container content
        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '';
        }

        // Set a timeout for the entire operation
        timeoutId = setTimeout(() => {
          if (isComponentMounted) {
            setError('StackBlitz connection timeout. Retrying...');
            if (retryCount < 3) {
              setRetryCount(prev => prev + 1);
            }
          }
        }, 30000); // 30 second timeout

        const vm = await sdk.embedProject(
          containerId,
          {
            files: filesObj,
            title: 'Code4Bharat Sandbox',
            description: 'Try MERN right in your Browser',
            template: 'node',
          },
          {
            openFile: fileToOpen,
            hideDevTools: true,
            theme: 'light',
            hideExplorer: hideExplorer,
            // Add these options to improve reliability
            forceEmbedLayout: true,
            clickToLoad: false,
            view: 'editor',
            terminalHeight: 50
          }
        );

        if (!isComponentMounted) return;

        // Clear the timeout since we got a successful connection
        clearTimeout(timeoutId);

        // Wait for the WebContainer to boot
        intervalId = setInterval(async () => {
          try {
            if (!isComponentMounted) {
              clearInterval(intervalId);
              return;
            }

            const files = Object.keys(await vm.getFsSnapshot());
            if (files.includes('web-c.done')) {
              clearInterval(intervalId);
              
              if (onLoad) onLoad();
              
              // Clean up the boot file
              await vm.applyFsDiff({ 
                destroy: ['web-c.done'], 
                create: {} 
              });

              setLoading(false);
            }
          } catch (err) {
            console.warn('Error checking file system:', err);
            // Continue trying - this might be a temporary issue
          }
        }, 2000); // Check every 2 seconds instead of 3

      } catch (err) {
        console.error('Failed to embed StackBlitz project:', err);
        
        if (!isComponentMounted) return;
        
        clearTimeout(timeoutId);
        
        // Try to connect to existing container as fallback
        try {
          const container = document.getElementById(containerId);
          if (!container) {
            throw new Error('Container element not found');
          }

          const vm = await sdk.connect(container);
          
          intervalId = setInterval(async () => {
            try {
              if (!isComponentMounted) {
                clearInterval(intervalId);
                return;
              }

              const files = Object.keys(await vm.getFsSnapshot());
              if (files.includes('web-c.done')) {
                clearInterval(intervalId);
                
                if (onLoad) onLoad();
                
                await vm.applyFsDiff({ 
                  destroy: ['web-c.done'], 
                  create: {} 
                });

                setLoading(false);
              }
            } catch (err) {
              console.warn('Error in fallback connection:', err);
            }
          }, 2000);

        } catch (fallbackErr) {
          console.error('Fallback connection also failed:', fallbackErr);
          setError(`StackBlitz failed to load: ${err.message}`);
          
          if (retryCount < 3) {
            setTimeout(() => {
              if (isComponentMounted) {
                setRetryCount(prev => prev + 1);
              }
            }, 5000);
          }
        }
      }
    };

    initializeStackBlitz();

    // Cleanup function
    return () => {
      isComponentMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [filesObj, fileToOpen, onLoad, hideExplorer, retryCount]);

  // Auto-retry logic
  useEffect(() => {
    if (retryCount > 0 && retryCount <= 3) {
      const timer = setTimeout(() => {
        setLoading(true);
        setError(null);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [retryCount]);

  if (error && retryCount >= 3) {
    return (
      <div className="w-screen h-[calc(100vh-11rem)] flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">StackBlitz Connection Failed</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>This might be due to:</p>
            <ul className="list-disc list-inside text-left">
              <li>Network connectivity issues</li>
              <li>StackBlitz service being temporarily unavailable</li>
              <li>Browser blocking third-party iframes</li>
              <li>Ad blockers or security extensions</li>
            </ul>
          </div>
          <button
            onClick={() => {
              setRetryCount(0);
              setError(null);
              setLoading(true);
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id={containerId} className="w-screen h-[calc(100vh-11rem)]" />
      {loading && (
        <div
          className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center z-50 select-none"
          tabIndex={0}
          onKeyDown={(e) => e.preventDefault()}
          onKeyUp={(e) => e.preventDefault()}
        >
          <div className="text-center">
            <span className="text-lg font-semibold text-gray-700 block mb-2">
              Loading Sidebar, Sandbox & Installing Dependencies
            </span>
            {retryCount > 0 && (
              <span className="text-sm text-gray-500">
                Retry attempt {retryCount}/3
              </span>
            )}
            {error && (
              <span className="text-sm text-orange-600 block mt-2">
                {error}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}