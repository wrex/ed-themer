<script>
	import { colorScheme, swatches, modal } from '$lib/stores';
	import { randomColor, complClr, anlgClr, triadicClr, tetradicClr } from '$lib/colorUtils';

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
			<option value="custom">Custom (+1)</option>
			<option value="complementary">Complementary (+1)</option>
			<option value="analogous">Analogous (+2)</option>
			<option value="triadic">Triadic (+2)</option>
			<option value="tetradic">Tetradic (+3)</option>
		</select>
		<button on:click={addRow}>Add Swatches</button>
	</div>
</div>
