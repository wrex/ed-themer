import { writable, get } from 'svelte/store';

const defaultProps = {
	clr: {
		'--USER-surface-1': '#151515',
		'--USER-surface-2': '#282828',
		'--USER-surface-3': '#303030',
		'--USER-surface-4': '#535353',
		'--USER-inverted-surface': '#eeeeee',
		'--USER-text-clr': '#eeeeee',
		'--USER-inverted-text': '#151515',
		'--USER-highlight-text': '#a97e42',
		'--USER-grayed-text': '#aaaaaa',
		'--USER-brand': '#9c4644',
		'--USER-progress-clr': '#a97e42',
		'--USER-success': '#519053',
		'--USER-alert': '#9c4644',
		'--USER-radical-clr': '#56638a',
		'--USER-kanji-clr': '#9c4644',
		'--USER-vocab-clr': '#58896f',
		'--USER-apprentice-clr': '#535353',
		'--USER-guru-clr': '#7c684b',
		'--USER-master-clr': '#a97e42',
		'--USER-enlightened-clr': '#a26144',
		'--USER-burned-clr': '#9c4644',
		'--USER-lesson-clr': '#56638a',
		'--USER-review-clr': '#9c4644',
		'--USER-correct': '#58896f',
		'--USER-incorrect': '#9c4644',
		'--USER-meaning-clr': '#a97e42',
		'--USER-reading-clr': '#282828'
	},
	clrRef: {
		'--USER-surface-1': 'Custom',
		'--USER-surface-2': 'Custom',
		'--USER-surface-3': 'Custom',
		'--USER-surface-4': 'Custom',
		'--USER-inverted-surface': 'Custom',
		'--USER-text-clr': 'Custom',
		'--USER-inverted-text': 'Custom',
		'--USER-highlight-text': 'Custom',
		'--USER-grayed-text': 'Custom',
		'--USER-brand': 'Custom',
		'--USER-progress-clr': 'Custom',
		'--USER-success': 'Custom',
		'--USER-alert': 'Custom',
		'--USER-radical-clr': 'Custom',
		'--USER-kanji-clr': 'Custom',
		'--USER-vocab-clr': 'Custom',
		'--USER-apprentice-clr': 'Custom',
		'--USER-guru-clr': 'Custom',
		'--USER-master-clr': 'Custom',
		'--USER-enlightened-clr': 'Custom',
		'--USER-burned-clr': 'Custom',
		'--USER-lesson-clr': 'Custom',
		'--USER-review-clr': 'Custom',
		'--USER-correct': 'Custom',
		'--USER-incorrect': 'Custom',
		'--USER-meaning-clr': 'Custom',
		'--USER-reading-clr': 'Custom'
	}
};

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
