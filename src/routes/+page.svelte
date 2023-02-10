<script>
  import SurfaceColors from "../components/SurfaceColors.svelte";
  import TextColors from "../components/TextColors.svelte";
  import ItemTypeColors from "../components/ItemTypeColors.svelte";
  import SrsStageColors from "../components/SrsStageColors.svelte";
  import BrandColors from "../components/BrandColors.svelte";
  import LessonReviewColors from "../components/LessonReviewColors.svelte";
</script>

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

<main id="samples">
  <h1>Elementary Dark Themer</h1>
</main>

<footer id="palette">
  <h1>Color Palette</h1>
</footer>