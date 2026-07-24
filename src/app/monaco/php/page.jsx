"use client";

import { PHPSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function PHPMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default PHP files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/php/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'index.php': '<?php\n// Write your PHP code here\necho "Hello, PHP!\\n";\n\n// Example: Variables and Data Types\n$message = "Welcome to PHP";\n$number = 42;\n$isActive = true;\n$price = 99.99;\n$items = array("apple", "banana", "orange");\n\necho "Message: " . $message . "\\n";\necho "Number: " . $number . "\\n";\necho "Is Active: " . ($isActive ? "true" : "false") . "\\n";\necho "Price: $" . $price . "\\n";\n\n// Example: Array operations\necho "Items: " . implode(", ", $items) . "\\n";\necho "Item count: " . count($items) . "\\n";\n\n// Example: Associative array\n$person = array(\n    "name" => "John Doe",\n    "age" => 30,\n    "email" => "john@example.com",\n    "city" => "New York"\n);\n\necho "\\nPerson Information:\\n";\nforeach ($person as $key => $value) {\n    echo ucfirst($key) . ": " . $value . "\\n";\n}\n\n// Example: Function\nfunction greetUser($name, $age = null) {\n    $greeting = "Hello, " . $name . "!";\n    if ($age !== null) {\n        $greeting .= " You are " . $age . " years old.";\n    }\n    return $greeting;\n}\n\necho "\\n" . greetUser("Developer") . "\\n";\necho greetUser("Alice", 25) . "\\n";\n\n// Example: Class\nclass Calculator {\n    private $result = 0;\n    \n    public function add($number) {\n        $this->result += $number;\n        return $this;\n    }\n    \n    public function subtract($number) {\n        $this->result -= $number;\n        return $this;\n    }\n    \n    public function multiply($number) {\n        $this->result *= $number;\n        return $this;\n    }\n    \n    public function getResult() {\n        return $this->result;\n    }\n    \n    public function reset() {\n        $this->result = 0;\n        return $this;\n    }\n}\n\n// Example: Object usage\n$calc = new Calculator();\n$result = $calc->add(10)->multiply(2)->subtract(5)->getResult();\necho "\\nCalculation result: " . $result . "\\n";\n\n// Example: String manipulation\n$text = "  PHP is a powerful scripting language  ";\necho "\\nOriginal: \'" . $text . "\'";\necho "\\nTrimmed: \'" . trim($text) . "\'";\necho "\\nUppercase: " . strtoupper(trim($text)) . "\\n";\necho "\\nWord count: " . str_word_count(trim($text)) . "\\n";\n\n// Example: Date and time\necho "\\nCurrent date: " . date("Y-m-d H:i:s") . "\\n";\necho "Timestamp: " . time() . "\\n";\n\n// Example: Conditional statements\n$score = 85;\nif ($score >= 90) {\n    $grade = "A";\n} elseif ($score >= 80) {\n    $grade = "B";\n} elseif ($score >= 70) {\n    $grade = "C";\n} else {\n    $grade = "F";\n}\n\necho "\\nScore: " . $score . ", Grade: " . $grade . "\\n";\n\n// Example: Loop\necho "\\nCounting to 5:\\n";\nfor ($i = 1; $i <= 5; $i++) {\n    echo "Count: " . $i . "\\n";\n}\n\necho "\\nPHP version: " . phpversion() . "\\n";\necho "Script completed successfully!\\n";\n?>',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'index.php': '<?php\n// Write your PHP code here\necho "Hello, PHP!";\n\n$name = "World";\necho "\\nHello, " . $name . "!";\n?>',
          'tests.js': '// Test file not available'
        });
        setIsLoading(false);
      }
    };

    loadFiles();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PHP Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🐘 PHP Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test PHP server-side code</p>
      </div>
      <PHPSandbox
        filesObj={files}
        fileToOpen="index.php"
        hideExplorer={false}
        onLoad={() => console.log('PHP Monaco Editor loaded')}
      />
    </div>
  );
}