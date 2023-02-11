<script>
  import {userProps} from '$lib/stores.js';
</script>

<label for="radical-clr">radical-clr</label>
<input type="color" name="radical-clr" id="radical-clr" bind:value={$userProps['--USER-radical-clr']}>

<label for="kanji-clr">kanji-clr</label>
<input type="color" name="kanji-clr" id="kanji-clr" bind:value={$userProps['--USER-kanji-clr']}>

<label for="vocab-clr">vocab-clr</label>
<input type="color" name="vocab-clr" id="vocab-clr" bind:value={$userProps['--USER-vocab-clr']}>