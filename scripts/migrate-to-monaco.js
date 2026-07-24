#!/usr/bin/env node

/**
 * Migration Script: StackBlitz to Monaco Editor
 * 
 * This script helps migrate existing exercise components from StackBlitz to Monaco Editor.
 * It scans for components using TestPlatform and provides migration suggestions.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SRC_DIR = path.join(__dirname, '..', 'src');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const PAGES_DIR = path.join(SRC_DIR, 'app');

// Migration patterns
const MIGRATION_PATTERNS = {
  imports: {
    from: "import TestPlatform from '@/components/TestPlatform';",
    to: "import MonacoTestPlatform from '@/components/MonacoTestPlatform';"
  },
  component: {
    from: '<TestPlatform',
    to: '<MonacoTestPlatform'
  },
  closing: {
    from: '</TestPlatform>',
    to: '</MonacoTestPlatform>'
  }
};

// Utility functions
function findFiles(dir, extension = '.jsx') {
  const files = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }
  
  scanDir(dir);
  return files;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const analysis = {
    path: filePath,
    usesTestPlatform: false,
    usesStackBlitz: false,
    migrationNeeded: false,
    suggestions: []
  };
  
  // Check for TestPlatform usage
  if (content.includes('TestPlatform')) {
    analysis.usesTestPlatform = true;
    analysis.migrationNeeded = true;
    analysis.suggestions.push('Replace TestPlatform with MonacoTestPlatform');
  }
  
  // Check for StackBlitz SDK usage
  if (content.includes('@stackblitz/sdk') || content.includes('sdk.')) {
    analysis.usesStackBlitz = true;
    analysis.migrationNeeded = true;
    analysis.suggestions.push('Replace StackBlitz SDK calls with Monaco equivalents');
  }
  
  // Check for Sandbox component
  if (content.includes('Sandbox') && !content.includes('MonacoSandbox')) {
    analysis.migrationNeeded = true;
    analysis.suggestions.push('Replace Sandbox with MonacoSandbox');
  }
  
  return analysis;
}

function generateMigrationPlan(analyses) {
  const plan = {
    totalFiles: analyses.length,
    filesToMigrate: analyses.filter(a => a.migrationNeeded),
    highPriority: [],
    mediumPriority: [],
    lowPriority: []
  };
  
  plan.filesToMigrate.forEach(analysis => {
    if (analysis.usesTestPlatform && analysis.usesStackBlitz) {
      plan.highPriority.push(analysis);
    } else if (analysis.usesTestPlatform) {
      plan.mediumPriority.push(analysis);
    } else {
      plan.lowPriority.push(analysis);
    }
  });
  
  return plan;
}

function createBackup(filePath) {
  const backupPath = filePath + '.backup';
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

function migrateFile(filePath, dryRun = true) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let changes = [];
  
  // Replace imports
  if (newContent.includes(MIGRATION_PATTERNS.imports.from)) {
    newContent = newContent.replace(
      MIGRATION_PATTERNS.imports.from,
      MIGRATION_PATTERNS.imports.to
    );
    changes.push('Updated import statement');
  }
  
  // Replace component usage
  if (newContent.includes(MIGRATION_PATTERNS.component.from)) {
    newContent = newContent.replace(
      new RegExp(MIGRATION_PATTERNS.component.from, 'g'),
      MIGRATION_PATTERNS.component.to
    );
    changes.push('Updated component usage');
  }
  
  if (newContent.includes(MIGRATION_PATTERNS.closing.from)) {
    newContent = newContent.replace(
      new RegExp(MIGRATION_PATTERNS.closing.from, 'g'),
      MIGRATION_PATTERNS.closing.to
    );
    changes.push('Updated closing tag');
  }
  
  if (!dryRun && changes.length > 0) {
    createBackup(filePath);
    fs.writeFileSync(filePath, newContent);
  }
  
  return { changes, newContent };
}

// Main execution
function main() {
  console.log('🔍 Scanning for files that need migration...\n');
  
  // Find all relevant files
  const componentFiles = findFiles(COMPONENTS_DIR);
  const pageFiles = findFiles(PAGES_DIR);
  const allFiles = [...componentFiles, ...pageFiles];
  
  console.log(`Found ${allFiles.length} files to analyze\n`);
  
  // Analyze each file
  const analyses = allFiles.map(analyzeFile);
  const plan = generateMigrationPlan(analyses);
  
  // Display results
  console.log('📊 Migration Analysis Results:');
  console.log('================================');
  console.log(`Total files scanned: ${plan.totalFiles}`);
  console.log(`Files needing migration: ${plan.filesToMigrate.length}`);
  console.log(`High priority: ${plan.highPriority.length}`);
  console.log(`Medium priority: ${plan.mediumPriority.length}`);
  console.log(`Low priority: ${plan.lowPriority.length}\n`);
  
  // High priority files
  if (plan.highPriority.length > 0) {
    console.log('🔴 HIGH PRIORITY (TestPlatform + StackBlitz):');
    plan.highPriority.forEach(analysis => {
      console.log(`  📄 ${path.relative(SRC_DIR, analysis.path)}`);
      analysis.suggestions.forEach(suggestion => {
        console.log(`    • ${suggestion}`);
      });
    });
    console.log();
  }
  
  // Medium priority files
  if (plan.mediumPriority.length > 0) {
    console.log('🟡 MEDIUM PRIORITY (TestPlatform only):');
    plan.mediumPriority.forEach(analysis => {
      console.log(`  📄 ${path.relative(SRC_DIR, analysis.path)}`);
      analysis.suggestions.forEach(suggestion => {
        console.log(`    • ${suggestion}`);
      });
    });
    console.log();
  }
  
  // Low priority files
  if (plan.lowPriority.length > 0) {
    console.log('🟢 LOW PRIORITY (Other components):');
    plan.lowPriority.forEach(analysis => {
      console.log(`  📄 ${path.relative(SRC_DIR, analysis.path)}`);
      analysis.suggestions.forEach(suggestion => {
        console.log(`    • ${suggestion}`);
      });
    });
    console.log();
  }
  
  // Migration commands
  console.log('🛠️  Migration Commands:');
  console.log('=======================');
  console.log('To perform automatic migration:');
  console.log(`node ${__filename} --migrate`);
  console.log(`node ${__filename} --migrate --file=path/to/specific/file.jsx`);
  console.log();
  console.log('To preview changes without applying:');
  console.log(`node ${__filename} --preview`);
  console.log();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--migrate')) {
    const specificFile = args.find(arg => arg.startsWith('--file='));
    
    if (specificFile) {
      const filePath = specificFile.split('=')[1];
      const fullPath = path.resolve(filePath);
      
      if (fs.existsSync(fullPath)) {
        console.log(`🔧 Migrating ${filePath}...`);
        const result = migrateFile(fullPath, false);
        
        if (result.changes.length > 0) {
          console.log('✅ Migration completed:');
          result.changes.forEach(change => console.log(`  • ${change}`));
          console.log(`📁 Backup created: ${filePath}.backup`);
        } else {
          console.log('ℹ️  No changes needed');
        }
      } else {
        console.error(`❌ File not found: ${filePath}`);
      }
    } else {
      console.log('���� Migrating all files...');
      let migratedCount = 0;
      
      plan.filesToMigrate.forEach(analysis => {
        const result = migrateFile(analysis.path, false);
        if (result.changes.length > 0) {
          migratedCount++;
          console.log(`✅ ${path.relative(SRC_DIR, analysis.path)}`);
        }
      });
      
      console.log(`\n🎉 Migration completed! ${migratedCount} files updated.`);
      console.log('📁 Backup files created with .backup extension');
    }
  } else if (args.includes('--preview')) {
    console.log('👀 Preview Mode - No files will be modified\n');
    
    plan.filesToMigrate.forEach(analysis => {
      console.log(`📄 ${path.relative(SRC_DIR, analysis.path)}:`);
      const result = migrateFile(analysis.path, true);
      
      if (result.changes.length > 0) {
        result.changes.forEach(change => console.log(`  ✓ ${change}`));
      } else {
        console.log('  ℹ️  No automatic changes available');
      }
      console.log();
    });
  }
  
  // Final recommendations
  console.log('💡 Recommendations:');
  console.log('===================');
  console.log('1. Start with high-priority files first');
  console.log('2. Test each migrated component thoroughly');
  console.log('3. Keep StackBlitz components as fallback during transition');
  console.log('4. Update any custom StackBlitz SDK usage manually');
  console.log('5. Consider gradual rollout to users');
  console.log();
  console.log('📚 For detailed migration guide, see: MONACO_IMPLEMENTATION.md');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  analyzeFile,
  migrateFile,
  generateMigrationPlan
};