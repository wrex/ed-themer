<script>
	import PaletteBar from './PaletteBar.svelte';
	import { randomColor, hex2hsl, hsl2hex } from '$lib/utils';

	let swatches = [
		{ clr: '#888888', label: 'grays' },
		{ clr: randomColor(), label: 'swatch1' }
	];

	$: lastColor = swatches[swatches.length - 1].clr;

	console.log(hex2hsl(swatches[1].clr));
	console.log(hsl2hex(hex2hsl(swatches[1].clr)));

	let addTheme = 'custom';

	const exportPalette = () => null;

	const addRow = () => {
		console.log(swatches);
		if (addTheme === 'custom') {
			let newSwatchObj = { clr: randomColor(), label: `swatch${swatches.length}` };
			swatches = [...swatches, newSwatchObj];
		} else if (addTheme === 'complementary') {
			let lastHsl = hex2hsl(lastColor);
			let newHsl = { h: (lastHsl.h + 180) % 360, s: lastHsl.s, l: lastHsl.l };
			let newSwatchObj = {
				clr: hsl2hex(newHsl),
				label: `swatch${swatches.length}`
			};
			swatches = [...swatches, newSwatchObj];
		} else if (addTheme === 'analogous') {
			let lastHsl = hex2hsl(lastColor);
			let newHsl1 = { h: (lastHsl.h + 30) % 360, s: lastHsl.s, l: lastHsl.l };
			let newHsl2 = { h: (lastHsl.h + 330) % 360, s: lastHsl.s, l: lastHsl.l };
			let newSwatchObj1 = {
				clr: hsl2hex(newHsl1),
				label: `swatch${swatches.length}`
			};
			let newSwatchObj2 = {
				clr: hsl2hex(newHsl2),
				label: `swatch${swatches.length}`
			};
			swatches = [...swatches, newSwatchObj1, newSwatchObj2];
		} else if (addTheme === 'triadic') {
			let lastHsl = hex2hsl(lastColor);
			let newHsl1 = { h: (lastHsl.h + 120) % 360, s: lastHsl.s, l: lastHsl.l };
			let newHsl2 = { h: (lastHsl.h + 240) % 360, s: lastHsl.s, l: lastHsl.l };
			let newSwatchObj1 = {
				clr: hsl2hex(newHsl1),
				label: `swatch${swatches.length}`
			};
			let newSwatchObj2 = {
				clr: hsl2hex(newHsl2),
				label: `swatch${swatches.length}`
			};
			swatches = [...swatches, newSwatchObj1, newSwatchObj2];
		} else if (addTheme === 'tetradic') {
			let lastHsl = hex2hsl(lastColor);
			let newHsl1 = { h: (lastHsl.h + 90) % 360, s: lastHsl.s, l: lastHsl.l };
			let newHsl2 = { h: (lastHsl.h + 180) % 360, s: lastHsl.s, l: lastHsl.l };
			let newHsl3 = { h: (lastHsl.h + 270) % 360, s: lastHsl.s, l: lastHsl.l };
			let newSwatchObj1 = {
				clr: hsl2hex(newHsl1),
				label: `swatch${swatches.length}`
			};
			let newSwatchObj2 = {
				clr: hsl2hex(newHsl2),
				label: `swatch${swatches.length}`
			};
			let newSwatchObj3 = {
				clr: hsl2hex(newHsl3),
				label: `swatch${swatches.length}`
			};
			swatches = [...swatches, newSwatchObj1, newSwatchObj2, newSwatchObj3];
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
