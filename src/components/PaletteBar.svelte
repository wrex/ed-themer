<script>
	export let id = 'grays';
	export let baseClr = '#888888';

	import { tint, shade } from '$lib/colorUtils';
	import { makeTints } from '$lib/stores';

	$: tints = makeTints(baseClr);

	$: customProps = `
  --swatch-0: ${tints['-0']};
  --swatch-1: ${tints['-1']};
  --swatch-2: ${tints['-2']};
  --swatch-3: ${tints['-3']};
  --swatch-4: ${tints['-4']};
  --swatch-5: ${tints['-5']};
  --swatch-6: ${tints['-6']};
  --swatch-7: ${tints['-7']};
  --swatch-8: ${tints['-8']};
  --swatch-9: ${tints['-9']};
  --swatch-10: ${tints['-10']};
  --swatch-11: ${tints['-11']};
  --swatch-12: ${tints['-12']};
  --swatch-13: ${tints['-13']};
  --swatch-14: ${tints['-14']};
  `;
</script>

<div class="swatchbar" style={customProps}>
	<div class="swatch tint swatch-0">0</div>
	<div class="swatch tint swatch-1">1</div>
	<div class="swatch tint swatch-2">2</div>
	<div class="swatch tint swatch-3">3</div>
	<div class="swatch tint swatch-4">4</div>
	<div class="swatch tint swatch-5">5</div>
	<div class="swatch tint swatch-6">6</div>
	<input type="color" name={id} {id} bind:value={baseClr} />
	<div class="swatch shade swatch-8">8</div>
	<div class="swatch shade swatch-9">9</div>
	<div class="swatch shade swatch-10">10</div>
	<div class="swatch shade swatch-11">11</div>
	<div class="swatch shade swatch-12">12</div>
	<div class="swatch shade swatch-13">13</div>
	<div class="swatch shade swatch-14">14</div>
</div>

<style>
	.swatchbar {
		display: grid;
		grid-template-columns: repeat(15, auto);
		justify-content: stretch;
		align-items: center;
	}
	.swatchbar > input {
		min-width: 50px;
		margin: 0;
		padding: 0.5em;
	}

	.swatch {
		border: 1px solid var(--baseClr);
		height: 50px;
		padding-inline: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: x-small;
	}

	.tint {
		color: #000;
	}

	.shade {
		color: #fff;
	}

	.swatch-0 {
		background-color: var(--swatch-0);
	}

	.swatch-1 {
		background-color: var(--swatch-1);
	}

	.swatch-2 {
		background-color: var(--swatch-2);
	}

	.swatch-3 {
		background-color: var(--swatch-3);
	}

	.swatch-4 {
		background-color: var(--swatch-4);
	}

	.swatch-5 {
		background-color: var(--swatch-5);
	}

	.swatch-6 {
		background-color: var(--swatch-6);
	}

	.swatch-8 {
		background-color: var(--swatch-8);
	}

	.swatch-9 {
		background-color: var(--swatch-9);
	}

	.swatch-10 {
		background-color: var(--swatch-10);
	}

	.swatch-11 {
		background-color: var(--swatch-11);
	}

	.swatch-12 {
		background-color: var(--swatch-12);
	}

	.swatch-13 {
		background-color: var(--swatch-13);
	}

	.swatch-14 {
		background-color: var(--swatch-14);
	}
</style>
