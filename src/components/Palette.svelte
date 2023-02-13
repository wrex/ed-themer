<script>
	import PaletteBar from './PaletteBar.svelte';

	let swatches = ['swatch-0'];

	const exportPalette = () => null;

	const addRow = () => null;
</script>

<div class="palette">
	<div class="buttons">
		<button on:click={exportPalette}>Export</button>
		<div class="addrows">
			<button on:click={addRow}>+</button>
			<select>
				<option value="custom">Custom</option>
				<option value="complementary">Complementary</option>
				<option value="monochromatic">Monochromatic</option>
				<option value="Analogous">Analogous</option>
				<option value="tetradic">Tetradic</option>
			</select>
		</div>
	</div>
	<div class="swatchbars">
		<header>Click center swatch to change color</header>
		<div class="swatchbar">
			{#each swatches as i}
				<PaletteBar />
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
		min-width: 10rem;
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
