<script>
	import MainNav from '../components/MainNav.svelte';
	import ColorPropNav from '../components/ColorPropNav.svelte';
	import Surfaces from '../components/Surfaces.svelte';
	import Dashboard from '../components/Dashboard.svelte';
	import Review from '../components/Review.svelte';
	import Palette from '../components/Palette.svelte';
	import PaletteTools from '../components/PaletteTools.svelte';

	import { userProps, sample } from '$lib/stores.js';

	$: styleString = `
  --USER-surface-1: ${$userProps.user['--USER-surface-1'].clr};
  --USER-surface-2: ${$userProps.user['--USER-surface-2'].clr};
  --USER-surface-3: ${$userProps.user['--USER-surface-3'].clr};
  --USER-surface-4: ${$userProps.user['--USER-surface-4'].clr};
  --USER-surface-inv: ${$userProps.user['--USER-surface-inv'].clr};
  --USER-text: ${$userProps.user['--USER-text'].clr};
  --USER-text-inv: ${$userProps.user['--USER-text-inv'].clr};
  --USER-text-hl: ${$userProps.user['--USER-text-hl'].clr};
  --USER-text-grayed: ${$userProps.user['--USER-text-grayed'].clr};
  --USER-brand: ${$userProps.user['--USER-brand'].clr};
  --USER-progress: ${$userProps.user['--USER-progress'].clr};
  --USER-success: ${$userProps.user['--USER-success'].clr};
  --USER-alert: ${$userProps.user['--USER-alert'].clr};
  --USER-radical: ${$userProps.user['--USER-radical'].clr};
  --USER-kanji: ${$userProps.user['--USER-kanji'].clr};
  --USER-vocab: ${$userProps.user['--USER-vocab'].clr};
  --USER-apprentice: ${$userProps.user['--USER-apprentice'].clr};
  --USER-guru: ${$userProps.user['--USER-guru'].clr};
  --USER-master: ${$userProps.user['--USER-master'].clr};
  --USER-enlightened: ${$userProps.user['--USER-enlightened'].clr};
  --USER-burned: ${$userProps.user['--USER-burned'].clr};
  --USER-lesson: ${$userProps.user['--USER-lesson'].clr};
  --USER-review: ${$userProps.user['--USER-review'].clr};
  --USER-correct: ${$userProps.user['--USER-correct'].clr};
  --USER-incorrect: ${$userProps.user['--USER-incorrect'].clr};
  --USER-meaning: ${$userProps.user['--USER-meaning'].clr};
  --USER-reading: ${$userProps.user['--USER-reading'].clr};
  `;
</script>

<MainNav />

<ColorPropNav />

<main id="samples" style={styleString}>
	{#if $sample === 'surfaces'}
		<Surfaces />
	{:else if $sample === 'reviews'}
		<Review />
	{:else if $sample === 'dashboard'}
		<Dashboard />
	{/if}
</main>

<div id="paletteTools">
	<PaletteTools />
</div>

<div id="palette">
	<Palette />
</div>
