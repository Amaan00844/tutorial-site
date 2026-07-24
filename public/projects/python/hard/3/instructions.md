# Python Automated Testing

## 🎯 Task Description

Create a comprehensive test suite using pytest for a Python application.

## 📋 Requirements

1. Implement test functions:

   - Test list operations
   - Test string operations
   - Test dictionary operations
   - Create parametrized tests

2. Use pytest features:

   - Fixtures for test data
   - Parametrize for multiple test cases
   - Assert statements
   - Error testing

3. Include testing for:
   - Basic functionality
   - Edge cases
   - Error conditions

## 🚀 Example Structure

```python
import pytest

@pytest.fixture
def sample_data():
    return {
        'numbers': [1, 2, 3, 4, 5],
        'text': 'Hello, World!',
        'dict': {'key': 'value'}
    }

def test_list_operations(sample_data):
    numbers = sample_data['numbers']
    assert len(numbers) == 5
    assert sum(numbers) == 15
    assert min(numbers) == 1
    assert max(numbers) == 5

def test_string_operations(sample_data):
    text = sample_data['text']
    assert len(text) == 13
    assert text.upper() == 'HELLO, WORLD!'
    assert text.split(',') == ['Hello', ' World!']

@pytest.mark.parametrize("input,expected", [
    (2, 4),
    (3, 9),
    (4, 16),
    (5, 25)
])
def test_square_numbers(input, expected):
    assert input * input == expected

def test_error_handling():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```

## 🧪 Testing Criteria

Your code will be tested for:

- Proper test function implementation
- Use of pytest fixtures
- Parametrized test implementation
- Error testing
- Test coverage

## 💡 Tips

- Write clear, focused test functions
- Use descriptive test names
- Test both valid and invalid cases
- Use pytest's built-in features
- Follow testing best practices
