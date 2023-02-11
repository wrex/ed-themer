<script>
  import {sample, userProps, resetProps} from '$lib/stores.js';
  import ExportIcon from '../icons/ExportIcon.svelte';
  import ReloadIcon from '../icons/ReloadIcon.svelte';

  
  $: userOverrides = `:root {
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
}`;

let modalOpen = false;
const toggleModal = () => {
  modalOpen = modalOpen ? false : true;
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(userOverrides);
  toggleModal();
}
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
    <li><button on:click={resetProps}><ReloadIcon /></button></li>
    <li><button on:click={toggleModal}><ExportIcon /></button></li>
  </ul>
</nav>

<!-- Modal -->
<dialog open={modalOpen || null} id="modal-example">
  <article>
    <a href="#close"
      aria-label="Close"
      class="close"
      data-target="modal-example"
      on:click={toggleModal}>
    </a>
    <pre class="textBox">{userOverrides}</pre>
    <footer>
      <button
        data-target="modal-example"
        on:click={copyToClipboard}>
        Copy to Clipboard
      </button>
    </footer>
  </article>
</dialog>

<style>
  .textBox {
    max-height: 50vh;
    overflow-y: scroll;
  }
</style>