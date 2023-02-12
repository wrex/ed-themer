<script>
  /**
   * @type string;
   */
  export let id;

  import {allPropNames} from '$lib/utils';
  import {userProps, resetCallbacks} from '$lib/stores';

  /**
   * @type string;
   */
  let selected;

  /* If user reloads defaults, set select to "Custom" */
  resetCallbacks.push(() => {
    selected = "";
  });

  const pickerChange = () => {
    selected = "";
    let thisPropName = `--USER-${id}`;
    let thisColor = $userProps.clr[thisPropName];

    $userProps.clrRef[thisPropName] = "Custom";

    /* update any other pickers referencing this one */
    const refs = Object.keys($userProps.clrRef).filter(
      key => $userProps.clrRef[key] === thisPropName
    );
    refs.forEach(ref => {
      $userProps.clr[ref] = thisColor;
    });
  }

  const selectorChange = () => {
    $userProps.clr[`--USER-${id}`] = $userProps.clr[`--USER-${selected}`];
    $userProps.clrRef[`--USER-${id}`] = `--USER-${selected}`;
  }
</script>

<article>
  <header><label for={id}>{id}</label></header>
  <input 
    type="color" 
    name={id} 
    id={id} 
    bind:value={$userProps.clr[`--USER-${id}`]}
    on:change={pickerChange}
  >
  <select bind:value={selected} on:change={selectorChange}>
    <option value="" disabled selected>Custom</option>
    {#each allPropNames.filter(name => name !== id) as name}
    <option>{name}</option>
    {/each}
  </select>
</article>

<style>
  article {
    --block-spacing-vertical: 0.5em;
    --block-spacing-horizontal: 0.5em;
    --spacing: 0.5em;
    line-height: 1;
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