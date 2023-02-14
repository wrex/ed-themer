<script>
	import MainNav from '../components/MainNav.svelte';
	import ColorPropNav from '../components/ColorPropNav.svelte';
	import Surfaces from '../components/Surfaces.svelte';
	import Dashboard from '../components/Dashboard.svelte';
	import Review from '../components/Review.svelte';
	import Palette from '../components/Palette.svelte';

	import { userProps, sample } from '$lib/stores.js';

	$: styleString = `
  --USER-surface-1: ${$userProps.clr['--USER-surface-1']};
  --USER-surface-2: ${$userProps.clr['--USER-surface-2']};
  --USER-surface-3: ${$userProps.clr['--USER-surface-3']};
  --USER-surface-4: ${$userProps.clr['--USER-surface-4']};
  --USER-surface-inv: ${$userProps.clr['--USER-surface-inv']};
  --USER-text: ${$userProps.clr['--USER-text']};
  --USER-text-inv: ${$userProps.clr['--USER-text-inv']};
  --USER-text-hl: ${$userProps.clr['--USER-text-hl']};
  --USER-text-grayed: ${$userProps.clr['--USER-text-grayed']};
  --USER-brand: ${$userProps.clr['--USER-brand']};
  --USER-progress: ${$userProps.clr['--USER-progress']};
  --USER-success: ${$userProps.clr['--USER-success']};
  --USER-alert: ${$userProps.clr['--USER-alert']};
  --USER-radical: ${$userProps.clr['--USER-radical']};
  --USER-kanji: ${$userProps.clr['--USER-kanji']};
  --USER-vocab: ${$userProps.clr['--USER-vocab']};
  --USER-apprentice: ${$userProps.clr['--USER-apprentice']};
  --USER-guru: ${$userProps.clr['--USER-guru']};
  --USER-master: ${$userProps.clr['--USER-master']};
  --USER-enlightened: ${$userProps.clr['--USER-enlightened']};
  --USER-burned: ${$userProps.clr['--USER-burned']};
  --USER-lesson: ${$userProps.clr['--USER-lesson']};
  --USER-review: ${$userProps.clr['--USER-review']};
  --USER-correct: ${$userProps.clr['--USER-correct']};
  --USER-incorrect: ${$userProps.clr['--USER-incorrect']};
  --USER-meaning: ${$userProps.clr['--USER-meaning']};
  --USER-reading: ${$userProps.clr['--USER-reading']};
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

<footer id="palette">
	<Palette />
</footer>
