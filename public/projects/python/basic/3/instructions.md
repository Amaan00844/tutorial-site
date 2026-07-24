# Python List and Dictionary Operations

## 🎯 Task Description

Create a Python program that demonstrates list and dictionary operations with proper error handling.

## 📋 Requirements

1. Implement the following functions:

   - List operations (`list_operations`)
   - Dictionary operations (`dictionary_operations`)
   - Error handling demonstration (`error_handling_example`)

2. The list_operations function should:

   - Create and manipulate lists
   - Use list methods (append, extend, remove)
   - Implement list comprehension
   - Handle list operations safely

3. The dictionary_operations function should:

   - Create and manipulate dictionaries
   - Access and modify dictionary values
   - Use dictionary methods (keys, values)
   - Implement dictionary comprehension

4. Include error handling for:
   - Index errors
   - Key errors
   - Type errors
   - Other potential exceptions

## 🚀 Example Structure

```python
def list_operations():
    my_list = []
    my_list.append(1)
    my_list.extend([2, 3, 4])
    my_list.remove(2)
    squares = [x**2 for x in my_list]
    return my_list, squares

def dictionary_operations():
    my_dict = {}
    my_dict["name"] = "Alice"
    my_dict["age"] = 25
    keys = my_dict.keys()
    values = my_dict.values()
    squares_dict = {x: x**2 for x in range(5)}
    return my_dict, squares_dict

def error_handling_example():
    try:
        my_list = [1, 2, 3]
        value = my_list[5]  # This will raise an IndexError
    except IndexError as e:
        return f"Caught an error: {str(e)}"

# Test your functions
print(list_operations())
print(dictionary_operations())
print(error_handling_example())
```

## 🧪 Testing Criteria

Your code will be tested for:

- Proper implementation of list operations
- Correct dictionary manipulation
- Use of list and dictionary comprehensions
- Proper error handling
- Edge case handling

## 💡 Tips

- Test your functions with different types of data
- Consider edge cases for both lists and dictionaries
- Use Python's built-in methods effectively
- Implement proper error handling for all operations
