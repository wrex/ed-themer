<script>
  import {userProps} from '$lib/stores.js';
</script>

<label for="apprentice-clr">apprentice-clr</label>
<input type="color" name="apprentice-clr" id="apprentice-clr" bind:value={$userProps['--USER-apprentice-clr']}>

<label for="guru-clr">guru-clr</label>
<input type="color" name="guru-clr" id="guru-clr" bind:value={$userProps['--USER-guru-clr']}>

<label for="master-clr">master-clr</label>
<input type="color" name="master-clr" id="master-clr" bind:value={$userProps['--USER-master-clr']}>

<label for="enlightened-clr">enlightened-clr</label>
<input type="color" name="enlightened-clr" id="enlightened-clr" bind:value={$userProps['--USER-enlightened-clr']}>

<label for="burned-clr">burned-clr</label>
<input type="color" name="burned-clr" id="burned-clr" bind:value={$userProps['--USER-burned-clr']}>