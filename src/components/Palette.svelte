<script>
	import PaletteBar from './PaletteBar.svelte';
	import { newUserProps } from '$lib/stores';

	/**
	 * delRow - used by "-" button to delete a swatch row
	 * @param {number} index
	 */
	const delRow = (index) => {
		let copy = [...$newUserProps.palette];
		copy.splice(index, 1); // modifies in place
		// Must assign to palette this way to ensure reactivity
		$newUserProps.palette = [...copy];
	};
</script>

<div class="palette">
	<div class="swatchbars">
		{#each $newUserProps.palette as row, i}
			<div class="grid">
				<div class="bar">
					<PaletteBar id={row.label} bind:baseClr={row.rgb} />
				</div>
				<input type="text" bind:value={row.label} />
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
		grid-template-columns: 5fr 1fr auto;
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
