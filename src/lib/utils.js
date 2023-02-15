export const allPropNames = [
	'surface-1',
	'surface-2',
	'surface-3',
	'surface-4',
	'surface-inv',
	'text',
	'text-inv',
	'text-hl',
	'text-grayed',
	'brand',
	'progress',
	'success',
	'alert',
	'radical',
	'kanji',
	'vocab',
	'apprentice',
	'guru',
	'master',
	'enlightened',
	'burned',
	'lesson',
	'review',
	'correct',
	'incorrect',
	'meaning',
	'reading'
];

export const surfaceNames = ['surface-1', 'surface-2', 'surface-3', 'surface-4', 'surface-inv'];

export const textNames = ['text', 'text-inv', 'text-hl', 'text-grayed'];

export const brandNames = ['brand', 'progress', 'success', 'alert'];

export const typeNames = ['radical', 'kanji', 'vocab'];

export const srsNames = ['apprentice', 'guru', 'master', 'enlightened', 'burned'];

export const reviewNames = ['lesson', 'review', 'correct', 'incorrect', 'meaning', 'reading'];

/**
 * slugify - make string suitable for usage as a "slug"
 * @param {string} text raw text with spaces or whatever
 * @returns {string}
 */
export const slugify = (text) => {
	return text
		.toString() // Cast to string (optional)
		.normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string (optional)
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/_/g, '-') // Replace _ with -
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/-$/g, ''); // Remove trailing -
};
