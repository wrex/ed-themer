<script>
	import { colorScheme, paletteCSS, swatches, modal } from '$lib/stores';
	import {
		tint,
		shade,
		randomColor,
		complClr,
		anlgClr,
		triadicClr,
		tetradicClr
	} from '$lib/colorUtils';
	import { slugify } from '$lib/utils';

	/* Last color row used for algorithmic additions */
	$: lastColor = $swatches[$swatches.length - 1].clr;

	/**
	 * genPaletteCSS - generate custom props for Palette
	 * @param {{clr: string, label: string}[]} swatches
	 */
	const genPaletteCSS = (swatches) => {
		/**
		 * swatchCSS - props for tints and shades of one color
		 * @param {string} clr
		 * @param {string} label
		 */
		const swatchCss = (clr, label) => {
			/* brightest tint to darkest shade */
			return `
				--${slugify(label)}-0: ${tint(clr, 0.91)}
				--${slugify(label)}-1: ${tint(clr, 0.78)}
				--${slugify(label)}-2: ${tint(clr, 0.65)}
				--${slugify(label)}-3: ${tint(clr, 0.52)}
				--${slugify(label)}-4: ${tint(clr, 0.39)}
				--${slugify(label)}-5: ${tint(clr, 0.26)}
				--${slugify(label)}-6: ${tint(clr, 0.13)}
				--${slugify(label)}-7: ${clr}
				--${slugify(label)}-8: ${shade(clr, 0.13)}
				--${slugify(label)}-9: ${shade(clr, 0.26)}
				--${slugify(label)}-10: ${shade(clr, 0.39)}
				--${slugify(label)}-11: ${shade(clr, 0.52)}
				--${slugify(label)}-12: ${shade(clr, 0.65)}
				--${slugify(label)}-13: ${shade(clr, 0.78)}
				--${slugify(label)}-14: ${shade(clr, 0.91)}
			`;
		};
		let CSS = '';
		swatches.forEach((swatch) => {
			CSS += swatchCss(swatch.clr, swatch.label);
		});
		return CSS;
	};

	/**
	 * exportPalette - display a modal with all the color swatches
	 */
	const exportPalette = () => {
		$paletteCSS = genPaletteCSS($swatches);
		$modal.paletteStyles = !$modal.paletteStyles;
	};

	/**
	 * addSwatches - add additional swatches to array
	 * @param {string[]} colors - colors to add
	 * @return void
	 */
	const addSwatches = (colors) => {
		colors.forEach((color) => {
			$swatches = [
				...$swatches,
				{
					clr: color,
					label: `swatch${$swatches.length}`
				}
			];
		});
	};

	const addRow = () => {
		if ($swatches.length > 20) return;
		if ($colorScheme === 'custom') {
			addSwatches([randomColor()]);
		} else if ($colorScheme === 'complementary') {
			addSwatches([complClr(lastColor)]);
		} else if ($colorScheme === 'analogous') {
			addSwatches(anlgClr(lastColor));
		} else if ($colorScheme === 'triadic') {
			addSwatches(triadicClr(lastColor));
		} else if ($colorScheme === 'tetradic') {
			addSwatches(tetradicClr(lastColor));
		}
	};

	const togglePalette = () => {
		$modal.paletteStyles = !$modal.paletteStyles;
	};

	const paletteToClipboard = () => {
		navigator.clipboard.writeText('hi mom!');
		togglePalette();
	};
</script>

<div class="left-controls">
	<button on:click={exportPalette}>Palette</button>
	<div class="addrows">
		<button on:click={addRow}>+</button>
		<select bind:value={$colorScheme}>
			<option value="custom">Custom (+1)</option>
			<option value="complementary">Complementary (+1)</option>
			<option value="analogous">Analogous (+2)</option>
			<option value="triadic">Triadic (+2)</option>
			<option value="tetradic">Tetradic (+3)</option>
		</select>
	</div>
</div>

<!-- Palette modal -->
<dialog open={$modal.paletteStyles || null} id="palette-modal">
	<article>
		<a
			href="#close"
			aria-label="Close"
			class="close"
			data-target="palette-modal"
			on:click={togglePalette}>&nbsp</a
		>
		<h1>Color Palette Properties</h1>
		<pre class="textBox">{$paletteCSS}</pre>
		<footer>
			<button data-target="palette-modal" on:click={paletteToClipboard}> Copy to Clipboard </button>
		</footer>
	</article>
</dialog>
