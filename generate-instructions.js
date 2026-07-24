// Script to generate instruction files for all languages and levels
const fs = require('fs');
const path = require('path');

// Language configurations
const languages = {
  javascript: {
    name: 'JavaScript',
    fileExt: '.js',
    mainFile: 'script.js',
    levels: {
      basic: [
        { title: 'Variables and Data Types', desc: 'Create variables of different data types and log them to the console.' },
        { title: 'Basic Arithmetic Operations', desc: 'Perform basic arithmetic operations and display the results.' },
        { title: 'Functions and Parameters', desc: 'Create functions that accept parameters and return values.' },
        { title: 'Conditional Statements', desc: 'Use if-else statements to control program flow.' },
        { title: 'Loops and Iteration', desc: 'Implement different types of loops to iterate through data.' },
        { title: 'Arrays and Basic Methods', desc: 'Work with arrays and use basic array methods.' },
        { title: 'DOM Manipulation Basics', desc: 'Manipulate HTML elements using JavaScript DOM methods.' },
        { title: 'Event Listeners', desc: 'Add event listeners to handle user interactions.' },
        { title: 'String Methods', desc: 'Use various string methods to manipulate text data.' },
        { title: 'Basic Error Handling', desc: 'Implement try-catch blocks for error handling.' }
      ],
      intermediate: [
        { title: 'Closures and Scope', desc: 'Understand and implement closures and variable scope.' },
        { title: 'Higher-Order Functions', desc: 'Create and use higher-order functions.' },
        { title: 'Array Methods (Map, Filter, Reduce)', desc: 'Master advanced array methods for data transformation.' },
        { title: 'Promises and Async', desc: 'Work with asynchronous JavaScript using Promises and async/await.' },
        { title: 'Object-Oriented Programming', desc: 'Implement OOP concepts using classes and objects.' }
      ],
      hard: [
        { title: 'Advanced Closures and IIFEs', desc: 'Master advanced closure patterns and immediately invoked function expressions.' },
        { title: 'Functional Programming Patterns', desc: 'Implement functional programming patterns and concepts.' },
        { title: 'Advanced Array Manipulation', desc: 'Perform complex array operations and transformations.' },
        { title: 'Async Patterns and Concurrency', desc: 'Handle complex asynchronous patterns and concurrent operations.' },
        { title: 'Design Patterns in JavaScript', desc: 'Implement common design patterns in JavaScript.' }
      ]
    }
  },
  python: {
    name: 'Python',
    fileExt: '.py',
    mainFile: 'script.py',
    levels: {
      basic: [
        { title: 'Variables and Data Types', desc: 'Create variables of different data types and print them to the console.' },
        { title: 'Basic Arithmetic Operations', desc: 'Perform basic arithmetic operations and display the results.' },
        { title: 'Functions and Parameters', desc: 'Create functions that accept parameters and return values.' },
        { title: 'Conditional Statements', desc: 'Use if-elif-else statements to control program flow.' },
        { title: 'Loops and Iteration', desc: 'Implement different types of loops to iterate through data.' },
        { title: 'Lists and Basic Methods', desc: 'Work with Python lists and use basic list methods.' },
        { title: 'Dictionaries and Sets', desc: 'Use dictionaries and sets for data organization.' },
        { title: 'String Manipulation', desc: 'Manipulate strings using various Python string methods.' },
        { title: 'File Input/Output', desc: 'Read from and write to files using Python.' },
        { title: 'Basic Error Handling', desc: 'Implement try-except blocks for error handling.' }
      ]
    }
  },
  html: {
    name: 'HTML',
    fileExt: '.html',
    mainFile: 'index.html',
    levels: {
      basic: [
        { title: 'Basic HTML Structure', desc: 'Create a basic HTML document with proper structure including DOCTYPE, html, head, and body tags.' },
        { title: 'Headings and Paragraphs', desc: 'Use different heading levels (h1-h6) and paragraph tags to structure content.' },
        { title: 'Links and Navigation', desc: 'Create internal and external links using anchor tags with proper attributes.' },
        { title: 'Images and Media', desc: 'Embed images with proper alt text and responsive attributes.' },
        { title: 'Lists and Organization', desc: 'Create ordered and unordered lists with nested items.' },
        { title: 'Tables and Data', desc: 'Build tables with headers, rows, and cells for data presentation.' },
        { title: 'Forms and Input', desc: 'Create forms with various input types and proper labels.' },
        { title: 'Semantic HTML Elements', desc: 'Use semantic HTML5 elements like header, nav, main, section, and footer.' },
        { title: 'HTML Attributes', desc: 'Apply various HTML attributes including class, id, data attributes.' },
        { title: 'HTML Validation', desc: 'Create valid HTML that passes W3C validation standards.' }
      ]
    }
  },
  css: {
    name: 'CSS',
    fileExt: '.css',
    mainFile: 'style.css',
    levels: {
      basic: [
        { title: 'CSS Selectors and Properties', desc: 'Learn basic CSS selectors and apply fundamental styling properties.' },
        { title: 'Colors and Typography', desc: 'Style text with colors, fonts, and typography properties.' },
        { title: 'Box Model', desc: 'Understand and apply margin, padding, border, and content properties.' },
        { title: 'Layout with Display', desc: 'Use display properties to control element layout behavior.' },
        { title: 'Positioning Elements', desc: 'Position elements using static, relative, absolute, and fixed positioning.' },
        { title: 'Backgrounds and Borders', desc: 'Apply background images, colors, and border styles to elements.' },
        { title: 'Basic Responsive Design', desc: 'Create responsive layouts using media queries and flexible units.' },
        { title: 'CSS Pseudo-classes', desc: 'Use pseudo-classes like :hover, :focus, and :nth-child for interactive styling.' },
        { title: 'CSS Units and Values', desc: 'Work with different CSS units: px, em, rem, %, vh, vw.' },
        { title: 'CSS Inheritance', desc: 'Understand CSS inheritance and specificity rules.' }
      ]
    }
  }
};

// Generate instruction template
function generateInstructionTemplate(language, level, exerciseNum, exercise) {
  return `# ${language.name} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum}: ${exercise.title}

## 🎯 Learning Objectives
- Understand ${exercise.title.toLowerCase()} concepts
- Practice ${language.name.toLowerCase()} programming fundamentals
- Apply best practices and coding standards
- Develop problem-solving skills

## 📋 Task Description
${exercise.desc}

## 🔧 Requirements
1. Write clean, readable code
2. Follow ${language.name} best practices
3. Include appropriate comments
4. Test your solution thoroughly
5. Handle edge cases appropriately
6. Use meaningful variable/function names

## 🚀 How to Complete This Exercise

### Step 1: Write Your Code
- Open the \`${language.mainFile}\` file in the editor
- Read the task requirements carefully
- Implement your solution step by step
- Test your code frequently

### Step 2: Run Your Code
- Click the "▶️ Run" button to execute your code
- Check the output panel for results
- Debug any errors that appear
- Verify your solution works correctly

### Step 3: Test Your Solution
- Click the "🧪 Test" button to run automated tests
- Review test results and feedback
- Fix any failing tests
- Ensure all requirements are met

### Step 4: Submit
- Once all tests pass, click the "Submit" button
- Your solution will be evaluated and scored
- Review feedback for improvement opportunities

## ✅ Success Criteria
- [ ] Code runs without syntax errors
- [ ] All functional requirements met
- [ ] Proper ${language.name} syntax used
- [ ] Code is well-organized and readable
- [ ] Edge cases handled appropriately
- [ ] Best practices followed

## 📚 Key Concepts to Research
- ${exercise.title} fundamentals
- ${language.name} syntax and features
- Problem-solving strategies
- Code organization principles
- Testing and debugging techniques

## 🔍 Testing Information
Your code will be automatically tested for:
- Syntax correctness and compilation
- Functional requirement compliance
- Code structure and organization
- Performance and efficiency
- Error handling and edge cases

## 💡 Tips
- Start with a simple solution, then optimize
- Use console output for debugging
- Test with different input values
- Read error messages carefully
- Don't hesitate to research concepts you're unsure about
- Practice makes perfect!

## 🎓 Learning Resources
- Official ${language.name} documentation
- Online tutorials and guides
- Practice exercises and challenges
- Community forums and discussions
- Code examples and best practices`;
}

// Create directories and files
function createInstructionFiles() {
  const baseDir = './public/exercise';
  
  Object.entries(languages).forEach(([langKey, language]) => {
    Object.entries(language.levels).forEach(([levelKey, exercises]) => {
      exercises.forEach((exercise, index) => {
        const exerciseNum = index + 1;
        const dirPath = path.join(baseDir, langKey, levelKey, exerciseNum.toString());
        const filePath = path.join(dirPath, 'instructions.md');
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        // Generate and write instruction file
        const content = generateInstructionTemplate(language, levelKey, exerciseNum, exercise);
        fs.writeFileSync(filePath, content);
        
        console.log(`Created: ${filePath}`);
      });
    });
  });
}

// Run the script
console.log('Generating instruction files...');
createInstructionFiles();
console.log('Instruction files generated successfully!');