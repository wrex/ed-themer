<script>
  import {sample} from '$lib/stores.js';
</script>
<nav>
  <ul>
    <li><strong>Logo</strong></li>
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
    <li>reset</li>
    <li>load/save</li>
  </ul>
</nav>