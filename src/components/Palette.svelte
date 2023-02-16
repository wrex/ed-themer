<script>
	import PaletteBar from './PaletteBar.svelte';
	import { swatches } from '$lib/stores';
	import PaletteTools from './PaletteTools.svelte';

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

	.swatchbars button {
		max-width: 4rem;
		margin-block: 10px;
		padding: 0.3rem 0.5rem;
	}

	.swatchbars input {
		margin-block: 10px;
		min-width: 100px;
	}
</style>
