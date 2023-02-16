<script>
	import MainNav from '../components/MainNav.svelte';
	import ColorPropNav from '../components/ColorPropNav.svelte';
	import Surfaces from '../components/Surfaces.svelte';
	import Dashboard from '../components/Dashboard.svelte';
	import Review from '../components/Review.svelte';
	import Palette from '../components/Palette.svelte';
	import PaletteTools from '../components/PaletteTools.svelte';

	import { newUserProps, sample } from '$lib/stores.js';

	$: styleString = `
  --USER-surface-1: ${$newUserProps.user['--USER-surface-1'].clr};
  --USER-surface-2: ${$newUserProps.user['--USER-surface-2'].clr};
  --USER-surface-3: ${$newUserProps.user['--USER-surface-3'].clr};
  --USER-surface-4: ${$newUserProps.user['--USER-surface-4'].clr};
  --USER-surface-inv: ${$newUserProps.user['--USER-surface-inv'].clr};
  --USER-text: ${$newUserProps.user['--USER-text'].clr};
  --USER-text-inv: ${$newUserProps.user['--USER-text-inv'].clr};
  --USER-text-hl: ${$newUserProps.user['--USER-text-hl'].clr};
  --USER-text-grayed: ${$newUserProps.user['--USER-text-grayed'].clr};
  --USER-brand: ${$newUserProps.user['--USER-brand'].clr};
  --USER-progress: ${$newUserProps.user['--USER-progress'].clr};
  --USER-success: ${$newUserProps.user['--USER-success'].clr};
  --USER-alert: ${$newUserProps.user['--USER-alert'].clr};
  --USER-radical: ${$newUserProps.user['--USER-radical'].clr};
  --USER-kanji: ${$newUserProps.user['--USER-kanji'].clr};
  --USER-vocab: ${$newUserProps.user['--USER-vocab'].clr};
  --USER-apprentice: ${$newUserProps.user['--USER-apprentice'].clr};
  --USER-guru: ${$newUserProps.user['--USER-guru'].clr};
  --USER-master: ${$newUserProps.user['--USER-master'].clr};
  --USER-enlightened: ${$newUserProps.user['--USER-enlightened'].clr};
  --USER-burned: ${$newUserProps.user['--USER-burned'].clr};
  --USER-lesson: ${$newUserProps.user['--USER-lesson'].clr};
  --USER-review: ${$newUserProps.user['--USER-review'].clr};
  --USER-correct: ${$newUserProps.user['--USER-correct'].clr};
  --USER-incorrect: ${$newUserProps.user['--USER-incorrect'].clr};
  --USER-meaning: ${$newUserProps.user['--USER-meaning'].clr};
  --USER-reading: ${$newUserProps.user['--USER-reading'].clr};
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
