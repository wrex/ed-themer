<script>
  export let id = "foo";
  
  import {tint, shade} from "$lib/utils";

  console.log(shade("#7e1111", 0.2))

  let baseClr = "#888888";
  $: customProps = `
  --baseClr: ${baseClr};
  --t13: ${tint(baseClr, 0.13)};
  --t26: ${tint(baseClr, 0.26)};
  --t39: ${tint(baseClr, 0.39)};
  --t52: ${tint(baseClr, 0.52)};
  --t65: ${tint(baseClr, 0.65)};
  --t78: ${tint(baseClr, 0.78)};
  --t91: ${tint(baseClr, 0.91)};
  --s13: ${shade(baseClr, 0.13)};
  --s26: ${shade(baseClr, 0.26)};
  --s39: ${shade(baseClr, 0.39)};
  --s52: ${shade(baseClr, 0.52)};
  --s65: ${shade(baseClr, 0.65)};
  --s78: ${shade(baseClr, 0.78)};
  --s91: ${shade(baseClr, 0.91)};
  `;
</script>

<div class="container" style={customProps}>
  <div class="swatch s91"></div>
  <div class="swatch s78"></div>
  <div class="swatch s65"></div>
  <div class="swatch s52"></div>
  <div class="swatch s39"></div>
  <div class="swatch s26"></div>
  <div class="swatch s13"></div>
  <input type="color" name={id} id={id} bind:value={baseClr}>
  <div class="swatch t13"></div>
  <div class="swatch t26"></div>
  <div class="swatch t39"></div>
  <div class="swatch t52"></div>
  <div class="swatch t65"></div>
  <div class="swatch t78"></div>
  <div class="swatch t91"></div>
</div>

<style>
  .container {
    padding: 0.25em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container > input {
    width: 50vw;
    margin: 0;
    padding: 0.5em;
  }

  .swatch {
    border: 1px solid var(--baseClr);
    height: 50px;
    width: 100vw;
  }

  .t13 {
    background-color: var(--t13);
  }
  .t26 {
    background-color: var(--t26);
  }
  .t39 {
    background-color: var(--t39);
  }
  .t52 {
    background-color: var(--t52);
  }
  .t65 {
    background-color: var(--t65);
  }
  .t78 {
    background-color: var(--t78);
  }
  .t91 {
    background-color: var(--t91);
  }

  .s13 {
    background-color: var(--s13);
  }
  .s26 {
    background-color: var(--s26);
  }
  .s39 {
    background-color: var(--s39);
  }
  .s52 {
    background-color: var(--s52);
  }
  .s65 {
    background-color: var(--s65);
  }
  .s78 {
    background-color: var(--s78);
  }
  .s91 {
    background-color: var(--s91);
  }

</style>