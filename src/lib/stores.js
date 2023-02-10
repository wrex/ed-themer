import { writable } from 'svelte/store';

export const defaultProps = {
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
};

export const userProps = writable(defaultProps);

export const sample = writable('surfaces');
