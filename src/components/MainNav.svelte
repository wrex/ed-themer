<script>
  import {sample, userProps, resetProps} from '$lib/stores.js';
  import ExportIcon from '../icons/ExportIcon.svelte';
  import ReloadIcon from '../icons/ReloadIcon.svelte';
  import Logo from './Logo.svelte';

  
  $: userOverrides = `:root {
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
    <li><Logo /></li>
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