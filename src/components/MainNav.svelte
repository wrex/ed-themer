<script>
	import { sample, userProps, resetProps, sidebarExpanded } from '$lib/stores.js';
	import ExportIcon from '../icons/ExportIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ExpandRightIcon from '../icons/ExpandRightIcon.svelte';
	import Logo from './Logo.svelte';
	import { allPropNames } from '$lib/utils';

	const makeCssRule = (obj) => {
		let retval = ':root {\r\n';
		allPropNames.forEach((name) => {
			if (obj.clrRef[`--USER-${name}`] === 'Custom') {
				retval += `  --USER-${name}: ` + obj.clr[`--USER-${name}`] + ';\r\n';
			} else {
				retval += `  --USER-${name}: ` + `var(` + obj.clrRef[`--USER-${name}`] + ');\r\n';
			}
		});
		retval += '};';
		return retval;
	};

	$: CSS = makeCssRule($userProps);

	let stylesheetOpen = false;
	const toggleStylesheet = () => {
		stylesheetOpen = !stylesheetOpen;
	};

	let helpOpen = false;
	const toggleHelp = () => {
		helpOpen = !helpOpen;
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(CSS);
		toggleStylesheet();
	};

	const toggleSidebar = () => {
		$sidebarExpanded = !$sidebarExpanded;
	};
</script>

<nav>
	<ul>
		<li><Logo /></li>
	</ul>
	<ul>
		<li>
			<select bind:value={$sample}>
				<option value="surfaces" selected>Surfaces</option>
				<option value="reviews">Reviews</option>
				<option value="dashboard">Dashboard</option>
			</select>
		</li>
		{#if $sidebarExpanded}
			<li>
				<button class="iconButton" on:click={toggleSidebar}>
					<CollapseLeftIcon />
				</button>
			</li>
		{:else}
			<li>
				<button class="iconButton" on:click={toggleSidebar}>
					<ExpandRightIcon />
				</button>
			</li>
		{/if}
		<li><button class="iconButton" on:click={resetProps}><ReloadIcon /></button></li>
		<li><button class="iconButton" on:click={toggleStylesheet}><ExportIcon /></button></li>
		<li><button class="iconButton" on:click={toggleHelp}>?</button></li>
	</ul>
</nav>

<!-- Stylesheet modal -->
<dialog open={stylesheetOpen || null} id="stylesheet">
	<article>
		<a
			href="#close"
			aria-label="Close"
			class="close"
			data-target="stylesheet"
			on:click={toggleStylesheet}>&nbsp</a
		>
		<pre class="textBox">{CSS}</pre>
		<footer>
			<button data-target="stylesheet" on:click={copyToClipboard}> Copy to Clipboard </button>
		</footer>
	</article>
</dialog>

<!-- Help modal -->
<dialog open={helpOpen || null} id="helpfile">
	<article>
		<a href="#close" aria-label="Close" class="close" data-target="helpfile" on:click={toggleHelp}
			>&nbsp</a
		>
		<div class="helptext">
			<h1>Help text goes here</h1>
		</div>
		<footer>
			<button data-target="helpfile" on:click={toggleHelp}>OK</button>
		</footer>
	</article>
</dialog>

<style>
	.textBox {
		max-height: 50vh;
		overflow-y: scroll;
	}
</style>
