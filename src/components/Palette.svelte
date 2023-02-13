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

	const addRow = () => {
		if (addTheme === 'custom') {
			let newSwatchObj = { clr: randomColor(), label: `swatch${swatches.length}` };
			swatches = [...swatches, newSwatchObj];
		} else if (addTheme === 'complementary') {
			let newSwatchObj = {
				clr: complClr(lastColor),
				label: `swatch${swatches.length}`
			};
			swatches = [...swatches, newSwatchObj];
		} else if (addTheme === 'analogous') {
			let newSwatchObjs = [
				{
					clr: anlgClr(lastColor)[0],
					label: `swatch${swatches.length}`
				},
				{
					clr: anlgClr(lastColor)[1],
					label: `swatch${swatches.length + 1}`
				}
			];
			swatches = [...swatches, ...newSwatchObjs];
		} else if (addTheme === 'triadic') {
			let newSwatchObjs = [
				{
					clr: triadicClr(lastColor)[0],
					label: `swatch${swatches.length}`
				},
				{
					clr: triadicClr(lastColor)[1],
					label: `swatch${swatches.length + 1}`
				}
			];
			swatches = [...swatches, ...newSwatchObjs];
		} else if (addTheme === 'tetradic') {
			let newSwatchObjs = [
				{
					clr: tetradicClr(lastColor)[0],
					label: `swatch${swatches.length}`
				},
				{
					clr: tetradicClr(lastColor)[1],
					label: `swatch${swatches.length + 1}`
				},
				{
					clr: tetradicClr(lastColor)[2],
					label: `swatch${swatches.length + 2}`
				}
			];
			swatches = [...swatches, ...newSwatchObjs];
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
