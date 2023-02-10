<script>
  import {userProps} from '$lib/userPropStore.js';
</script>

<label for="surface-1">surface-1</label>
<input type="color" name="surface-1" id="surface-1" bind:value={$userProps['--USER-surface-1']}>

<label for="surface-2">surface-2</label>
<input type="color" name="surface-2" id="surface-2" bind:value={$userProps['--USER-surface-2']}>

<label for="surface-3">surface-3</label>
<input type="color" name="surface-3" id="surface-3" bind:value={$userProps['--USER-surface-3']}>

<label for="surface-4">surface-4</label>
<input type="color" name="surface-4" id="surface-4" bind:value={$userProps['--USER-surface-4']}>

<label for="inverted-surface">inverted-surface</label>
<input type="color" name="inverted-surface" id="inverted-surface" bind:value={$userProps['--USER-inverted-surface']}>