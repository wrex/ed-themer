<script>
  import MainNav from "../components/MainNav.svelte";
  import ColorPropNav from "../components/ColorPropNav.svelte";
  import Surfaces from "../components/Surfaces.svelte";
  import Dashboard from "../components/Dashboard.svelte";
  import Review from "../components/Review.svelte";
  import Palette from "../components/Palette.svelte";

  import { userProps, sample } from '$lib/stores.js';

 $: styleString = `
  --USER-surface-1: ${$userProps.clr['--USER-surface-1']};
  --USER-surface-2: ${$userProps.clr['--USER-surface-2']};
  --USER-surface-3: ${$userProps.clr['--USER-surface-3']};
  --USER-surface-4: ${$userProps.clr['--USER-surface-4']};
  --USER-inverted-surface: ${$userProps.clr['--USER-inverted-surface']};
  --USER-text-clr: ${$userProps.clr['--USER-text-clr']};
  --USER-inverted-text: ${$userProps.clr['--USER-inverted-text']};
  --USER-highlight-text: ${$userProps.clr['--USER-highlight-text']};
  --USER-grayed-text: ${$userProps.clr['--USER-grayed-text']};
  --USER-brand: ${$userProps.clr['--USER-brand']};
  --USER-progress-clr: ${$userProps.clr['--USER-progress-clr']};
  --USER-success: ${$userProps.clr['--USER-success']};
  --USER-alert: ${$userProps.clr['--USER-alert']};
  --USER-radical-clr: ${$userProps.clr['--USER-radical-clr']};
  --USER-kanji-clr: ${$userProps.clr['--USER-kanji-clr']};
  --USER-vocab-clr: ${$userProps.clr['--USER-vocab-clr']};
  --USER-apprentice-clr: ${$userProps.clr['--USER-apprentice-clr']};
  --USER-guru-clr: ${$userProps.clr['--USER-guru-clr']};
  --USER-master-clr: ${$userProps.clr['--USER-master-clr']};
  --USER-enlightened-clr: ${$userProps.clr['--USER-enlightened-clr']};
  --USER-burned-clr: ${$userProps.clr['--USER-burned-clr']};
  --USER-lesson-clr: ${$userProps.clr['--USER-lesson-clr']};
  --USER-review-clr: ${$userProps.clr['--USER-review-clr']};
  --USER-correct: ${$userProps.clr['--USER-correct']};
  --USER-incorrect: ${$userProps.clr['--USER-incorrect']};
  --USER-meaning-clr: ${$userProps.clr['--USER-meaning-clr']};
  --USER-reading-clr: ${$userProps.clr['--USER-reading-clr']};
  `;
</script>

<MainNav />

<ColorPropNav />


<main id="samples" style={styleString}>
  {#if $sample === "surfaces"}
  <Surfaces /> 
  {:else if $sample === "reviews"}
  <Review />
  {:else if $sample === "dashboard"}
  <Dashboard />
  {/if}
</main>

<footer id="palette">
  <Palette />
</footer>