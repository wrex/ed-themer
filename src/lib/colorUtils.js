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

/**
 * hex2hsl - convert hex color code to HSL
 * @param {string} hex - hex color code (leading '#' optional)
 * @returns {{h: number, s: number, l: number}} - black on errors
 */
export const hex2hsl = (hex) => {
	const match3 = /^\s*[#]+[\da-zA-Z/]{3}/; // "#abc" or "abc"
	const match6 = /^\s*[#]+[\da-zA-Z/]{6}/; // "#abcdef" or "abcdef"

	if (!hex.match(match3) && !hex.match(match6)) {
		console.log(`hex2hsl: invalid string '${hex}', returning black`);
		return { h: 0, s: 0, l: 0 };
	}

	hex = hex.replace(/#/g, ''); // trim leading '#'

	// pad as necessary: "#aaa" -> "#aaaaaa"
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((hex) => hex + hex)
			.join('');
	}

	const result = hex.match(/[a-f\d]{2}/gi);
	if (!result || result.length !== 3) {
		console.log(`hex2hsl: invalid string '${hex}', returning black`);
		return { h: 0, s: 0, l: 0 };
	}

	let r = parseInt(result[0], 16);
	let g = parseInt(result[1], 16);
	let b = parseInt(result[2], 16);

	(r /= 255), (g /= 255), (b /= 255);

	let max = Math.max(r, g, b);
	let min = Math.min(r, g, b);

	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max == min) {
		h = s = 0;
	} else {
		let d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	h = Math.round(360 * h);
	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return { h: h, s: s, l: l };
};

/**
 * hsl2hex - convert
 * @param {{h: number, s: number, l: number}} hsl
 * @returns string - 6 digit hex code with leading '#'
 */
export const hsl2hex = (hsl) => {
	let h = hsl.h;
	let s = hsl.s;
	let l = hsl.l;

	h /= 360;
	s /= 100;
	l /= 100;

	let r, g, b;
	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = function (p, q, t) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	/**
	 * toHex - convert 0-255 to two digit hex string
	 * @param {number} x
	 * @returns string
	 */
	const toHex = (x) => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	return '#' + toHex(r) + toHex(g) + toHex(b);
};

/**
 * complClr - calculate 180° opposite complementary color
 * @param {string} clr hex string defining a color
 * @returns {string}   hex string of complementary color
 */
export const complClr = (clr) => {
	let hsl = hex2hsl(clr);
	let newHsl = { h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l };
	return hsl2hex(newHsl);
};

/**
 * anlgClr - calculate analagous colors
 * @param {string} clr hex string defining a color
 * @returns {string[]} two element array of hex colors
 */
export const anlgClr = (clr) => {
	let hsl = hex2hsl(clr);
	let newHsl1 = { h: (hsl.h + 30) % 360, s: hsl.s, l: hsl.l };
	let newHsl2 = { h: (hsl.h + 330) % 360, s: hsl.s, l: hsl.l };
	return [hsl2hex(newHsl1), hsl2hex(newHsl2)];
};

/**
 * triadic - calculate triadic colors
 * @param {string} clr hex string defining a color
 * @returns {string[]} two element array of hex colors
 */
export const triadicClr = (clr) => {
	let hsl = hex2hsl(clr);
	let newHsl1 = { h: (hsl.h + 120) % 360, s: hsl.s, l: hsl.l };
	let newHsl2 = { h: (hsl.h + 240) % 360, s: hsl.s, l: hsl.l };
	return [hsl2hex(newHsl1), hsl2hex(newHsl2)];
};

/**
 * tetradic - calculate tetrdic colors
 * @param {string} clr hex string defining a color
 * @returns {string[]} three element array of hex colors
 */
export const tetradicClr = (clr) => {
	let hsl = hex2hsl(clr);
	let newHsl1 = { h: (hsl.h + 90) % 360, s: hsl.s, l: hsl.l };
	let newHsl2 = { h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l };
	let newHsl3 = { h: (hsl.h + 270) % 360, s: hsl.s, l: hsl.l };
	return [hsl2hex(newHsl1), hsl2hex(newHsl2), hsl2hex(newHsl3)];
};
