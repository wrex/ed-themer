<script>
	import { colorScheme, swatches, modal } from '$lib/stores';
	import { randomColor, complClr, anlgClr, triadicClr, tetradicClr } from '$lib/colorUtils';

	/* Last color row used for algorithmic additions */
	$: lastColor = $swatches[$swatches.length - 1].clr;

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
	<div class="addrows">
		<select bind:value={$colorScheme}>
			<option value="custom">Custom</option>
			<option value="complementary">Complementary</option>
			<option value="analogous">Analogous</option>
			<option value="triadic">Triadic</option>
			<option value="tetradic">Tetradic</option>
		</select>
		{#if $colorScheme === 'custom' || $colorScheme === 'complementary'}
			<button on:click={addRow}>Add hue</button>
		{:else if $colorScheme === 'analogous' || $colorScheme === 'triadic'}
			<button on:click={addRow}>Add 2 hues</button>
		{:else if $colorScheme === 'tetradic'}
			<button on:click={addRow}>Add 3 hues</button>
		{/if}
	</div>
</div>

<style>
	select,
	button {
		font-size: small;
	}
</style>
