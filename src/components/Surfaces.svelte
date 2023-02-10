<div class="surface-1">
  <div class="inset surface-2">
    Surface 2, <b>BOLD</b>, <i>italic</i>, <span
    class="grayed">grayed,</span> <span class="highlight">highlighted</span>
  </div>
  <div class="inset surface-2">
    <div class="inset surface-3">
      Surface 3, <b>BOLD</b>, <i>italic</i>, <span
      class="grayed">grayed,</span> <span class="highlight">highlighted</span>
    </div>
  </div>
  <div class="inset surface-2">
    <div class="inset surface-3">
      <div class="inset surface-4">
        Surface 4, <b>BOLD</b>, <i>italic</i>, <span
        class="grayed">grayed,</span> <span class="highlight">highlighted</span>
      </div>
    </div>
  </div>
  <div class="inset surface-2">
    <div class="inset surface-3">
      <div class="inset surface-4">
        <div class="inset inverted-surface">Inverted, <b>BOLD</b>, <i>italic</i></div>
      </div>
    </div>
  </div>
</div>

<style>

  .surface-1 {
    height: 100%;
    background-color: var(--USER-surface-1);
    color: var(--USER-text-clr);
    overflow: scroll;
    padding: 2em;
  }

  .surface-1 > *:not(:first-child) {
    margin-top: 1em;
  }

  .inset {
    padding: 1em;
  }

  .surface-2 {
    background-color: var(--USER-surface-2);
  }
  .surface-3 {
    background-color: var(--USER-surface-3);
  }
  .surface-4 {
    background-color: var(--USER-surface-4);
  }
  .inverted-surface {
    background-color: var(--USER-inverted-surface);
    color: var(--USER-inverted-text)
  }

  .highlight {
    color: var(--USER-highlight-text);
  }

  .grayed {
    color: var(--USER-grayed-text);
  }
</style>