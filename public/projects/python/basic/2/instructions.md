# Python File Organizer

## 🎯 Task Description
Create a Python script that organizes files into folders based on their extensions.

## 📋 Requirements
1. Create a function that organizes files:
   - Take directory path as input parameter
   - Create folders for different file types
   - Move files to appropriate folders

2. Use these modules:
   - `os` for file/directory operations
   - `shutil` for moving files

3. Handle these operations:
   - Extract file extensions
   - Create folders if they don't exist
   - Move files to appropriate folders
   - Handle existing folders

4. Include error handling for:
   - Invalid paths
   - Permission issues
   - File operation errors

## 🚀 Example Structure
```python
import os
import shutil

def organize_files(directory):
    """Organize files in the given directory by their extensions."""
    try:
        # Get list of files
        files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        
        for file in files:
            # Get file extension
            _, ext = os.path.splitext(file)
            ext = ext[1:].lower()  # Remove dot and convert to lowercase
            
            if ext:
                # Create folder if it doesn't exist
                folder = os.path.join(directory, ext)
                if not os.path.exists(folder):
                    os.makedirs(folder)
                
                # Move file to appropriate folder
                src = os.path.join(directory, file)
                dst = os.path.join(folder, file)
                shutil.move(src, dst)
                print(f"Moved {file} to {ext} folder")
                
    except Exception as e:
        print(f"Error: {e}")

# Example usage (commented out to avoid I/O operations):
# organize_files("path/to/directory")
```

## 🧪 Testing Criteria
Your code will be tested for:
- Proper use of os and shutil modules
- File extension handling
- Directory creation
- File moving operations
- Error handling
- Existence checks

## 💡 Tips
- Test with different file extensions
- Handle cases where folders exist
- Use proper error handling
- Follow Python naming conventions
- Add comments to explain the logic
