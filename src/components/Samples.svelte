<div class="surface-1">
  <div class="inset surface-2">
    Surface 2 <span class="highlight">highlighted text</span> <span class="grayed">grayed text</span>
  </div>
  <div class="inset surface-2">
    <div class="inset surface-3">
      Surface 3 <span class="highlight">highlighted text</span> <span class="grayed">grayed text</span>
    </div>
  </div>
  <div class="inset surface-2">
    <div class="inset surface-3">
      <div class="inset surface-4">
        Surface 4 <span class="highlight">highlighted text</span> <span class="grayed">grayed text</span>
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
  }

  .inset {
    padding: 1em;
    margin: 0.5em 2em;
  }
  .surface-2,
  .surface-3,
  .surface-4,
  .inverted-surface {
    margin-bottom: 1em;
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
  }

  .highlight {
    color: var(--USER-highlight-text);
  }

  .grayed {
    color: var(--USER-grayed-text);
  }
</style>