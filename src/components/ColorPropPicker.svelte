<script>
	/**
	 * @type string;
	 */
	export let id;

	import { allPropNames } from '$lib/utils';
	import { newUserProps, resetCallbacks } from '$lib/stores';

	/**
	 * @type string;
	 */
	let selected;

	/* If user reloads defaults, set select to "Custom" */
	resetCallbacks.push(() => {
		selected = '';
	});

	const pickerChange = () => {
		selected = '';
		let thisPropName = `--USER-${id}`;
		let thisColor = $newUserProps.user[thisPropName].clr;

		$newUserProps.user[thisPropName].ref = 'Custom';

		/* update any other pickers referencing this one */
		const refs = Object.keys($newUserProps.user).filter(
			(key) => $newUserProps.user[key].ref === thisPropName
		);
		refs.forEach((ref) => {
			$newUserProps.user[ref].clr = thisColor;
		});
	};

	const selectorChange = () => {
		$newUserProps.user[`--USER-${id}`].clr = $newUserProps.user[`--USER-${selected}`].clr;
		$newUserProps.user[`--USER-${id}`].ref = `--USER-${selected}`;
	};
</script>

<article>
	<header><label for={id}>{id}</label></header>
	<input
		type="color"
		name={id}
		{id}
		bind:value={$newUserProps.user[`--USER-${id}`].clr}
		on:change={pickerChange}
	/>
	<select bind:value={selected} on:change={selectorChange}>
		<option value="" disabled selected>Custom</option>
		{#each allPropNames.filter((name) => name !== id) as name}
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
