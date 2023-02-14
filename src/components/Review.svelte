<script>
	let itemType = 'radical';
	let item = '宀';
	let qType = 'meaning';
	let correctness = 'unanswered';
	let answer = '';

	$: {
		if (itemType === 'radical') {
			item = '宀';
		} else if (itemType === 'kanji') {
			item = '字';
		} else {
			item = '漢字';
		}
	}

	$: {
		if (correctness === 'unanswered') {
			answer = '';
		} else if (correctness === 'correct') {
			answer = 'correct response';
		} else {
			answer = 'incorrect response';
		}
	}
</script>

<div class="reviews">
	<div class="review-progress" />
	<div class={itemType}>
		<div class="menu-and-stats">
			<span>HOME SETTINGS</span>
			<span>100% 3 15</span>
		</div>
		<div class="item">{item}</div>
		<div class={`quiz-bar ${qType == 'meaning' ? 'quiz-meaning' : 'quiz-reading'}`}>
			<h1>{itemType} <strong>{qType}</strong></h1>
		</div>
	</div>
	<div
		class="input-bar question"
		class:correct={correctness === 'correct'}
		class:incorrect={correctness === 'incorrect'}
	>
		<input type="text" placeholder="Response" bind:value={answer} />
		<div class="wkBtn">></div>
	</div>
	<form>
		<fieldset>
			<legend>Item</legend>
			<label for="radicalType">
				<input
					type="radio"
					id="radicalType"
					name="radicalType"
					bind:group={itemType}
					value="radical"
					checked
				/>
				Radical
			</label>
			<label for="kanjiType">
				<input type="radio" id="kanjiType" name="kanjiType" bind:group={itemType} value="kanji" />
				Kanji
			</label>
			<label for="vocabType">
				<input
					type="radio"
					id="vocabType"
					name="vocabType"
					bind:group={itemType}
					value="vocabulary"
				/>
				Vocabulary
			</label>
		</fieldset>
		<fieldset>
			<legend>Question</legend>
			<label for="question">
				<input type="radio" id="qMeaning" name="question" bind:group={qType} value="meaning" />
				Meaning
			</label>
			<label for="reading">
				<input type="radio" id="qReading" name="question" bind:group={qType} value="reading" />
				Reading
			</label>
		</fieldset>
		<fieldset>
			<legend>Answer</legend>
			<label for="ansUnanswered">
				<input
					type="radio"
					id="ansUnanswered"
					name="ansUnanswered"
					bind:group={correctness}
					value="unanswered"
				/>
				Unanswered
			</label>
			<label for="ansRight">
				<input
					type="radio"
					id="ansRight"
					name="ansRight"
					bind:group={correctness}
					value="correct"
				/>
				Correct
			</label>
			<label for="ansWrong">
				<input
					type="radio"
					id="ansWrong"
					name="ansWrong"
					bind:group={correctness}
					value="incorrect"
				/>
				Incorrect
			</label>
		</fieldset>
	</form>
</div>

<style>
	form {
		padding-inline: 1rem;
		display: flex;
		justify-content: space-evenly;
		gap: 1rem;
		min-width: 100%;
	}

	.reviews {
		display: flex;
		flex-direction: column;
		background-color: var(--USER-surface-1);
	}

	.radical {
		--bg-color: var(--USER-radical);
	}

	.kanji {
		--bg-color: var(--USER-kanji);
	}

	.vocabulary {
		--bg-color: var(--USER-vocab);
	}

	.review-progress {
		width: 33%;
		min-height: 10px;
		background-color: var(--USER-progress);
	}

	.menu-and-stats {
		min-height: 40px;
		background-color: var(--bg-color);
		color: var(--USER-text);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 5px;
	}

	.menu-and-stats *:hover {
		color: var(--USER-text-hl);
	}

	.item {
		background-color: var(--bg-color);
		color: var(--USER-text);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 8rem;
	}

	.quiz-bar {
		background-color: var(--USER-surface-2);
		display: flex;
		justify-content: center;
		padding: 5px;
	}

	.quiz-bar h1 {
		font-size: 2rem;
		text-transform: capitalize;
		margin: 0;
	}

	.quiz-meaning {
		background-color: var(--USER-meaning);
	}

	.quiz-reading {
		background-color: var(--USER-reading);
	}

	.input-bar {
		display: flex;
		margin: 10px;
	}

	.input-bar input[type='text'] {
		flex-grow: 1;
		text-align: center;
		font-size: 1.5rem;
		padding: 0.5em;
		margin: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input-bar.question input[type='text'] {
		background-color: var(--USER-surface-4);
	}

	.input-bar.correct input[type='text'] {
		background-color: var(--USER-correct);
	}

	.input-bar.incorrect input[type='text'] {
		background-color: var(--USER-incorrect);
	}

	.input-bar .wkBtn {
		background-color: var(--USER-surface-3);
		color: var(--USER-text);
		font-size: 2rem;
		padding: 0 0.5em;
		border: none;
	}
	.controls {
		display: flex;
		justify-content: space-around;
	}

	.controls button {
		border: none;
		padding: 0.5em;
		color: var(--USER-text);
	}
</style>
