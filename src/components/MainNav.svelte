<script>
	import {
		sample,
		userProps,
		resetProps,
		expandControls,
		modal,
		userCSS,
		makeTints
	} from '$lib/stores';
	import OutBoxIcon from '../icons/OutBoxIcon.svelte';
	import InBoxIcon from '../icons/InBoxIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ExpandRightIcon from '../icons/ExpandRightIcon.svelte';
	import HelpContent from './HelpContent.svelte';
	import Logo from './Logo.svelte';
	import { allPropNames } from '$lib/utils';

	const toggleHelp = () => {
		$modal.help = !$modal.help;
	};

	let importText = '';
	const toggleImport = () => {
		$modal.importStyles = !$modal.importStyles;
	};

	const importProperties = () => {
		const lines = importText.split('\n');
		lines.forEach((line) => {
			let matched;
			if ((matched = line.match(/--USER-theme[^\s:]*:\s*"([^"]+)/i))) {
				$userProps.name = matched[1];
			} else if ((matched = line.match(/(--USER-[^\s:]+):\s*(#[a-z0-9]+)/i))) {
				$userProps.user[matched[1]].clr = matched[2];
				$userProps.user[matched[1]].ref = 'custom';
			} else if ((matched = line.match(/--([^\s:]+)-7\s*:\s*(#[a-z0-9]+)/i))) {
				const label = matched[1];
				const rgb = matched[2];
				const index = $userProps.palette.findIndex((elm) => elm.label === label);
				if (index !== -1) {
					// found
					$userProps.palette[index].rgb = rgb;
					$userProps.palette[index].props = makeTints(rgb);
				} else {
					// new color
					$userProps.palette.push({
						label: label,
						rgb: rgb,
						props: makeTints(rgb)
					});
				}
			}
			if (matched && $userProps.name === 'default') {
				// disallow name of "default" if anything imported
				$userProps.name = 'unnamed';
			}
		});
		toggleImport();
	};

	const toggleExport = () => {
		$userCSS = genUserCSS() + `\r\n  /* palette colors */\r\n` + genPaletteCSS();
		$modal.userStyles = !$modal.userStyles;
	};

	const userToClipboard = () => {
		navigator.clipboard.writeText(':root {\r\n' + $userCSS + '}');
		toggleExport();
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
		let CSS = `  --USER-theme: "${$userProps.name}";\r\n`;
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
		<li><button class="iconButton" on:click={toggleImport}><InBoxIcon /></button></li>
		<li><button class="iconButton" on:click={toggleExport}><OutBoxIcon /></button></li>
		<li><button class="iconButton" on:click={toggleHelp}>?</button></li>
	</ul>
</nav>

<!-- Export modal -->
<dialog open={$modal.userStyles || null} id="export">
	<article>
		<a href="#close" aria-label="Close" class="close" data-target="export" on:click={toggleExport}
			>&nbsp</a
		>
		<h2>Export Properties</h2>
		<!-- prettier-ignore -->
		<pre class="textBox">{`:root {\r\n${$userCSS}}`}</pre>
		<footer>
			<button data-target="export" on:click={userToClipboard}> Copy to Clipboard </button>
		</footer>
	</article>
</dialog>

<!-- Import modal -->
<dialog open={$modal.importStyles || null} id="import">
	<article>
		<a href="#close" aria-label="Close" class="close" data-target="import" on:click={toggleImport}
			>&nbsp</a
		>
		<h2>Import properties</h2>
		<textarea
			placeholder="Enter (or paste) one CSS custom property declaration per line"
			bind:value={importText}
		/>
		<footer>
			<button data-target="import" on:click={importProperties}>Import</button>
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

<style>
	#import textarea {
		font-size: small;
		min-height: 35vh;
		min-width: 15em;
	}
</style>
