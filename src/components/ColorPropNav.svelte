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
      <summary>Brand</summary>
      <BrandColors />
    </details>
    
    <details>
      <summary>Types</summary>
      <ItemTypeColors />
    </details>
    
    <details>
      <summary>SRS</summary>
      <SrsStageColors />
    </details>
    
    <details>
      <summary>Reviews</summary>
      <LessonReviewColors />
    </details>
  </form>
</aside>