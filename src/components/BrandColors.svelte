<script>
  import {userProps} from '$lib/stores.js';
</script>

<label for="brand">brand</label>
<input type="color" name="brand" id="brand" bind:value={$userProps['--USER-brand']}>

<label for="progress">progress</label>
<input type="color" name="progress" id="progress" bind:value={$userProps['--USER-progress-clr']}>

<label for="success">success</label>
<input type="color" name="success" id="success" bind:value={$userProps['--USER-success']}>

<label for="alert">alert</label>
<input type="color" name="alert" id="alert" bind:value={$userProps['--USER-alert']}>