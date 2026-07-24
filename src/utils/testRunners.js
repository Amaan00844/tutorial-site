  // Test runners for different programming languages in Monaco Editor environment

export class JavaScriptTestRunner {
  constructor(userCode, testCode) {
    this.userCode = userCode;
    this.testCode = testCode;
    this.results = {
      syntaxCheckPassed: false,
      structureCheckPassed: false,
      functionalityCheckPassed: false,
      linesOfCode: 0,
      executionTime: 0,
      attempts: 1,
      errors: [],
      warnings: [],
      score: 0
    };
  }

  async runTests() {
    const startTime = performance.now();
    
    try {
      // 1. Syntax Check
      this.results.syntaxCheckPassed = this.checkSyntax();
      
      // 2. Structure Check
      this.results.structureCheckPassed = this.checkStructure();
      
      // 3. Functionality Check
      this.results.functionalityCheckPassed = await this.checkFunctionality();
      
      // 4. Calculate metrics
      this.calculateMetrics();
      
      // 5. Calculate score
      this.calculateScore();
      
    } catch (error) {
      this.results.errors.push(`Test execution error: ${error.message}`);
    }
    
    const endTime = performance.now();
    this.results.executionTime = ((endTime - startTime) / 1000).toFixed(3);
    
    return this.results;
  }

  checkSyntax() {
    try {
      // Use Function constructor to check syntax
      new Function(this.userCode);
      return true;
    } catch (error) {
      this.results.errors.push(`Syntax Error: ${error.message}`);
      return false;
    }
  }

  checkStructure() {
    let passed = true;
    const checks = [];

    // Check for console.log statements
    if (this.userCode.includes('console.log')) {
      checks.push('✅ Found console.log statement');
    } else {
      checks.push('❌ No console.log statement found');
      passed = false;
    }

    // Check for variable declarations
    const hasVariables = /\b(let|const|var)\s+\w+/.test(this.userCode);
    if (hasVariables) {
      checks.push('✅ Found variable declarations');
    } else {
      checks.push('❌ No variable declarations found');
      passed = false;
    }

    // Check for functions if required
    if (this.testCode.includes('function')) {
      const hasFunctions = /function\s+\w+|const\s+\w+\s*=\s*\(|let\s+\w+\s*=\s*\(|var\s+\w+\s*=\s*\(/.test(this.userCode);
      if (hasFunctions) {
        checks.push('✅ Found function declarations');
      } else {
        checks.push('❌ No function declarations found');
        passed = false;
      }
    }

    // Check for loops if required
    if (this.testCode.includes('loop')) {
      const hasLoops = /\b(for|while|do)\s*\(/.test(this.userCode);
      if (hasLoops) {
        checks.push('✅ Found loop structures');
      } else {
        checks.push('❌ No loop structures found');
        passed = false;
      }
    }

    this.results.structureChecks = checks;
    return passed;
  }

  async checkFunctionality() {
    try {
      // Create a safe execution environment
      const logs = [];
      const mockConsole = {
        log: (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        }
      };

      // Execute user code in controlled environment
      const executeCode = new Function('console', this.userCode);
      executeCode(mockConsole);

      // Basic functionality checks
      if (logs.length > 0) {
        this.results.output = logs.join('\n');
        return true;
      }

      return false;
    } catch (error) {
      this.results.errors.push(`Functionality Error: ${error.message}`);
      return false;
    }
  }

  calculateMetrics() {
    this.results.linesOfCode = this.userCode
      .split('\n')
      .filter(line => line.trim() && !line.trim().startsWith('//'))
      .length;
  }

  calculateScore() {
    let score = 0;
    
    if (this.results.syntaxCheckPassed) score += 30;
    if (this.results.structureCheckPassed) score += 40;
    if (this.results.functionalityCheckPassed) score += 30;
    
    // Bonus points for clean code
    if (this.results.linesOfCode <= 10) score += 5;
    if (this.userCode.includes('//')) score += 5; // Comments
    
    this.results.score = Math.min(score, 100);
  }
}

export class PythonTestRunner {
  constructor(userCode, testCode) {
    this.userCode = userCode;
    this.testCode = testCode;
    this.results = {
      syntaxCheckPassed: false,
      structureCheckPassed: false,
      functionalityCheckPassed: false,
      linesOfCode: 0,
      executionTime: 0,
      attempts: 1,
      errors: [],
      warnings: [],
      score: 0
    };
  }

  async runTests() {
    const startTime = performance.now();
    
    try {
      // 1. Basic syntax check (limited in browser)
      this.results.syntaxCheckPassed = this.checkSyntax();
      
      // 2. Structure check
      this.results.structureCheckPassed = this.checkStructure();
      
      // 3. Simulated functionality check
      this.results.functionalityCheckPassed = this.checkFunctionality();
      
      // 4. Calculate metrics
      this.calculateMetrics();
      
      // 5. Calculate score
      this.calculateScore();
      
    } catch (error) {
      this.results.errors.push(`Test execution error: ${error.message}`);
    }
    
    const endTime = performance.now();
    this.results.executionTime = ((endTime - startTime) / 1000).toFixed(3);
    
    return this.results;
  }

  checkSyntax() {
    // Basic Python syntax checks
    const lines = this.userCode.split('\n');
    let indentLevel = 0;
    
    try {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        if (!trimmed || trimmed.startsWith('#')) continue;
        
        // Check for basic syntax issues
        if (trimmed.endsWith(':')) {
          // Should be followed by indented block
          if (i + 1 < lines.length) {
            const nextLine = lines[i + 1];
            if (nextLine.trim() && !nextLine.startsWith(' ') && !nextLine.startsWith('\t')) {
              this.results.errors.push(`Indentation error after line ${i + 1}`);
              return false;
            }
          }
        }
        
        // Check for unmatched parentheses
        const openParens = (line.match(/\(/g) || []).length;
        const closeParens = (line.match(/\)/g) || []).length;
        if (openParens !== closeParens) {
          this.results.warnings.push(`Potential parentheses mismatch on line ${i + 1}`);
        }
      }
      
      return true;
    } catch (error) {
      this.results.errors.push(`Syntax check error: ${error.message}`);
      return false;
    }
  }

  checkStructure() {
    let passed = true;
    const checks = [];

    // Check for print statements
    if (this.userCode.includes('print(')) {
      checks.push('✅ Found print statement');
    } else {
      checks.push('❌ No print statement found');
      passed = false;
    }

    // Check for variable assignments
    const hasVariables = /\w+\s*=\s*.+/.test(this.userCode);
    if (hasVariables) {
      checks.push('✅ Found variable assignments');
    } else {
      checks.push('❌ No variable assignments found');
      passed = false;
    }

    // Check for functions if required
    if (this.testCode.includes('def ')) {
      const hasFunctions = /def\s+\w+\s*\(/.test(this.userCode);
      if (hasFunctions) {
        checks.push('✅ Found function definitions');
      } else {
        checks.push('❌ No function definitions found');
        passed = false;
      }
    }

    // Check for loops if required
    if (this.testCode.includes('for ') || this.testCode.includes('while ')) {
      const hasLoops = /\b(for|while)\s+.+:/.test(this.userCode);
      if (hasLoops) {
        checks.push('✅ Found loop structures');
      } else {
        checks.push('❌ No loop structures found');
        passed = false;
      }
    }

    this.results.structureChecks = checks;
    return passed;
  }

  checkFunctionality() {
    try {
      // Simulate Python execution by parsing print statements
      const printMatches = this.userCode.match(/print\([^)]+\)/g);
      
      if (printMatches && printMatches.length > 0) {
        const outputs = printMatches.map(match => {
          // Extract content from print()
          const content = match.slice(6, -1); // Remove 'print(' and ')'
          // Simple string literal handling
          if ((content.startsWith('"') && content.endsWith('"')) || 
              (content.startsWith("'") && content.endsWith("'"))) {
            return content.slice(1, -1);
          }
          return content;
        });
        
        this.results.output = outputs.join('\n');
        return true;
      }
      
      return false;
    } catch (error) {
      this.results.errors.push(`Functionality check error: ${error.message}`);
      return false;
    }
  }

  calculateMetrics() {
    this.results.linesOfCode = this.userCode
      .split('\n')
      .filter(line => line.trim() && !line.trim().startsWith('#'))
      .length;
  }

  calculateScore() {
    let score = 0;
    
    if (this.results.syntaxCheckPassed) score += 30;
    if (this.results.structureCheckPassed) score += 40;
    if (this.results.functionalityCheckPassed) score += 30;
    
    // Bonus points
    if (this.results.linesOfCode <= 10) score += 5;
    if (this.userCode.includes('#')) score += 5; // Comments
    
    this.results.score = Math.min(score, 100);
  }
}

export class HTMLTestRunner {
  constructor(userCode, testCode) {
    this.userCode = userCode;
    this.testCode = testCode;
    this.results = {
      syntaxCheckPassed: false,
      structureCheckPassed: false,
      functionalityCheckPassed: false,
      linesOfCode: 0,
      executionTime: 0,
      attempts: 1,
      errors: [],
      warnings: [],
      score: 0
    };
  }

  async runTests() {
    const startTime = performance.now();
    
    try {
      this.results.syntaxCheckPassed = this.checkSyntax();
      this.results.structureCheckPassed = this.checkStructure();
      this.results.functionalityCheckPassed = this.checkFunctionality();
      this.calculateMetrics();
      this.calculateScore();
    } catch (error) {
      this.results.errors.push(`Test execution error: ${error.message}`);
    }
    
    const endTime = performance.now();
    this.results.executionTime = ((endTime - startTime) / 1000).toFixed(3);
    
    return this.results;
  }

  checkSyntax() {
    try {
      // Create a DOM parser to check HTML syntax
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.userCode, 'text/html');
      
      // Check for parser errors
      const parserErrors = doc.querySelectorAll('parsererror');
      if (parserErrors.length > 0) {
        this.results.errors.push('HTML parsing errors found');
        return false;
      }
      
      return true;
    } catch (error) {
      this.results.errors.push(`HTML syntax error: ${error.message}`);
      return false;
    }
  }

  checkStructure() {
    let passed = true;
    const checks = [];

    // Check for basic HTML structure
    if (this.userCode.includes('<html>') || this.userCode.includes('<!DOCTYPE')) {
      checks.push('✅ Found HTML document structure');
    } else {
      checks.push('❌ Missing HTML document structure');
      passed = false;
    }

    // Check for head and body tags
    if (this.userCode.includes('<head>') && this.userCode.includes('<body>')) {
      checks.push('✅ Found head and body tags');
    } else {
      checks.push('❌ Missing head or body tags');
      passed = false;
    }

    // Check for title tag
    if (this.userCode.includes('<title>')) {
      checks.push('✅ Found title tag');
    } else {
      checks.push('❌ Missing title tag');
      passed = false;
    }

    this.results.structureChecks = checks;
    return passed;
  }

  checkFunctionality() {
    try {
      // Parse HTML and check for functional elements
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.userCode, 'text/html');
      
      // Check if document has meaningful content
      const body = doc.body;
      if (body && body.textContent.trim().length > 0) {
        return true;
      }
      
      return false;
    } catch (error) {
      this.results.errors.push(`Functionality check error: ${error.message}`);
      return false;
    }
  }

  calculateMetrics() {
    this.results.linesOfCode = this.userCode
      .split('\n')
      .filter(line => line.trim() && !line.trim().startsWith('<!--'))
      .length;
  }

  calculateScore() {
    let score = 0;
    
    if (this.results.syntaxCheckPassed) score += 30;
    if (this.results.structureCheckPassed) score += 40;
    if (this.results.functionalityCheckPassed) score += 30;
    
    this.results.score = Math.min(score, 100);
  }
}

// Factory function to create appropriate test runner
export function createTestRunner(language, userCode, testCode) {
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'js':
      return new JavaScriptTestRunner(userCode, testCode);
    case 'python':
    case 'py':
      return new PythonTestRunner(userCode, testCode);
    case 'html':
      return new HTMLTestRunner(userCode, testCode);
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}