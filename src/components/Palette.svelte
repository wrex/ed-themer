<script>
  import PaletteBar from "./PaletteBar.svelte";

  let numBars = 1;

  /* max 20, min 1 bar */
  const incr = () => { if (numBars < 19) numBars += 1;}
  const decr = () => { if (numBars > 1) numBars -= 1;}
</script>

<div class="palette">
  <div class="bars">
    <nav>
      <ul>
        <li><button on:click={incr}>+</button></li>
        <li><button on:click={decr}>-</button></li>
      </ul>
    </nav>
    <div class="swatches">
      <header>Click center swatch to change color</header>
      {#each Array(numBars) as i}
        <PaletteBar />
      {/each}
    </div>
  </div>
</div>

<style>
  .palette {
    display: flex;
    align-items: start;
  }

  .bars {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: 
      "buttons swatches";
  }

  .bars nav {
    align-self: start;
    grid-area: buttons;
    padding: 0 1em 0 0;
  }

  .swatches {
    align-self: center;
    grid-area: swatches;
  }

  .swatches {
    text-align: center;
    font-size: smaller;
  }

  h2 {
    display: inline;
    margin: 1em 0;
    padding: 0;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: normal;
    text-align: center;
  }
</style>