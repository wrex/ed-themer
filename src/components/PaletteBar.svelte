<script>
	export let id = 'grays';
	export let baseClr = '#888888';

	import { tint, shade } from '$lib/colorUtils';

	$: customProps = `
  --baseClr: ${baseClr};
  --t13: ${tint(baseClr, 0.13)};
  --t26: ${tint(baseClr, 0.26)};
  --t39: ${tint(baseClr, 0.39)};
  --t52: ${tint(baseClr, 0.52)};
  --t65: ${tint(baseClr, 0.65)};
  --t78: ${tint(baseClr, 0.78)};
  --t91: ${tint(baseClr, 0.91)};
  --s13: ${shade(baseClr, 0.13)};
  --s26: ${shade(baseClr, 0.26)};
  --s39: ${shade(baseClr, 0.39)};
  --s52: ${shade(baseClr, 0.52)};
  --s65: ${shade(baseClr, 0.65)};
  --s78: ${shade(baseClr, 0.78)};
  --s91: ${shade(baseClr, 0.91)};
  `;
</script>

<div class="swatchbar" style={customProps}>
	<div class="swatch tint t91">0</div>
	<div class="swatch tint t78">1</div>
	<div class="swatch tint t65">2</div>
	<div class="swatch tint t52">3</div>
	<div class="swatch tint t39">4</div>
	<div class="swatch tint t26">5</div>
	<div class="swatch tint t13">6</div>
	<input type="color" name={id} {id} bind:value={baseClr} />
	<div class="swatch shade s13">8</div>
	<div class="swatch shade s26">9</div>
	<div class="swatch shade s39">10</div>
	<div class="swatch shade s52">11</div>
	<div class="swatch shade s65">12</div>
	<div class="swatch shade s78">13</div>
	<div class="swatch shade s91">14</div>
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

	.t13 {
		background-color: var(--t13);
	}
	.t26 {
		background-color: var(--t26);
	}
	.t39 {
		background-color: var(--t39);
	}
	.t52 {
		background-color: var(--t52);
	}
	.t65 {
		background-color: var(--t65);
	}
	.t78 {
		background-color: var(--t78);
	}
	.t91 {
		background-color: var(--t91);
	}

	.s13 {
		background-color: var(--s13);
	}
	.s26 {
		background-color: var(--s26);
	}
	.s39 {
		background-color: var(--s39);
	}
	.s52 {
		background-color: var(--s52);
	}
	.s65 {
		background-color: var(--s65);
	}
	.s78 {
		background-color: var(--s78);
	}
	.s91 {
		background-color: var(--s91);
	}
</style>
