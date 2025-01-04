# Obsidian.md To-Do List Translator

This project is a React Native application designed to integrate with Obsidian.md. The app reads `.md` (Markdown) files and translates their contents into interactive to-do lists, streamlining task management for users.

## Features
- 📄 **Markdown Parsing**: Read `.md` files from Obsidian and extract to-do items.
- ✅ **Interactive To-Do Lists**: Convert markdown checkboxes into interactive elements within the app.
- 🔄 **Sync with Obsidian**: Updates made in the app reflect directly in the `.md` files.
- 📂 **File Management**: Easily open and manage different vaults or files.
- 🌙 **Dark Mode**: Full support for dark mode.

## Requirements
- Node.js (>= 14.x)
- React Native environment (Expo recommended)
- Obsidian.md (installed on the user's system)

## Installation

1. **Clone the Repository**
```bash
 git clone [https://github.com/yourusername/obsidian-todo-app.git](https://github.com/lemessdavi/obsidian-todolist)
```
2. **Navigate to the Project**
```bash
 cd obsidian-todolist
```
3. **Install Dependencies**
```bash
 npm install
```
4. **Start the Development Server**
```bash
 expo start
```

## Configuration

### File Access
- Ensure Obsidian vault paths are correctly configured.
- The app will request access to the file system to read `.md` files.

### Permissions
- iOS: Add the following to `Info.plist`:
```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Access to files for to-do synchronization.</string>
```
- Android: Add the following to `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```

## Usage
1. Launch the app and select the Obsidian vault to sync.
2. Choose the `.md` file containing to-do items.
3. Edit to-dos directly within the app and sync changes.
4. Mark tasks as complete and track progress.

## Roadmap
- [ ] File auto-syncing in the background
- [ ] Support for nested to-do lists
- [ ] Calendar integration

## Contributing
Pull requests are welcome. For major changes, open an issue to discuss the proposed improvements.

## License
MIT License. See `LICENSE` for details.

---

Happy organizing! 🚀

