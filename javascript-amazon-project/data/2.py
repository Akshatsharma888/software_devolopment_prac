import os

def list_all_folders(main_directory):
    """
    Lists all folder names within the specified main directory, including subdirectories.

    Parameters:
    main_directory (str): The path to the main directory from which to list folder names.

    Returns:
    list: A list of folder names.
    """
    folder_names = []

    # Check if the main directory exists
    if not os.path.exists(main_directory):
        print(f"The directory {main_directory} does not exist.")
        return folder_names

    # Check if the main directory is accessible
    if not os.access(main_directory, os.R_OK):
        print(f"The directory {main_directory} is not accessible.")
        return folder_names

    # Print the contents of the main directory
    print(f"Contents of {main_directory}: {os.listdir(main_directory)}")

    # Walk through the directory
    for root, dirs, files in os.walk(main_directory):
        print(f"Current root: {root}")
        print(f"Directories: {dirs}")
        for dir_name in dirs:
            # Append only the directory name, not the full path
            folder_names.append(dir_name)
    
    return folder_names

# Specify the main directory path
main_directory_path = 'D:\\main_carrier_info\\certifications_folder'

# Get the list of all folder names
all_folder_names = list_all_folders(main_directory_path)

# Print the folder names
print("Folder names:")
for folder in all_folder_names:
    print(folder)