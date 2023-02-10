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