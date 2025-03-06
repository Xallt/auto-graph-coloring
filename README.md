# 🎨 Auto Graph Coloring for Obsidian

![GitHub release](https://img.shields.io/github/v/release/Xallt/auto-graph-coloring)
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22auto-graph-coloring%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
![License](https://img.shields.io/github/license/Xallt/auto-graph-coloring)

> Automatically assign visually distinct colors to groups in your Obsidian graph view with a single command.

<img width="1132" alt="image" src="https://github.com/user-attachments/assets/097d3fe1-10c8-4d33-81a1-402a0c8383cb" />


## ✨ Features

- 🎯 **One-Click Coloring**: Add the "Auto Color Groups" command to your command palette
- 🌈 **Visually Distinct Colors**: Uses a golden ratio algorithm to maximize color differences
- 🔄 **Works Everywhere**: Compatible with both global and local graph views
- 🧠 **Smart Algorithm**: Colors are as different as possible for easy group identification

## 🚀 Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Go to Community Plugins and disable Safe Mode if necessary
3. Click "Browse" and search for "Auto Graph Coloring"
4. Click "Install" and then "Enable"

### Manual Installation

1. Download the latest release from the [GitHub releases page](https://github.com/Xallt/auto-graph-coloring/releases/latest)
2. Extract the files to your vault's `.obsidian/plugins/auto-graph-coloring` directory
3. Restart Obsidian and enable the plugin in Settings → Community Plugins

## 📖 How to Use

1. **Create Groups**: 
   - Open the graph view in Obsidian
   - Click on the "Groups" section in the graph settings
   - Add groups based on folders, tags, or custom queries

2. **Apply Colors**:
   - Press `Ctrl+P` (or `Cmd+P` on Mac) to open the command palette
   - Search for "Auto Color Groups" and select it
   - Watch as your groups instantly get assigned distinct colors!

## 🔍 How It Works

The plugin uses the golden ratio conjugate (approximately 0.618033988749895) to generate colors with maximum visual distinction. This mathematical approach ensures that each color is as different as possible from the others, making it easier to distinguish between different groups in your graph.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/Xallt/auto-graph-coloring).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
