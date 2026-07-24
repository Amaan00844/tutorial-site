"use client";

import { JavaSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function JavaMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default Java files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/java/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'Main.java': '// Write your Java code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n        \n        // Example: Variables and Data Types\n        String message = "Welcome to Java";\n        int number = 42;\n        boolean isActive = true;\n        double price = 99.99;\n        \n        System.out.println("Message: " + message);\n        System.out.println("Number: " + number);\n        System.out.println("Is Active: " + isActive);\n        System.out.println("Price: $" + price);\n        \n        // Example: Method call\n        greetUser("Developer");\n        \n        // Example: Array\n        int[] numbers = {1, 2, 3, 4, 5};\n        System.out.println("Array length: " + numbers.length);\n        \n        // Example: Loop\n        System.out.println("Numbers:");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println("  " + numbers[i]);\n        }\n        \n        // Example: Object creation\n        Person person = new Person("John Doe", 30);\n        person.introduce();\n    }\n    \n    // Example method\n    public static void greetUser(String name) {\n        System.out.println("Hello, " + name + "! Welcome to Java programming.");\n    }\n}\n\n// Example class\nclass Person {\n    private String name;\n    private int age;\n    \n    // Constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    // Getter methods\n    public String getName() {\n        return name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n    \n    // Setter methods\n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public void setAge(int age) {\n        if (age >= 0) {\n            this.age = age;\n        }\n    }\n    \n    // Method\n    public void introduce() {\n        System.out.println("Hi, I\'m " + name + " and I\'m " + age + " years old.");\n    }\n    \n    // Override toString method\n    @Override\n    public String toString() {\n        return "Person{name=\'" + name + "\', age=" + age + "}";\n    }\n}',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'Main.java': 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
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
          <p className="text-gray-600">Loading Java Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">☕ Java Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test Java applications</p>
      </div>
      <JavaSandbox
        filesObj={files}
        fileToOpen="Main.java"
        hideExplorer={false}
        onLoad={() => console.log('Java Monaco Editor loaded')}
      />
    </div>
  );
}