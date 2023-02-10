<script>
  import SurfaceColors from "../components/SurfaceColors.svelte";
  import TextColors from "../components/TextColors.svelte";
  import ItemTypeColors from "../components/ItemTypeColors.svelte";
  import SrsStageColors from "../components/SrsStageColors.svelte";
  import BrandColors from "../components/BrandColors.svelte";
  import LessonReviewColors from "../components/LessonReviewColors.svelte";
  import MainNav from "../components/MainNav.svelte";
  import Samples from "../components/Samples.svelte";

  import { userProps } from '$lib/userPropStore.js';

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

<aside id="user-colors">
  <form>
    <details>
      <summary>Surfaces</summary>
      <SurfaceColors />
    </details>
    
    <details>
      <summary>Text</summary>
      <TextColors />
    </details>
    
    <details>
      <summary>Branding etc.</summary>
      <BrandColors />
    </details>
    
    <details>
      <summary>Item types</summary>
      <ItemTypeColors />
    </details>
    
    <details>
      <summary>SRS Stages</summary>
      <SrsStageColors />
    </details>
    
    <details>
      <summary>Lessons & Reviews</summary>
      <LessonReviewColors />
    </details>
  </form>
</aside>

<main id="samples" style={styleString}>
  <Samples /> 
</main>

<footer id="palette">
  <h1>Color Palette</h1>
</footer>