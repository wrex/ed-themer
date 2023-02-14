<script>
	import PaletteBar from './PaletteBar.svelte';
	import { randomColor, complClr, anlgClr, triadicClr, tetradicClr } from '$lib/colorUtils';
	import { modal, swatches } from '$lib/stores';

	/* Last color row used for algorithmic additions */
	$: lastColor = $swatches[$swatches.length - 1].clr;

	/* Default is to add a custom (random) color */
	let colorScheme = 'custom';

	/**
	 * exportPalette - display a modal with all the color swatches
	 */
	const exportPalette = () => {
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
		<!-- <p>
			Bottom color used as starting point when adding algorithmic swatch rows (complementary,
			analogous, triadic, tetradic).
		</p> -->
	</div>
	<div class="swatchbars">
		<!-- <header><strong>PALETTE:</strong> Click center swatches to change color</header> -->
		<div class="swatchbar">
			{#each $swatches as swatch, i}
				<PaletteBar id={swatch.label} bind:baseClr={swatch.clr} />
				<button on:click={() => delRow(i)} disabled={i === 0}>-</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.palette {
		display: flex;
		gap: 1em;
	}

	.left-controls {
		min-width: 12rem;
	}

	.left-controls button {
		padding: 0.3rem 0.5rem;
		font-size: 1rem;
	}

	.left-controls .addrows button {
		max-width: fit-content;
	}

	.left-controls .addrows select {
		padding: 1em;
		font-size: small;
		flex-basis: 2;
	}

	.swatchbars {
		width: 100%;
		padding-left: 2rem;
	}

	.swatchbar {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}
	.swatchbar button {
		width: fit-content;
		margin-block: 0;
		padding: 0.3rem 0.5rem;
	}

	.addrows {
		display: flex;
		gap: 1rem;
	}
</style>
