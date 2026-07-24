"use client"

import { useState } from 'react';
import QuestionPlatform from '@/components/TestPlatform';

import sdk from "@stackblitz/sdk";

import {
  FaPlug,
  FaPlusSquare,
  FaList,
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaSave,
  FaCodeBranch,
  FaSync,
  FaLayerGroup,
  FaCompressArrowsAlt,
  FaStream,
  FaRegCalendarAlt,
  FaCogs,
  FaCode,
  FaSort,
  FaBolt,
  FaBalanceScale,
  FaChartBar,
} from 'react-icons/fa';


const handleOnChange = async (level) => {
    try {
        const container = document.getElementById("stackblitz-container");
        if (!container) throw new Error("Container element not found");

        const vm = await sdk.connect(container);
        console.log("Connected VM:", vm);

        const response = await fetch(`/exercise/mongodb/${level}/tests.js`);
        if (!response.ok) throw new Error("Failed to fetch test file");

        const testContent = await response.text();

        await vm.applyFsDiff({
            destroy: ['tests.test'],
            create: {
                'tests.test': testContent,
            },
        });

        const snapshot = await vm.getFsSnapshot();
        console.log("FS Snapshot:", snapshot);

    } catch (error) {
        console.error("Error during StackBlitz VM setup:", error);
    }

};

const basicMenu = [
  { label: "1. Init DB & Collection", icon: <FaPlug className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/1") },
  { label: "2. Insert One", icon: <FaPlusSquare className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/2") },
  { label: "3. Insert Many", icon: <FaList className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/3") },
  { label: "4. Find All", icon: <FaSearch className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/4") },
  { label: "5. Find Age > 30", icon: <FaFilter className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/5") },
  { label: "6. Update by Field", icon: <FaEdit className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/6") },
  { label: "7. Delete Inactive", icon: <FaTrash className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/7") },
  { label: "8. Find with $in", icon: <FaFilter className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/8") },
  { label: "9. Insert Array Field", icon: <FaSave className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/9") },
  { label: "10. Insert Nested Obj", icon: <FaCodeBranch className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/10") },
];


const intermediateMenu = [
  { label: "1. Update Many", icon: <FaSync className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/1") },
  { label: "2. Query with $or", icon: <FaLayerGroup className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/2") },
  { label: "3. Push to Array", icon: <FaCompressArrowsAlt className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/3") },
  { label: "4. Pull from Array", icon: <FaStream className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/4") },
  { label: "5. Query Date Range", icon: <FaRegCalendarAlt className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/5") },
  { label: "6. Use Index", icon: <FaCogs className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/6") },
  { label: "7. Count Docs", icon: <FaCode className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/7") },
  { label: "8. Sort Results", icon: <FaSort className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/8") },
  { label: "9. Limit & Skip", icon: <FaFilter className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/9") },
  { label: "10. Find Distinct", icon: <FaBolt className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("intermediate/10") },
];


const hardMenu = [
  { label: "1. Filter Nested Fields", icon: <FaLayerGroup className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/1") },
  { label: "2. Update Nested Fields", icon: <FaEdit className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/2") },
  { label: "3. Use Compound Filters", icon: <FaFilter className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/3") },
  { label: "4. Complex $and/$or", icon: <FaBalanceScale className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/4") },
  { label: "5. Soft Delete", icon: <FaTrash className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/5") },
  { label: "6. User Logs Pattern", icon: <FaChartBar className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/6") },
  { label: "7. Search in Arrays", icon: <FaSearch className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/7") },
  { label: "8. Regex Search", icon: <FaCode className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/8") },
  { label: "9. Bulk Write (Loop)", icon: <FaList className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/9") },
  { label: "10. Backup & Restore", icon: <FaSave className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("hard/10") },
];


const testContent = `
const fs = require('fs');
const path = require('path');
const os = require('os');

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

// Shell prompt setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '',
});
// Directories allowed for execution
const baseDir = \\\`\${__dirname}\\\`;
const allowedDirs = [baseDir];

function isPathAllowed(resolvedPath) {
  return allowedDirs.some(
    (dir) => resolvedPath === dir || resolvedPath.startsWith(dir + path.sep)
  );
}

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
  // Handle custom 'test' command
  if (cmd === 'run-tests') {
    const testFile = path.resolve(process.cwd(), 'tests.test');

    if (!fs.existsSync(testFile)) {
      console.error('❌ tests.test not found in current directory.');
      updatePrompt();
      return;
    }

    const testProcess = spawn('node', [testFile], {
      stdio: 'inherit',
      env: { ...process.env },
    });

    testProcess.on('close', (code) => {
      console.log(\\\`\\nTest process exited with code: \\\${code}\\\`);
      updatePrompt();
    });

    return;
  }

  if (cmd === 'npx') {
    if (args[0] === 'node') {
      console.error("Error: 'npx node' is disabled. Use node instead.");
      updatePrompt();
      return;
    }

    const npxProcess = spawn('npx', args, { stdio: 'inherit' });
    npxProcess.on('close', (code) => {
      console.log('Process exited with code: ' + code);
      updatePrompt();
    });
    return;
  }

  if (cmd === 'node') {
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

    const allowedBuiltins = [
      'path',
      'url',
      'http',
      'https',
      'buffer',
      'events',
      'stream',
      'util',
      'assert',
      'querystring',
      'zlib',
      'timers',
      'net',
      'dns',
    ];

    function safeRequire(mod) {
      if (mod === 'fs') return fsMock;
      if (allowedBuiltins.includes(mod)) return require(mod);
      throw new Error('Module ' + mod + ' is not allowed');
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
    };

    const context = vm.createContext(sandbox);
    try {
      vm.runInContext(code, context, {
        filename: resolvedPath,
        timeout: 5000,
      });
    } catch (err) {
      console.error('Sandbox error:', err.message);
    }

    updatePrompt();
    return;
  }

  if (cmd === 'cd') {
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
    const env = { ...process.env, npm_config_ignore_scripts: 'true' };
    const npmProcess = spawn('npm', args, { stdio: 'inherit', env });

    npmProcess.on('error', (err) => {
      console.error('❌ Failed to start npm: ' + err.message);
    });
    npmProcess.on('close', (code) => {
      console.log('Process exited with code: ' + code);
      updatePrompt();
    });
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
    updatePrompt();
  });
});
\`;

fs.writeFileSync(shellPath, customShell);

fs.writeFileSync(jshrcPath, \`node ~/projects/.shell.js\`);

const testsFile = path.join(__dirname, 'web-c.done');
fs.writeFileSync(testsFile, "WebContainer Booted", null, 2);
`


const packageJson = `{
  "name": "mongodb-exercise",
  "stackblitz": {
    "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
  },
  "dependencies": {
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "eslint": "^9.25.0",
    "globals": "^16.0.0",
    "tingodb": "^0.6.1"
  }
}`

const driverJS = `// driver.js

const fs = require('fs');
const path = require('path');
const { Db } = require('tingodb')();

// Setup TingoDB
const dbPath = path.join(__dirname, 'data');
const db = new Db(dbPath, {});

const code = fs.readFileSync('./script.js', 'utf8');

const run = new Function('db', code);
run(db);

`
const sandboxFiles = {
    'script.js': '',
    'tests.test': testContent,
    'driver.js': driverJS,
    'package.json': packageJson,
    'data/creatFolder.txt': 'Folder Created'
}
const sandboxFilesOpened = "script.js"

export default function MongodDBExercisePlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(menu[0].task)

    const setSidebarContent = (event) => {
        const value = (event.target.value).toLowerCase().toLowerCase();
        switch (value) {
            case 'basic':
                setMenu(basicMenu);
                break;
            case 'intermediate':
                setMenu(intermediateMenu);
                break;
            case 'hard':
                setMenu(hardMenu);
                break;
        }
    };


    return (
        <QuestionPlatform
            menuItems={menu}
            files={sandboxFiles}
            filesOpened={sandboxFilesOpened}
            setSidebarContent={setSidebarContent}
            title={"Mongodb"}

        />
    );
}

