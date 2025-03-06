# Auto Graph Coloring for Obsidian

This plugin automatically assigns random, visually distinct colors to groups in the Obsidian graph view.

## Features

- Adds a command "Auto Color Groups" to the command palette
- Automatically assigns visually distinct colors to all groups in the graph view
- Uses a color generation algorithm that maximizes the visual difference between colors
- Works with both global and local graph views

## How to Use

1. First, create groups in your graph view:
   - Open the graph view in Obsidian
   - Click on the "Groups" section in the graph settings
   - Add groups based on folders, tags, or custom queries

2. Run the "Auto Color Groups" command:
   - Press `Ctrl+P` (or `Cmd+P` on Mac) to open the command palette
   - Search for "Auto Color Groups" and select it
   - The plugin will automatically assign distinct colors to all your groups

3. The graph view will refresh automatically with the new colors applied

## How It Works

The plugin uses the golden ratio conjugate (approximately 0.618033988749895) to generate colors with maximum visual distinction. This approach ensures that each color is as different as possible from the others, making it easier to distinguish between different groups in your graph.

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Go to Community Plugins
3. Click "Browse" and search for "Auto Graph Coloring"
4. Click "Install"
5. Enable the plugin

### Manual Installation

1. Download the latest release from the GitHub repository
2. Extract the files to your Obsidian vault's `.obsidian/plugins/auto-graph-coloring` directory
3. Enable the plugin in Obsidian's Community Plugins settings

## Development

This plugin is built using the Obsidian Plugin API. To build it from source:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the plugin

## License

This project is licensed under the MIT License - see the LICENSE file for details.
