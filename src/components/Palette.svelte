<script>
	import PaletteBar from './PaletteBar.svelte';
	import {
		randomColor,
		hex2hsl,
		hsl2hex,
		complClr,
		anlgClr,
		triadicClr,
		tetradicClr
	} from '$lib/utils';

	let swatches = [
		{ clr: '#888888', label: 'grays' },
		{ clr: randomColor(), label: 'swatch1' }
	];

	$: lastColor = swatches[swatches.length - 1].clr;

	let addTheme = 'custom';

	const exportPalette = () => null;

	/**
	 * addSwatches - add additional swatches to array
	 * @param {string[]} colors - colors to add
	 * @return void
	 */
	const addSwatches = (colors) => {
		colors.forEach((color) => {
			swatches = [
				...swatches,
				{
					clr: color,
					label: `swatch${swatches.length}`
				}
			];
		});
	};

	const addRow = () => {
		if (addTheme === 'custom') {
			addSwatches([randomColor()]);
		} else if (addTheme === 'complementary') {
			addSwatches([complClr(lastColor)]);
		} else if (addTheme === 'analogous') {
			addSwatches(anlgClr(lastColor));
		} else if (addTheme === 'triadic') {
			addSwatches(triadicClr(lastColor));
		} else if (addTheme === 'tetradic') {
			addSwatches(tetradicClr(lastColor));
		}
	};
</script>

<div class="palette">
	<div class="buttons">
		<button on:click={exportPalette}>Export</button>
		<div class="addrows">
			<button on:click={addRow}>+</button>
			<select bind:value={addTheme}>
				<option value="custom">Custom (+1)</option>
				<option value="complementary">Complementary (+1)</option>
				<option value="analogous">Analogous (+2)</option>
				<option value="triadic">Triadic (+2)</option>
				<option value="tetradic">Tetradic (+3)</option>
			</select>
		</div>
		<p>Uses bottom color as starting point for added colors.</p>
	</div>
	<div class="swatchbars">
		<header><strong>PALETTE:</strong> Click center swatches to change color</header>
		<div class="swatchbar">
			{#each swatches as swatch}
				<PaletteBar id={swatch.label} bind:baseClr={swatch.clr} />
			{/each}
		</div>
	</div>
</div>

<style>
	.palette {
		display: flex;
		gap: 1em;
	}

	.buttons {
		min-width: 12rem;
	}

	.buttons button {
		padding: 0.3rem 0.5rem;
		font-size: 1rem;
	}

	.buttons .addrows button {
		max-width: fit-content;
	}

	.buttons .addrows select {
		padding: 1em;
		font-size: small;
		flex-basis: 2;
	}

	.swatchbars {
		width: 100%;
	}

	.swatchbars header {
		text-align: center;
	}

	.addrows {
		display: flex;
		gap: 1rem;
	}
</style>
