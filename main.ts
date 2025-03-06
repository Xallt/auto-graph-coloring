import { App, Plugin, Notice } from 'obsidian';

// Remember to rename these classes and interfaces!

interface AutoGraphColoringSettings {
	// We might add settings in the future
}

const DEFAULT_SETTINGS: AutoGraphColoringSettings = {
	// Default settings would go here
}

export default class AutoGraphColoringPlugin extends Plugin {
	settings: AutoGraphColoringSettings;

	async onload() {
		await this.loadSettings();

		// Add a command to auto-color groups
		this.addCommand({
			id: 'auto-color-groups',
			name: 'Auto Color Groups',
			callback: () => {
				this.autoColorGroups();
			}
		});
	}

	onunload() {
		// Nothing to clean up
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	/**
	 * Generate a visually distinct color in RGB format
	 * @param index The index of the color in the sequence
	 * @param total Total number of colors to generate
	 * @returns RGB color value as a number
	 */
	generateDistinctColor(index: number, total: number): number {
		// Use HSV color space for better visual distinction
		// Convert to RGB for Obsidian's API
		const goldenRatioConjugate = 0.618033988749895;
		const hue = (index * goldenRatioConjugate) % 1.0;

		// Convert HSV to RGB
		// Using saturation and value of 0.95 for vibrant but not too bright colors
		const saturation = 0.95;
		const value = 0.95;

		let r: number, g: number, b: number;

		const h = hue * 6;
		const i = Math.floor(h);
		const f = h - i;
		const p = value * (1 - saturation);
		const q = value * (1 - f * saturation);
		const t = value * (1 - (1 - f) * saturation);

		switch (i % 6) {
			case 0: r = value; g = t; b = p; break;
			case 1: r = q; g = value; b = p; break;
			case 2: r = p; g = value; b = t; break;
			case 3: r = p; g = q; b = value; break;
			case 4: r = t; g = p; b = value; break;
			case 5: r = value; g = p; b = q; break;
			default: r = 0; g = 0; b = 0;
		}

		// Convert to RGB integer
		const rgb = Math.round(r * 255) << 16 | Math.round(g * 255) << 8 | Math.round(b * 255);
		return rgb;
	}

	/**
	 * Auto-color the groups in the graph view
	 */
	async autoColorGroups() {
		try {
			// Access the graph plugin using the app object
			// We need to use 'any' type here because internalPlugins is not exposed in the public API
			const app = this.app as any;
			const graphPlugin = app.internalPlugins.plugins.graph;

			if (!graphPlugin) {
				new Notice('Graph plugin not found');
				return;
			}

			// Load current graph settings
			const settings = await graphPlugin.loadData();

			// Check if there are any color groups
			if (!settings.colorGroups || settings.colorGroups.length === 0) {
				new Notice('No color groups found in the graph. Please create some groups first.');
				return;
			}

			// Assign random colors to each group
			const totalGroups = settings.colorGroups.length;
			settings.colorGroups.forEach((group: any, index: number) => {
				group.color = {
					a: 1,
					rgb: this.generateDistinctColor(index, totalGroups)
				};
			});

			// Save the updated settings
			await graphPlugin.saveData(settings);

			// Refresh the graph view
			// First detach any existing graph views
			this.app.workspace.detachLeavesOfType('graph');
			// Then disable and re-enable the graph plugin to apply changes
			await graphPlugin.disable();
			await graphPlugin.enable();

			new Notice(`Successfully assigned colors to ${totalGroups} groups`);
		} catch (error) {
			console.error('Error auto-coloring groups:', error);
			new Notice('Error auto-coloring groups. Check console for details.');
		}
	}
}
