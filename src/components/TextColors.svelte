<script>
  import {userProps} from '$lib/stores.js';
</script>

<label for="text-clr">text-clr</label>
<input type="color" name="text-clr" id="text-clr" bind:value={$userProps['--USER-text-clr']}>

<label for="inverted-text">inverted-text</label>
<input type="color" name="inverted-text" id="inverted-text" bind:value={$userProps['--USER-inverted-text']}>

<label for="highlight-text">highlight-text</label>
<input type="color" name="highlight-text" id="highlight-text" bind:value={$userProps['--USER-highlight-text']}>

<label for="grayed-text">grayed-text</label>
<input type="color" name="grayed-text" id="grayed-text" bind:value={$userProps['--USER-grayed-text']}>