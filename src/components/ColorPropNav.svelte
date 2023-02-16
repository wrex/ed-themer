<script>
	import ColorPropPicker from './ColorPropPicker.svelte';

	import {
		surfaceNames,
		textNames,
		brandNames,
		typeNames,
		srsNames,
		reviewNames
	} from '$lib/utils';
	import { expandControls } from '$lib/stores';
</script>

<div id="user-colors">
	{#if $expandControls}
		<h3>Props</h3>

		<details>
			<summary>Surfaces</summary>
			{#each surfaceNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>

		<details>
			<summary>Text</summary>
			{#each textNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>

		<details>
			<summary>Brand</summary>
			{#each brandNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>

		<details>
			<summary>Types</summary>
			{#each typeNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>

		<details>
			<summary>SRS</summary>
			{#each srsNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>

		<details>
			<summary>Reviews</summary>
			{#each reviewNames as name}
				<ColorPropPicker id={name} />
			{/each}
		</details>
	{/if}
</div>
