'use client';

import { useEffect } from 'react';
import sdk from '@stackblitz/sdk';

export default function HtmlSandbox({ sendFuncToParent }) {
  const containerId = 'stackblitz-container'; // Avoid spaces in ID

  useEffect(() => {
    const initialize = async () => {
      const response = await fetch(`/exercise/html/basic/1/instructions.md`);
      const instructions = await response.text();
      // Embed the project
      sdk.embedProject(
        containerId,
        {
          files: {
            'index.html': '',
            'tests.js': '',
            'Instructions.md': instructions,
            'package.json': `{
  "name": "code4bharat-trybox",
  "scripts": {
    "test": "node tests.js",
    "start": "servor --reload"
  },
  "dependencies": {
    "cheerio": "^1.0.0",
    "htmlhint": "^1.1.4",
    "servor": "^4.0.2"
  }
}`
          },
          title: 'Code4Bharat Sandbox',
          description: 'Try MERN right in your Browser',
          template: 'node',
        },
        {
          openFile: 'index.html,Instructions.md',
          view: 'console',
          hideDevTools: false,
          theme: 'light',
          // hideExplorer: true,
          settings: {
            compile: { trigger: 'save' }
          }
        }
      );
    };

    initialize();
  }, [sendFuncToParent]); // Only run once

  return (<>
    <div id={containerId} className="w-screen h-[calc(100vh-5rem)]" />
    </>
  );
}
