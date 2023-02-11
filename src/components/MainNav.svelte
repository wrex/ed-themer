<script>
  import {sample} from '$lib/stores.js';
  import Export from '../icons/Export.svelte';
  import Reload from '../icons/Reload.svelte';
</script>
<nav>
  <ul>
    <li><strong>鰐蟹ED</strong></li>
  </ul>
  <ul>
    <li>
        <select bind:value={$sample}>
          <option value="surfaces" selected>Surfaces</option>
          <option value="dashboard">Dashboard</option>
          <option value="review">Review</option>
          <option value="lesson">Lesson</option>
          <option value="review-summary">Review Summary</option>
          <option value="lesson-summary">Lesson Summary</option>
        </select>
    </li>
    <li><a href="#" role="button"><Reload /></a></li>
    <li><a href="#" role="button"><Export /></a></li>
  </ul>
</nav>