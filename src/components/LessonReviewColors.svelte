<script>
  import {userProps} from '$lib/stores.js';
</script>

<label for="lesson-clr">lesson-clr</label>
<input type="color" name="lesson-clr" id="lesson-clr" bind:value={$userProps['--USER-lesson-clr']}>

<label for="review-clr">review-clr</label>
<input type="color" name="review-clr" id="review-clr" bind:value={$userProps['--USER-review-clr']}>

<label for="correct">correct</label>
<input type="color" name="correct" id="correct" bind:value={$userProps['--USER-correct']}>

<label for="incorrect">incorrect</label>
<input type="color" name="incorrect" id="incorrect" bind:value={$userProps['--USER-incorrect']}>

<label for="meaning-clr">meaning-clr</label>
<input type="color" name="meaning-clr" id="meaning-clr" bind:value={$userProps['--USER-meaning-clr']}>

<label for="reading-clr">reading-clr</label>
<input type="color" name="reading-clr" id="reading-clr" bind:value={$userProps['--USER-reading-clr']}>