<script>
  /**
   * @type string;
   */
  export let id;

  import {allPropNames} from '$lib/utils';
  import {userProps} from '$lib/stores';

  /**
   * @type string;
   */
  let selected;

  const handleChange = () => {
    if (allPropNames.includes(selected)) {
      $userProps[`--USER-${id}`] = $userProps[`--USER-${selected}`];
    }
  }


</script>

<label for={id}>{id}</label>
<div class="controls">
  <input type="color" name={id} id={id} bind:value={$userProps[`--USER-${id}`]}
  on:change={() => selected = ""}>
  <select bind:value={selected} on:change={handleChange}>
    <option value="" disabled selected>Custom</option>
    {#each allPropNames.filter(name => name !== id) as name}
    <option>{name}</option>
    {/each}
  </select>
</div>

<style>
  .controls {
    padding-left: 1em;
  }
  input {
    margin-bottom: 0;
    padding: 0.25em;
    height: 2em;
  }
  select {
    display: inline-block;
    font-size: small;
    line-height: 1;
    padding-block: 0.5em;
  }

</style>