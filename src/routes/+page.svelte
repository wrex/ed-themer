<script>
  import SurfaceColors from "../components/SurfaceColors.svelte";
  import TextColors from "../components/TextColors.svelte";
  import ItemTypeColors from "../components/ItemTypeColors.svelte";
  import SrsStageColors from "../components/SrsStageColors.svelte";
  import BrandColors from "../components/BrandColors.svelte";
  import LessonReviewColors from "../components/LessonReviewColors.svelte";
</script>

<h1>Elementary Dark Themer</h1>

<details role="list">
  <summary>Branding etc.</summary>
  <BrandColors />
</details>

<details role="list">
  <summary>Surfaces</summary>
  <SurfaceColors />
</details>

<details role="list">
  <summary>Text</summary>
  <TextColors />
</details>

<details role="list">
  <summary>Item types</summary>
  <ItemTypeColors />
</details>

<details role="list">
  <summary>SRS Stages</summary>
  <SrsStageColors />
</details>

<details role="list">
  <summary>Lessons & Reviews</summary>
  <LessonReviewColors />
</details>

<style>
</style>