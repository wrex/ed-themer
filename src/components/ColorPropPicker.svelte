<script>
	/**
	 * @type string;
	 */
	export let id;

	import { allPropNames, slugify } from '$lib/utils';
	import { userProps, resetCallbacks } from '$lib/stores';

	/**  @type string; */
	let userPropSelector;

	/* If user reloads defaults, set selectors to "custom" */
	resetCallbacks.push(() => {
		userPropSelector = '';
		palettePropSelector = '';
	});

	const pickerChange = () => {
		userPropSelector = '';
		palettePropSelector = '';
		let thisPropName = `--USER-${id}`;
		let thisColor = $userProps.user[thisPropName].clr;

		$userProps.user[thisPropName].ref = 'custom';

		/* update any other pickers referencing this one */
		const refs = Object.keys($userProps.user).filter(
			(key) => $userProps.user[key].ref === thisPropName
		);
		refs.forEach((ref) => {
			$userProps.user[ref].clr = thisColor;
		});
	};

	const userPropChange = () => {
		$userProps.user[`--USER-${id}`].clr = $userProps.user[`--USER-${userPropSelector}`].clr;
		$userProps.user[`--USER-${id}`].ref = `--USER-${userPropSelector}`;
		palettePropSelector = '';
	};

	/**  @type string; */
	let palettePropSelector = '';

	/** @type {string[]} */
	let paletteNames = [];

	$: paletteNames = $userProps.palette.reduce(
		/**
		 * @param {string[]} acc
		 * @param {{label: string, rgb: string, props: {[key: string]: string}}} cur
		 */
		(acc, cur) => acc.concat(Object.keys(cur.props).map((suffix) => `${cur.label}${suffix}`)),
		[]
	);

	const palettePropChange = () => {
		// parse strings like "really-long-label-suffix"
		const label = palettePropSelector.replace(/-[^-]+$/, '');

		const temp = palettePropSelector.match(/-[^-]+$/);
		const suffix = temp ? temp[0] : '';

		const found = $userProps.palette.find(
			/** @param {{label: string, rgb: string, props: {[key: string]: string }}} palette */
			(palette) => palette.label === label
		);

		$userProps.user[`--USER-${id}`].clr = found.rgb;
		$userProps.user[`--USER-${id}`].ref = `--${label}${suffix}`;
		userPropSelector = '';
	};
</script>

<article>
	<header><label for={id}>{id}</label></header>
	<input
		type="color"
		name={id}
		{id}
		bind:value={$userProps.user[`--USER-${id}`].clr}
		on:change={pickerChange}
	/>
	<select required bind:value={userPropSelector} on:change={userPropChange}>
		<option value="" disabled selected>User Prop</option>
		{#each allPropNames.filter((name) => name !== id) as name}
			<option>{name}</option>
		{/each}
	</select>
	<select required bind:value={palettePropSelector} on:change={palettePropChange}>
		<option value="" disabled selected>Palette Prop</option>
		{#each paletteNames as name}
			<option>{slugify(name)}</option>
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
