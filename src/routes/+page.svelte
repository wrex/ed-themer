<script>
  import MainNav from "../components/MainNav.svelte";
  import ColorPropNav from "../components/ColorPropNav.svelte";
  import Surfaces from "../components/Surfaces.svelte";
  import Dashboard from "../components/Dashboard.svelte";
  import Review from "../components/Review.svelte";
  import Lesson from "../components/Lesson.svelte";
  import ReviewSummary from "../components/ReviewSummary.svelte";
  import LessonSummary from "../components/LessonSummary.svelte";

  import { userProps, sample } from '$lib/stores.js';

  // $: styleString = Object.keys($userProps).reduce(
  //   (acc, cur) => acc + `${cur}: ${$userProps[cur]}; `, ""
  // );

 $: styleString = `
  --USER-surface-1: ${$userProps['--USER-surface-1']};
  --USER-surface-2: ${$userProps['--USER-surface-2']};
  --USER-surface-3: ${$userProps['--USER-surface-3']};
  --USER-surface-4: ${$userProps['--USER-surface-4']};
  --USER-inverted-surface: ${$userProps['--USER-inverted-surface']};
  --USER-text-clr: ${$userProps['--USER-text-clr']};
  --USER-inverted-text: ${$userProps['--USER-inverted-text']};
  --USER-highlight-text: ${$userProps['--USER-highlight-text']};
  --USER-grayed-text: ${$userProps['--USER-grayed-text']};
  --USER-brand: ${$userProps['--USER-brand']};
  --USER-progress-clr: ${$userProps['--USER-progress-clr']};
  --USER-success: ${$userProps['--USER-success']};
  --USER-alert: ${$userProps['--USER-alert']};
  --USER-radical-clr: ${$userProps['--USER-radical-clr']};
  --USER-kanji-clr: ${$userProps['--USER-kanji-clr']};
  --USER-vocab-clr: ${$userProps['--USER-vocab-clr']};
  --USER-apprentice-clr: ${$userProps['--USER-apprentice-clr']};
  --USER-guru-clr: ${$userProps['--USER-guru-clr']};
  --USER-master-clr: ${$userProps['--USER-master-clr']};
  --USER-enlightened-clr: ${$userProps['--USER-enlightened-clr']};
  --USER-burned-clr: ${$userProps['--USER-burned-clr']};
  --USER-lesson-clr: ${$userProps['--USER-lesson-clr']};
  --USER-review-clr: ${$userProps['--USER-review-clr']};
  --USER-correct: ${$userProps['--USER-correct']};
  --USER-incorrect: ${$userProps['--USER-incorrect']};
  --USER-meaning-clr: ${$userProps['--USER-meaning-clr']};
  --USER-reading-clr: ${$userProps['--USER-reading-clr']};
  `;
</script>

<MainNav />

<ColorPropNav />


<main id="samples" style={styleString}>
  {#if $sample === "surfaces"}
  <Surfaces /> 
  {:else if $sample === "dashboard"}
  <Dashboard />
  {:else if $sample === "review"}
  <Review />
  {:else if $sample === "lesson"}
  <Lesson />
  {:else if $sample === "review-summary"}
  <ReviewSummary />
  {:else if $sample === "lesson-summary"}
  <LessonSummary />
  {/if}
</main>

<footer id="palette">
  <h1>Color Palette</h1>
</footer>

<style>
  #samples {
    min-width: 1024px;
    overflow: scroll;
  }
</style>