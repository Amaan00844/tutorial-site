# List and Dictionary Operations

def list_operations():
    """Demonstrate various list operations."""
    try:
        # Create and manipulate list
        my_list = []
        my_list.append(1)
        my_list.extend([2, 3, 4])
        my_list.remove(2)
        
        # List comprehension
        squares = [x**2 for x in my_list]
        
        return my_list, squares
    except Exception as e:
        raise ValueError(f"Error in list operations: {str(e)}")

def dictionary_operations():
    """Demonstrate various dictionary operations."""
    try:
        # Create and manipulate dictionary
        my_dict = {}
        my_dict["name"] = "Alice"
        my_dict["age"] = 25
        
        # Dictionary methods
        keys = my_dict.keys()
        values = my_dict.values()
        
        # Dictionary comprehension
        squares_dict = {x: x**2 for x in range(5)}
        
        return my_dict, squares_dict
    except Exception as e:
        raise ValueError(f"Error in dictionary operations: {str(e)}")

def error_handling_example():
    """Demonstrate error handling in Python."""
    try:
        # Operations that might raise errors
        my_list = [1, 2, 3]
        value = my_list[5]  # This will raise an IndexError
        return value
    except IndexError as e:
        return f"Caught an IndexError: {str(e)}"
    except KeyError as e:
        return f"Caught a KeyError: {str(e)}"
    except Exception as e:
        return f"Caught an unexpected error: {str(e)}"
