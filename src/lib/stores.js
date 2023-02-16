import { writable, get } from 'svelte/store';
import { randomColor, tint, shade } from './colorUtils';

/**
 * @typedef {{clr: string, ref: string}} UserClrDefn
 * @typedef {{[key: string]: UserClrDefn}} UserPropDefn
 *
 * @typedef {{[key: string]: string}} PaletteClrMap
 * @typedef {{label: string, rgb: string, props: PaletteClrMap}} PaletteEntry
 */

/**
 * makeTints - generate tints and shades from base color
 * @param {string} clr rgb color string
 * @returns {PaletteClrMap}
 */
export const makeTints = (clr) => {
	return {
		'-0': tint(clr, 0.91),
		'-1': tint(clr, 0.78),
		'-2': tint(clr, 0.65),
		'-3': tint(clr, 0.52),
		'-4': tint(clr, 0.39),
		'-5': tint(clr, 0.26),
		'-6': tint(clr, 0.13),
		'-7': clr,
		'-8': shade(clr, 0.13),
		'-9': shade(clr, 0.26),
		'-10': shade(clr, 0.39),
		'-11': shade(clr, 0.52),
		'-12': shade(clr, 0.65),
		'-13': shade(clr, 0.78),
		'-14': shade(clr, 0.91)
	};
};

/**
 * @type {{user: UserPropDefn, palette: PaletteEntry[]}}
 */
let defaultProps = { user: {}, palette: [] };
defaultProps.user = {
	'--USER-surface-1': { clr: '#151515', ref: 'custom' },
	'--USER-surface-2': { clr: '#282828', ref: 'custom' },
	'--USER-surface-3': { clr: '#303030', ref: 'custom' },
	'--USER-surface-4': { clr: '#535353', ref: 'custom' },
	'--USER-surface-inv': { clr: '#eeeeee', ref: 'custom' },
	'--USER-text': { clr: '#eeeeee', ref: 'custom' },
	'--USER-text-inv': { clr: '#151515', ref: 'custom' },
	'--USER-text-hl': { clr: '#a97e42', ref: 'custom' },
	'--USER-text-grayed': { clr: '#aaaaaa', ref: 'custom' },
	'--USER-brand': { clr: '#9c4644', ref: 'custom' },
	'--USER-progress': { clr: '#a97e42', ref: 'custom' },
	'--USER-success': { clr: '#519053', ref: 'custom' },
	'--USER-alert': { clr: '#9c4644', ref: 'custom' },
	'--USER-radical': { clr: '#56638a', ref: 'custom' },
	'--USER-kanji': { clr: '#9c4644', ref: 'custom' },
	'--USER-vocab': { clr: '#58896f', ref: 'custom' },
	'--USER-apprentice': { clr: '#535353', ref: 'custom' },
	'--USER-guru': { clr: '#7c684b', ref: 'custom' },
	'--USER-master': { clr: '#a97e42', ref: 'custom' },
	'--USER-enlightened': { clr: '#a26144', ref: 'custom' },
	'--USER-burned': { clr: '#9c4644', ref: 'custom' },
	'--USER-lesson': { clr: '#56638a', ref: 'custom' },
	'--USER-review': { clr: '#9c4644', ref: 'custom' },
	'--USER-correct': { clr: '#58896f', ref: 'custom' },
	'--USER-incorrect': { clr: '#9c4644', ref: 'custom' },
	'--USER-meaning': { clr: '#a97e42', ref: 'custom' },
	'--USER-reading': { clr: '#282828', ref: 'custom' }
};

// initialize palette with grays and one random hue
[
	['gray', '#333333'],
	['swatch1', randomColor()]
].forEach(([label, clr]) => {
	defaultProps.palette.push({
		label: label,
		rgb: clr,
		props: makeTints(clr)
	});
});

export const userProps = writable(JSON.parse(JSON.stringify(defaultProps)));

/**
 * @type Function[];
 */
export const resetCallbacks = [];

export const resetProps = () => {
	resetCallbacks.forEach((callback) => {
		callback();
	});
	userProps.set(JSON.parse(JSON.stringify(defaultProps)));
};

export const sample = writable('surfaces');

export const expandControls = writable(true);

export const modal = writable({
	userStyles: false,
	paletteStyles: false,
	help: false
});

export const userCSS = writable('');

export const colorScheme = writable('custom');
