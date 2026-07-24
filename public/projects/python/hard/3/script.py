# Automated Testing Example

import pytest
from typing import Dict, List, Any

@pytest.fixture
def sample_data() -> Dict[str, Any]:
    """Provide sample data for tests."""
    return {
        'numbers': [1, 2, 3, 4, 5],
        'text': 'Hello, World!',
        'dict': {'key': 'value'}
    }

def test_list_operations(sample_data: Dict[str, Any]) -> None:
    """Test list operations."""
    numbers: List[int] = sample_data['numbers']
    
    # Test basic list operations
    assert len(numbers) == 5, "List length should be 5"
    assert sum(numbers) == 15, "Sum should be 15"
    assert min(numbers) == 1, "Minimum should be 1"
    assert max(numbers) == 5, "Maximum should be 5"
    
    # Test list modifications
    numbers.append(6)
    assert len(numbers) == 6, "List length should be 6 after append"
    assert numbers[-1] == 6, "Last element should be 6"

def test_string_operations(sample_data: Dict[str, Any]) -> None:
    """Test string operations."""
    text: str = sample_data['text']
    
    # Test string methods
    assert len(text) == 13, "String length should be 13"
    assert text.upper() == 'HELLO, WORLD!', "Upper case conversion failed"
    assert text.lower() == 'hello, world!', "Lower case conversion failed"
    assert text.split(',') == ['Hello', ' World!'], "Split operation failed"

def test_dict_operations(sample_data: Dict[str, Any]) -> None:
    """Test dictionary operations."""
    test_dict: Dict[str, str] = sample_data['dict']
    
    # Test dictionary operations
    assert test_dict['key'] == 'value', "Dictionary access failed"
    test_dict['new_key'] = 'new_value'
    assert len(test_dict) == 2, "Dictionary length should be 2"
    assert 'new_key' in test_dict, "New key should be in dictionary"

@pytest.mark.parametrize("input_val,expected", [
    (2, 4),
    (3, 9),
    (4, 16),
    (5, 25)
])
def test_square_numbers(input_val: int, expected: int) -> None:
    """Test squaring numbers with different inputs."""
    assert input_val * input_val == expected, f"Square of {input_val} should be {expected}"

def test_error_handling() -> None:
    """Test error handling."""
    # Test division by zero
    with pytest.raises(ZeroDivisionError):
        1 / 0
    
    # Test index error
    with pytest.raises(IndexError):
        [1, 2, 3][10]
    
    # Test key error
    with pytest.raises(KeyError):
        {'a': 1}['b']
