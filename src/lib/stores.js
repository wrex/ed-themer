import { writable, get } from 'svelte/store';
import { randomColor } from './colorUtils';

const defaultProps = {
	clr: {
		'--USER-surface-1': '#151515',
		'--USER-surface-2': '#282828',
		'--USER-surface-3': '#303030',
		'--USER-surface-4': '#535353',
		'--USER-surface-inv': '#eeeeee',
		'--USER-text': '#eeeeee',
		'--USER-text-inv': '#151515',
		'--USER-text-hl': '#a97e42',
		'--USER-text-grayed': '#aaaaaa',
		'--USER-brand': '#9c4644',
		'--USER-progress': '#a97e42',
		'--USER-success': '#519053',
		'--USER-alert': '#9c4644',
		'--USER-radical': '#56638a',
		'--USER-kanji': '#9c4644',
		'--USER-vocab': '#58896f',
		'--USER-apprentice': '#535353',
		'--USER-guru': '#7c684b',
		'--USER-master': '#a97e42',
		'--USER-enlightened': '#a26144',
		'--USER-burned': '#9c4644',
		'--USER-lesson': '#56638a',
		'--USER-review': '#9c4644',
		'--USER-correct': '#58896f',
		'--USER-incorrect': '#9c4644',
		'--USER-meaning': '#a97e42',
		'--USER-reading': '#282828'
	},
	clrRef: {
		'--USER-surface-1': 'Custom',
		'--USER-surface-2': 'Custom',
		'--USER-surface-3': 'Custom',
		'--USER-surface-4': 'Custom',
		'--USER-surface-inv': 'Custom',
		'--USER-text': 'Custom',
		'--USER-text-inv': 'Custom',
		'--USER-text-hl': 'Custom',
		'--USER-text-grayed': 'Custom',
		'--USER-brand': 'Custom',
		'--USER-progress': 'Custom',
		'--USER-success': 'Custom',
		'--USER-alert': 'Custom',
		'--USER-radical': 'Custom',
		'--USER-kanji': 'Custom',
		'--USER-vocab': 'Custom',
		'--USER-apprentice': 'Custom',
		'--USER-guru': 'Custom',
		'--USER-master': 'Custom',
		'--USER-enlightened': 'Custom',
		'--USER-burned': 'Custom',
		'--USER-lesson': 'Custom',
		'--USER-review': 'Custom',
		'--USER-correct': 'Custom',
		'--USER-incorrect': 'Custom',
		'--USER-meaning': 'Custom',
		'--USER-reading': 'Custom'
	}
};

export const userProps = writable(JSON.parse(JSON.stringify(defaultProps)));

/* Initialize swatches with grays and tints/shades of one random color */
const defaultSwatches = [
	{ clr: '#333333', label: 'gray' },
	{ clr: randomColor(), label: 'swatch1' }
];

export const swatches = writable(JSON.parse(JSON.stringify(defaultSwatches)));

/**
 * @type Function[];
 */
export const resetCallbacks = [];

export const resetProps = () => {
	resetCallbacks.forEach((callback) => {
		callback();
	});
	userProps.set(JSON.parse(JSON.stringify(defaultProps)));
	swatches.set(JSON.parse(JSON.stringify(defaultSwatches)));
};

export const sample = writable('surfaces');

export const sidebarExpanded = writable(true);

export const modal = writable({
	userStyles: false,
	paletteStyles: false,
	help: false
});

export const userCSS = writable('');

export const colorScheme = writable('custom');
