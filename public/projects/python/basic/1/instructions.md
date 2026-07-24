# Python Calculator App

## 🎯 Task Description
Create a simple calculator application in Python that can perform basic arithmetic operations.

## 📋 Requirements
1. Implement the following functions:
   - Addition (`add` or `addition`)
   - Subtraction (`sub` or `subtract`)
   - Multiplication (`mul` or `multiply`)
   - Division (`div` or `divide`)

2. Each function should:
   - Take two numbers as input parameters
   - Return the result of the operation
   - Handle invalid inputs appropriately

3. Include error handling for:
   - Division by zero
   - Invalid numeric inputs
   - Other potential errors

## 🚀 Example Structure
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# Test your functions
print(add(5, 3))      # Should print 8
print(subtract(5, 3))  # Should print 2
print(multiply(5, 3))  # Should print 15
print(divide(6, 2))    # Should print 3.0
```

## 🧪 Testing Criteria
Your code will be tested for:
- Presence of all required functions
- Proper error handling
- Function implementation correctness
- Edge cases handling

## 💡 Tips
- Test your calculator with different types of numbers
- Consider edge cases like division by zero
- Use clear variable names and add comments
- Follow Python naming conventions
