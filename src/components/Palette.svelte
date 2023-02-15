<script>
	import PaletteBar from './PaletteBar.svelte';
	import {
		tint,
		shade,
		randomColor,
		complClr,
		anlgClr,
		triadicClr,
		tetradicClr
	} from '$lib/colorUtils';
	import { modal, swatches, paletteCSS } from '$lib/stores';
	import { slugify } from '$lib/utils';

	/* Last color row used for algorithmic additions */
	$: lastColor = $swatches[$swatches.length - 1].clr;

	/* Default is to add a custom (random) color */
	let colorScheme = 'custom';

	/* Create CSS properties from swatches */
	const genPaletteCSS = (swatches) => {
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
		if (colorScheme === 'custom') {
			addSwatches([randomColor()]);
		} else if (colorScheme === 'complementary') {
			addSwatches([complClr(lastColor)]);
		} else if (colorScheme === 'analogous') {
			addSwatches(anlgClr(lastColor));
		} else if (colorScheme === 'triadic') {
			addSwatches(triadicClr(lastColor));
		} else if (colorScheme === 'tetradic') {
			addSwatches(tetradicClr(lastColor));
		}
	};

	/**
	 * delRow - used by "-" button to delete a swatch row
	 * @param {number} index
	 */
	const delRow = (index) => {
		let copy = [...$swatches];
		copy.splice(index, 1); // modifies in place
		// Must assign to swatches this way to ensure reactivity
		$swatches = [...copy];
	};
</script>

<div class="palette">
	<div class="left-controls">
		<button on:click={exportPalette}>Palette</button>
		<div class="addrows">
			<button on:click={addRow}>+</button>
			<select bind:value={colorScheme}>
				<option value="custom">Custom (+1)</option>
				<option value="complementary">Complementary (+1)</option>
				<option value="analogous">Analogous (+2)</option>
				<option value="triadic">Triadic (+2)</option>
				<option value="tetradic">Tetradic (+3)</option>
			</select>
		</div>
	</div>
	<div class="swatchbars">
		{#each $swatches as swatch, i}
			<div class="grid">
				<div class="bar">
					<PaletteBar id={swatch.label} bind:baseClr={swatch.clr} />
				</div>
				<input type="text" bind:value={swatch.label} />
				<button on:click={() => delRow(i)} disabled={i === 0}>-</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.palette {
		display: flex;
		gap: 1em;
	}

	.grid {
		grid-template-columns: 600px 1fr 1fr;
		align-items: center;
	}

	.left-controls {
		margin-block: 0;
		padding-top: 20px;
		padding-right: 1em;
		min-width: 12rem;
		border-right: 1px solid white;
	}

	.left-controls button {
		padding: 0.3rem 0.5rem;
		font-size: 1rem;
	}

	.addrows {
		margin-top: 36px;
	}
	.left-controls .addrows button {
		max-width: fit-content;
	}

	.left-controls .addrows select {
		padding: 1em;
		font-size: small;
		flex-basis: 2;
	}

	.swatchbars button {
		max-width: 4rem;
		margin-block: 10px;
		padding: 0.3rem 0.5rem;
	}

	.swatchbars input {
		margin-block: 10px;
		min-width: 100px;
	}

	.addrows {
		display: flex;
		gap: 1rem;
	}
</style>
