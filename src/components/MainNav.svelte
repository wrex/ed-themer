<script>
	import {
		sample,
		userProps,
		resetProps,
		expandControls,
		modal,
		userCSS,
		makeTints
	} from '$lib/stores.js';
	import ExportIcon from '../icons/ExportIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ExpandRightIcon from '../icons/ExpandRightIcon.svelte';
	import HelpContent from './HelpContent.svelte';
	import Logo from './Logo.svelte';
	import { allPropNames } from '$lib/utils';
	import { browser } from '$app/environment';

	const toggleHelp = () => {
		$modal.help = !$modal.help;
	};

	const userToClipboard = () => {
		navigator.clipboard.writeText($userCSS);
		toggleStylesheet();
	};

	const toggleSidebar = () => {
		$expandControls = !$expandControls;
	};

	const minWidth = 912;
	const minHeight = 600;
	let width = minWidth;
	let height = minHeight;

	$: $modal.minScreen = width < minWidth || height < minHeight ? true : false;

	const genPaletteCSS = () => {
		let CSS = '';
		$userProps.palette.forEach(({ label, rgb, prop }) => {
			const tints = makeTints(rgb);
			Object.keys(tints).forEach((suffix) => {
				CSS += `  --${label}${suffix}: ${tints[suffix]};\r\n`;
			});
		});
		return CSS;
	};

	/**
	 * genUserCSS - generate custom props for each USER property
	 */
	const genUserCSS = () => {
		let CSS = '';
		allPropNames.forEach((name) => {
			const thisEntry = `--USER-${name}`;
			const refVal = $userProps.user[thisEntry].ref;
			const clrVal = $userProps.user[thisEntry].clr;
			if (refVal === 'custom') {
				CSS += `  ${thisEntry}: ${clrVal}; \r\n`;
			} else {
				CSS += `  ${thisEntry}: var(${refVal}); \r\n`;
			}
		});
		return CSS;
	};

	const toggleStylesheet = () => {
		$userCSS = genUserCSS() + `\r\n  /* palette colors */\r\n` + genPaletteCSS();
		$modal.userStyles = !$modal.userStyles;
	};
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

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
		{#if $expandControls}
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
<dialog open={$modal.userStyles || null} id="stylesheet">
	<article>
		<a
			href="#close"
			aria-label="Close"
			class="close"
			data-target="stylesheet"
			on:click={toggleStylesheet}>&nbsp</a
		>
		<h1>Custom Properties</h1>
		<!-- prettier-ignore -->
		<pre class="textBox">{`:root {\r\n${$userCSS}}`}</pre>
		<footer>
			<button data-target="stylesheet" on:click={userToClipboard}> Copy to Clipboard </button>
		</footer>
	</article>
</dialog>

<!-- Help modal -->
<dialog open={$modal.help || null} id="helpfile">
	<article>
		<a href="#close" aria-label="Close" class="close" data-target="helpfile" on:click={toggleHelp}
			>&nbsp</a
		>
		<HelpContent />
		<footer>
			<button data-target="helpfile" on:click={toggleHelp}>OK</button>
		</footer>
	</article>
</dialog>

<!-- Small screen modal -->
<dialog open={$modal.minScreen || null} id="minscreen">
	<article>
		<header>Screen too small</header>
		<p>
			This <em>desktop</em> app requires at least {minWidth}x{minHeight} viewport resolution to render
			correctly.
		</p>
		<p>Please adjust your browser window size and refresh the page.</p>
	</article>
</dialog>
