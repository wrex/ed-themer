<script>
  import {sample, userProps, resetProps} from '$lib/stores.js';
  import ExportIcon from '../icons/ExportIcon.svelte';
  import ReloadIcon from '../icons/ReloadIcon.svelte';
  import Logo from './Logo.svelte';
  import {allPropNames} from '$lib/utils';

  const makeCssRule = (obj) => {
    let retval = ":root {\r\n";
    allPropNames.forEach(name => {
      if (obj.clrRef[`--USER-${name}`] === "Custom") {
        retval += `  --USER-${name}: ` + obj.clr[`--USER-${name}`] + ";\r\n";
      } else {
        retval += `  --USER-${name}: ` + `var(` + obj.clrRef[`--USER-${name}`] + ");\r\n";
      }
    });
    retval += "};";

    return retval;
  }

  $: CSS = makeCssRule($userProps);

  let modalOpen = false;
  const toggleModal = () => {
    modalOpen = modalOpen ? false : true;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CSS);
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
          <option value="reviews">Reviews</option>
          <option value="dashboard">Dashboard</option>
        </select>
    </li>
    <li><button class="iconButton" on:click={resetProps}><ReloadIcon /></button></li>
    <li><button class="iconButton" on:click={toggleModal}><ExportIcon /></button></li>
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
    <pre class="textBox">{CSS}</pre>
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