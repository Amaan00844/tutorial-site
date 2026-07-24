import os
import shutil

def organize_files(directory):
    """Organize files in the given directory by their extensions."""
    try:
        # Validate directory path
        if not os.path.exists(directory):
            raise ValueError("Directory does not exist")
        if not os.path.isdir(directory):
            raise ValueError("Path is not a directory")

        # Get list of files (excluding directories)
        files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        
        for file in files:
            # Get file extension
            _, ext = os.path.splitext(file)
            ext = ext[1:].lower()  # Remove dot and convert to lowercase
            
            # Skip files without extension
            if ext:
                # Create folder if it doesn't exist
                folder = os.path.join(directory, ext)
                if not os.path.exists(folder):
                    os.makedirs(folder)
                
                # Move file to appropriate folder
                src = os.path.join(directory, file)
                dst = os.path.join(folder, file)
                
                # Handle case where file with same name exists in destination
                if os.path.exists(dst):
                    base, extension = os.path.splitext(file)
                    counter = 1
                    while os.path.exists(dst):
                        new_name = f"{base}_{counter}{extension}"
                        dst = os.path.join(folder, new_name)
                        counter += 1
                
                shutil.move(src, dst)
                print(f"Moved {file} to {ext} folder")
                
    except PermissionError:
        print("Error: Permission denied. Make sure you have the required permissions.")
    except Exception as e:
        print(f"Error: {e}")
