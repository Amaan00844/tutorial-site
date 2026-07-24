# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Skill-Bridge** is a modern interactive study portal built with Next.js 15, designed to teach programming concepts across multiple technologies including React, Express, Node.js, MongoDB, PHP, Java, Python, CSS, HTML, and JavaScript. The platform features an integrated Monaco Editor-based coding environment with real-time testing capabilities.

## Development Commands

### Core Development
```bash
# Start development server with Turbo
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Test Management Scripts
The repository includes several utility scripts for managing the exercise system:

```bash
# Create simple test files for all languages
node create-simple-tests.js

# Fix existing test files
node fix-tests.js

# Replace all test implementations
node replace-all-tests.js

# Restore Node.js specific tests
node restore_nodejs_tests.js

# Update Next.js test files
node update-nextjs-tests.js

# Generate exercise instructions
node generate-instructions.js
```

## Architecture Overview

### Next.js App Router Structure
- Uses Next.js 15 with App Router (`src/app/`)
- Each subject/topic has dedicated page routes following the pattern `/[Subject][Topic]/page.jsx`
- Global layout in `src/app/layout.jsx` with metadata and client-side layout wrapper

### Component Architecture

#### Core Layout Components
- **ClientLayout**: Manages global layout, navigation, footer, and conditional chatbot rendering
- **Navbar**: Main navigation component
- **Footer**: Global footer component
- **GeminiChat**: AI chatbot component (conditionally rendered based on route)

#### Exercise System Components
- **MonacoTestPlatform**: Central platform managing the Monaco editor-based exercise environment
- **MonacoSandboxes/**: Individual sandbox components for each programming language
  - `JavaScriptSandbox`, `PythonSandbox`, `HTMLSandbox`, `CSSSandbox`, `ReactSandbox`, etc.
  - `GenericSandbox`: Base sandbox component with common functionality
- **Exercise/**: Language-specific exercise components with Monaco integration
  - Pattern: `[Language]Monaco.jsx` (e.g., `CssMonaco.jsx`, `JavascriptMonaco.jsx`)

#### Content Components
- **[Language]FullContent/**: Complete tutorial content and sidebar navigation for each language
- **BestPractice/**: Best practice guides for each technology
- **Sidebar components**: Navigation and menu systems for different subjects

### Monaco Editor Integration

#### Key Features
- Real-time code editing with syntax highlighting
- Multi-language support (JavaScript, Python, HTML, CSS, React, Node.js, etc.)
- Integrated testing system with immediate feedback
- File system simulation for multi-file projects
- Custom themes and editor configuration

#### Testing Architecture
- Tests are executed in-browser using dynamic function execution
- Results are stored in virtual files (`results.tests`, `attempts.tests`)
- Exercise submission system prevents multiple submissions
- Score tracking and progress monitoring
- Three difficulty levels: basic, intermediate, hard

#### Exercise Structure
Each exercise follows a consistent pattern:
- **Task description**: Clear learning objectives
- **Starter files**: Pre-configured code templates
- **Test files**: Automated validation logic
- **Difficulty progression**: From basic concepts to advanced implementations

### Data Flow
1. **Exercise Selection**: User selects topic/difficulty from sidebar menu
2. **File Loading**: Monaco sandbox loads appropriate starter files and tests
3. **Code Editing**: User writes code in Monaco editor
4. **Test Execution**: In-browser test runner validates solution
5. **Result Processing**: Success/failure feedback with detailed scoring
6. **Progress Tracking**: Submission state management and exercise completion tracking

### Styling and UI
- **Tailwind CSS**: Primary styling framework with version 4.1.4
- **Framer Motion**: Animations and interactive elements
- **Custom Icons**: React Icons and Heroicons for consistent iconography
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Working with Exercises

### Adding New Exercises
1. Create exercise files in the appropriate language directory structure
2. Follow the naming convention: `[language]/[difficulty]/[number]/`
3. Include starter code and corresponding test file
4. Update the exercise menu arrays in Monaco components

### Creating Language Sandboxes
1. Extend `GenericSandbox` for new language support
2. Configure language-specific settings (file extensions, test runners)
3. Add the new sandbox to `MonacoSandboxes/index.js` exports
4. Update `MonacoTestPlatform` language mapping

### Modifying Test Systems
- Test files use browser-compatible JavaScript for execution
- Global `window.exerciseTest` object provides test interface
- Results must follow the standard format: `{score, passed, details, message}`

## Key Dependencies

### Core Framework
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **Monaco Editor**: `@monaco-editor/react` for code editing

### Development Tools
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and style enforcement
- **PostCSS**: CSS processing pipeline

### Enhanced Features
- **Framer Motion**: Animation library
- **Axios**: HTTP client for API interactions
- **React Hot Toast**: Toast notifications
- **Google Generative AI**: AI chatbot integration

## Project-Specific Patterns

### File Naming Conventions
- Page components: `[Subject][Topic]/page.jsx`
- Monaco components: `[Language]Monaco.jsx`
- Sidebar components: `[subject]Sidebar.jsx` or `Sidebar[subject].jsx`
- Content components: `[Language][Feature].jsx`

### Component Structure
- All client-side interactive components use `"use client"` directive
- Consistent prop patterns: `{setSidebarContent, menuItems, files, task, title, language}`
- Exercise components return file objects and metadata

### State Management
- Local state management with React hooks
- Exercise progress stored in localStorage
- Submission tracking via Set data structures
- Global Monaco sandbox interface via `window.monacoSandbox`

## Development Guidelines

### When Adding New Features
1. **Maintain consistency** with existing component patterns
2. **Update related components** if modifying exercise structure
3. **Test across different languages** when modifying Monaco integration
4. **Follow the established file organization** in `src/` directory

### When Debugging Monaco Issues
1. Check `window.monacoSandbox` global object for file system state
2. Verify test file loading in browser network tab
3. Monitor console for dynamic function execution errors
4. Validate exercise file structure matches expected patterns

### When Modifying Layouts
1. Consider responsive design across mobile and desktop
2. Test chatbot visibility logic in `ClientLayout`
3. Verify navigation state management
4. Check Tailwind class consistency