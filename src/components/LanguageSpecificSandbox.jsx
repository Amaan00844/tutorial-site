'use client';

import { JavaScriptSandbox, PythonSandbox, HTMLSandbox, GenericSandbox } from './MonacoSandboxes';

export default function LanguageSpecificSandbox({ 
  language = 'javascript',
  filesObj, 
  fileToOpen, 
  onLoad, 
  hideExplorer = true 
}) {
  
  // Determine which sandbox to use based on language
  const getSandboxComponent = () => {
    switch (language.toLowerCase()) {
      case 'javascript':
      case 'js':
        return (
          <JavaScriptSandbox
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'python':
      case 'py':
        return (
          <PythonSandbox
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'html':
        return (
          <HTMLSandbox
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'css':
        return (
          <GenericSandbox
            language="css"
            languageDisplayName="CSS"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'react':
      case 'jsx':
        return (
          <GenericSandbox
            language="javascript"
            languageDisplayName="React"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'nodejs':
      case 'node':
        return (
          <GenericSandbox
            language="javascript"
            languageDisplayName="Node.js"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'nextjs':
      case 'next':
        return (
          <GenericSandbox
            language="javascript"
            languageDisplayName="Next.js"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'express':
        return (
          <GenericSandbox
            language="javascript"
            languageDisplayName="Express.js"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'sql':
        return (
          <GenericSandbox
            language="sql"
            languageDisplayName="SQL"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'mysql':
        return (
          <GenericSandbox
            language="sql"
            languageDisplayName="MySQL"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'mongodb':
      case 'mongo':
        return (
          <GenericSandbox
            language="javascript"
            languageDisplayName="MongoDB"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'java':
        return (
          <GenericSandbox
            language="java"
            languageDisplayName="Java"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      case 'php':
        return (
          <GenericSandbox
            language="php"
            languageDisplayName="PHP"
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
        
      default:
        return (
          <GenericSandbox
            language={language}
            languageDisplayName={language.charAt(0).toUpperCase() + language.slice(1)}
            filesObj={filesObj}
            fileToOpen={fileToOpen}
            onLoad={onLoad}
            hideExplorer={hideExplorer}
          />
        );
    }
  };

  return getSandboxComponent();
}