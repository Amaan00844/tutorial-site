import React from 'react';

const Library = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Libraries</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          A library in Python is a collection of pre-written code that you can use to perform common tasks. Python comes with a standard library, and there are also many third-party libraries available for various purposes such as data science, web development, machine learning, and more.
        </p>

        {/* Why Use Libraries */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Use Libraries?</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Save time by using reusable code.</li>
            <li>Access powerful tools and features with minimal effort.</li>
            <li>Improve code readability and maintainability.</li>
            <li>Encourage modular and structured programming.</li>
          </ul>
        </div>

        {/* Standard Libraries */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Python Standard Library</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python comes with a standard library that includes modules for handling files, mathematics, dates, and more. Some commonly used libraries in the Python standard library are:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><code>math</code> – for performing mathematical operations</li>
            <li><code>datetime</code> – to work with dates and times</li>
            <li><code>os</code> – for interacting with the operating system (files, directories, environment variables, etc.)</li>
            <li><code>random</code> – to generate random numbers and select random items</li>
            <li><code>json</code> – to handle JSON data, useful for APIs</li>
          </ul>
        </div>

        {/* Example Usage */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using the math Library</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import math

# Calculating the square root of a number
print(math.sqrt(16))    # Output: 4.0

# Accessing the constant value of pi
print(math.pi)          # Output: 3.141592653589793
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using the datetime Library</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import datetime

# Get the current date and time
current_datetime = datetime.datetime.now()
print(current_datetime)  # Output: e.g., 2025-05-06 12:34:56.789456

# Get only the date part
current_date = datetime.date.today()
print(current_date)      # Output: e.g., 2025-05-06
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using the os Library</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import os

# Get the current working directory
print(os.getcwd())  # Output: /path/to/current/directory

# List files and directories in the current directory
print(os.listdir())  # Output: List of files and directories
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using the random Library</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import random

# Generate a random number between 1 and 10
print(random.randint(1, 10))  # Output: e.g., 7

# Select a random item from a list
items = ['apple', 'banana', 'cherry']
print(random.choice(items))   # Output: e.g., 'banana'
`}
          </pre>
        </div>

        {/* Popular Third-Party Libraries */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Popular Third-Party Libraries</h2>
          <p className="mt-4 text-lg text-gray-600">You can install third-party libraries using <code>pip</code>:</p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`pip install numpy`}
          </pre>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>NumPy</strong> – for numerical computations and working with arrays</li>
            <li><strong>Pandas</strong> – for data manipulation and analysis</li>
            <li><strong>Matplotlib</strong> – for creating static, animated, and interactive visualizations</li>
            <li><strong>Requests</strong> – for making HTTP requests, useful for web scraping and API interactions</li>
            <li><strong>Flask / Django</strong> – for web development</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using NumPy</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import numpy as np

# Create a 2D array (matrix)
array = np.array([[1, 2], [3, 4]])
print(array)  # Output: [[1 2] [3 4]]

# Perform element-wise operations
result = array * 2
print(result)  # Output: [[2 4] [6 8]]
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using Pandas</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import pandas as pd

# Create a DataFrame from a dictionary
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [24, 30, 22]}
df = pd.DataFrame(data)
print(df)
# Output:
#       Name  Age
# 0    Alice   24
# 1      Bob   30
# 2  Charlie   22

# Calculate the average age
average_age = df['Age'].mean()
print(average_age)  # Output: 25.3333
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using Matplotlib</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import matplotlib.pyplot as plt

# Data for plotting
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]

# Create a simple line plot
plt.plot(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Example Plot')
plt.show()
`}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Example: Using Requests</h2>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import requests

# Make a GET request to an API
response = requests.get('https://api.github.com')
print(response.status_code)  # Output: 200 (OK)
print(response.json())        # Output: JSON data from the API
`}
          </pre>
        </div>

        {/* Conclusion */}
        <div className="mt-6">
          <p className="text-lg text-gray-600">
            Python libraries help developers build applications faster and with fewer errors. Exploring both the standard library and third-party libraries like NumPy, Pandas, and Matplotlib will enhance your productivity. Make sure to explore the vast ecosystem of libraries available to Python developers, and you will become a more efficient and powerful Python programmer.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Explore Python Libraries &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
