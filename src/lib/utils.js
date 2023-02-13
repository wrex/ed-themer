export const allPropNames = [
	'surface-1',
	'surface-2',
	'surface-3',
	'surface-4',
	'inverted-surface',
	'text-clr',
	'inverted-text',
	'highlight-text',
	'grayed-text',
	'brand',
	'progress-clr',
	'success',
	'alert',
	'radical-clr',
	'kanji-clr',
	'vocab-clr',
	'apprentice-clr',
	'guru-clr',
	'master-clr',
	'enlightened-clr',
	'burned-clr',
	'lesson-clr',
	'review-clr',
	'correct',
	'incorrect',
	'meaning-clr',
	'reading-clr'
];

export const surfaceNames = [
	'surface-1',
	'surface-2',
	'surface-3',
	'surface-4',
	'inverted-surface'
];

export const textNames = ['text-clr', 'inverted-text', 'highlight-text', 'grayed-text'];

export const brandNames = ['brand', 'progress-clr', 'success', 'alert'];

export const typeNames = ['radical-clr', 'kanji-clr', 'vocab-clr'];

export const srsNames = [
	'apprentice-clr',
	'guru-clr',
	'master-clr',
	'enlightened-clr',
	'burned-clr'
];

export const reviewNames = [
	'lesson-clr',
	'review-clr',
	'correct',
	'incorrect',
	'meaning-clr',
	'reading-clr'
];

/**
 * pad2 = convert 0-255 into two digit hex string
 * @param {Number} decimalValue between 0 and 255
 */
const pad2 = (decimalValue) => {
	let hex = decimalValue.toString(16);
	return hex.length > 1 ? hex : '0' + hex;
};

/**
 * tint - generate a tint from a color
 * @param clr {string} hex color, e.g. #00aabb
 * @param factor {number} from 0 to 1
 */
export const tint = (clr, factor) => {
	/* see https://maketintsandshades.com/about */
	let r = parseInt(clr.slice(1, 3), 16);
	let g = parseInt(clr.slice(3, 5), 16);
	let b = parseInt(clr.slice(5, 7), 16);

	let rt = r + (255 - r) * factor;
	let gt = g + (255 - g) * factor;
	let bt = b + (255 - b) * factor;

	rt = Math.min(Math.max(Math.round(rt), 0), 255);
	gt = Math.min(Math.max(Math.round(gt), 0), 255);
	bt = Math.min(Math.max(Math.round(bt), 0), 255);

	return `#${pad2(rt)}${pad2(gt)}${pad2(bt)}`;
};

/**
 * shade - generate a tint from a color
 * @param clr {string}
 * @param factor {number}
 */
export const shade = (clr, factor) => {
	/* see https://maketintsandshades.com/about */
	let r = parseInt(clr.slice(1, 3), 16);
	let g = parseInt(clr.slice(3, 5), 16);
	let b = parseInt(clr.slice(5, 7), 16);

	let rt = r * (1 - factor);
	let gt = g * (1 - factor);
	let bt = b * (1 - factor);

	rt = Math.min(Math.max(Math.round(rt), 0), 255);
	gt = Math.min(Math.max(Math.round(gt), 0), 255);
	bt = Math.min(Math.max(Math.round(bt), 0), 255);

	return `#${pad2(rt)}${pad2(gt)}${pad2(bt)}`;
};

export const randomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `#${pad2(r)}${pad2(g)}${pad2(b)}`;
};
