import os

# --- CONFIGURATION (The Filter) ---
output_filename = "FULL_PROJECT_CODE.txt"
# Only scan files with these extensions (The "Good" materials)
valid_extensions = ['.js', '.jsx', '.css', '.md', '.sql', '.json', '.html']
# Ignore these folders (The "Scrap" bin)
ignore_folders = ['node_modules', '.git', 'dist', 'build', '.next', 'coverage']
# Ignore these specific files
ignore_files = ['package-lock.json', 'scanner.py', '.DS_Store', '.env']

def scan_project():
    print(f"⚙️  Starting Project Scan...")
    
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        # Write a header
        outfile.write(f"EDUMALL PLATFORM - SOURCE CODE SCAN\n")
        outfile.write(f"===================================\n\n")

        # Walk through the directory tree
        for root, dirs, files in os.walk("."):
            # specific logic to skip the 'ignore_folders'
            dirs[:] = [d for d in dirs if d not in ignore_folders]
            
            for file in files:
                # Check if it's a valid file type and not ignored
                if any(file.endswith(ext) for ext in valid_extensions) and file not in ignore_files:
                    file_path = os.path.join(root, file)
                    
                    # Read and write the file
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            content = infile.read()
                            # Write file marker
                            outfile.write(f"\n\n{'='*60}\n")
                            outfile.write(f"FILE PATH: {file_path}\n")
                            outfile.write(f"{'='*60}\n")
                            outfile.write(content)
                            print(f"  [+] Scanned: {file_path}")
                    except Exception as e:
                        print(f"  [!] Skipped (Error): {file_path}")

    print(f"\n✅ SUCCESS! All code is stitched into: {output_filename}")

if __name__ == "__main__":
    scan_project()