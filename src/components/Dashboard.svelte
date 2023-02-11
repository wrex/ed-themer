<div class="container">
  <div class="progress-and-forecast">
    <div class="lessons-and-reviews">
      <ul>
        <li>
          <div class="lessons">Lessons <span class="right">21</span></div>
        </li>
        <li>
          <div class="reviews">Reviews <span class="right">99</span></div>
        </li>
      </ul>
    </div>
    <div class="extra-study">
      <h1>Extra Study</h1>
      <div class="es-left-content">
        <p>
          Extra Study lets you practice your radicals, kanji, and vocabulary
          outside of your regular Reviews. Practice done here won't count
          toward regular Reviews, but will count toward making your memory
          stronger!
        </p>
        <div class="extra-study-block">
          <p>51 Recent Lessons</p>
        </div>
        <div class="extra-study-block">
          <p>67 Recent Mistakes</p>
        </div>
        <div class="extra-study-block">
          <p>6530 Burned Items</p>
        </div>
      </div>
      <img
        src="https://assets.wanikani.com/packs/media/components/ExtraStudyDashboard/Images/coach-finish-line-512-980420c43848f1e230e4c25242ea46e5.png"
        srcset="
          https://assets.wanikani.com/packs/media/components/ExtraStudyDashboard/Images/coach-finish-line-512-980420c43848f1e230e4c25242ea46e5.png   512w,
          https://assets.wanikani.com/packs/media/components/ExtraStudyDashboard/Images/coach-finish-line-1024-697940e075b3520fda3492c3abae0bbd.png 1024w,
          https://assets.wanikani.com/packs/media/components/ExtraStudyDashboard/Images/coach-finish-line-2048-18fceaaf605e0bdc5309acb57f64885e.png 2048w
        "
        sizes="(min-width: 768px) 29vw, 100vw"
        alt=""
        class="w-2/3 sm:w-full"
      />
    </div>
    <div class="dashboard-progress">
      <h1>Level 60 Progress</h1>
      <div class="overall-progress"><div class="overall-bar"></div> 10 of 30 kanji passed</div>
      <div class="radical-progress">
        <h2>Radicals</h2>
        <div class="progress-entries">
          <div class="progress-entry">
            <div class="radical">宀</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
      <div class="kanji-progress">
        <h2>Kanji</h2>
        <div class="progress-entries">
          <div class="progress-entry">
            <div class="kanji">字</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
          <div class="progress-entry">
            <div class="kanji">字</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
          <div class="progress-entry">
            <div class="kanji">字</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
          <div class="progress-entry">
            <div class="kanji">字</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
          <div class="progress-entry">
            <div class="locked">秘</div>
            <div class="pips">
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip brand">&nbsp;</div>
              <div class="pip">&nbsp;</div>
              <div class="pip">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 1170px;
    margin: 40px auto;
  }

  .progress-and-forecast {
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: 150px auto auto;
    gap: 30px 20px;
  }

  .lessons-and-reviews {
    grid-column: 1 / span 4;
    grid-row: 1 / 2;
  }

  .lessons-and-reviews ul {
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  .lessons-and-reviews li {
    /* flex: 0 1 370px; */
    list-style-type: none;
  }

  .lessons-and-reviews .lessons,
  .lessons-and-reviews .reviews {
    width: 320px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 150px;
    border-radius: 5px;
    display: block;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    padding: 116px 16px 16px;
    position: relative;
    background-image: url(https://assets.wanikani.com/assets/dashboard/buttons/bg_lessons-1-9c106fff33b5cbfbc1a01f82f9966bec87cc935ab91fc0275dc42dcbeb2e82ba.png);
  }

  .lessons-and-reviews .lessons {
    --ED-button-fg: var(--USER-text-clr);
    --ED-button-bg: var(--USER-lesson-clr);
    background-color: var(--ED-button-bg);
    color: var(--ED-button-fg);
  }

  .lessons-and-reviews .reviews {
    --ED-button-fg: var(--USER-text-clr);
    --ED-button-bg: var(--USER-review-clr);
    background-color: var(--ED-button-bg);
    color: var(--ED-button-fg);
    margin: 0;
  }

  .lessons:hover,
  .reviews:hover {
    color: var(--USER-highlight-text);
  }

  .lessons-and-reviews .lessons span,
  .lessons-and-reviews .reviews span {
    float: right;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: var(--USER-text-clr);
  }

  .lessons-and-reviews .lessons span {
    color: var(--USER-lesson-clr);
  }

  .lessons-and-reviews .reviews span {
    color: var(--USER-review-clr);
  }

  .extra-study {
    grid-column: 1 / span 4;
    grid-row: 2 / 3;
    background-color: var(--USER-surface-2);
    margin: 0;
    /* padding: 16px 12px 12px; */
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px 20px;
  }

  .extra-study > * {
    width: 318px;
    margin: 0;
    padding: 12px;
  }

  .extra-study h1 {
    width: 100%;
  }

  .extra-study img {
    object-fit: scale-down;
  }

  .extra-study-block {
    margin: 10px 0;
    line-height: 1;
    border: 2px solid var(--USER-brand);
  }

  .extra-study-block p {
    margin: 10px;
  }

  .extra-study-block p:hover {
    color: var(--USER-brand);
  }

  .dashboard-progress {
    grid-column: 1 / span 4;
    grid-row: 3 / 4;
    background-color: var(--USER-surface-2);
    padding-left: 12px;
  }

  .dashboard-progress .overall-progress {
    background-color: var(--USER-surface-3);
    padding: 12px;
    border-radius: 36px;
    position: relative;
    text-align: center;
  }

  .dashboard-progress div.overall-bar {
    position: absolute;
    inset: 0;
    padding: 12px;
    border-radius: 36px;
    width: 30%;
    height: 100%;
    margin: 0;
    background-color: var(--USER-progress-clr);
  }

  .dashboard-progress .radical-progress,
  .dashboard-progress .kanji-progress {
    background-color: var(--USER-surface-3);
    padding: 12px;
    margin-block: 12px;
  }

  .radical-progress h2,
  .kanji-progress h2 {
    border-bottom: 1px solid var(--USER-text-light);
  }

  .progress-entries {
    display: grid;
    gap: 12px 8px;
    grid-gap: 12px 8px;
    grid-template-columns: repeat(auto-fill, minmax(39px, auto));
  }

  .progress-entry {
    margin-bottom: 0;
    margin-right: 0;
    text-align: center;
    font-size: 21px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .progress-entry .radical,
  .progress-entry .kanji,
  .progress-entry .locked {
    flex-grow: 1;
    padding-block: 12px;
  }

  .pips {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .pip {
    height: 10px;
    background-color: var(--USER-inverted-surface);
  }

  .brand {
    background-color: var(--USER-brand);
  }

  .radical {
    background-color: var(--USER-radical-clr);
  }

  .kanji {
    background-color: var(--USER-kanji-clr);
  }

  .vocabulary {
    background-color: var(--USER-vocab-clr);
  }

  .locked {
    background-color: var(--USER-surface-4);
  }
</style>