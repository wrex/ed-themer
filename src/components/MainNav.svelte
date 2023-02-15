<script>
	import {
		sample,
		userProps,
		resetProps,
		sidebarExpanded,
		modal,
		userCSS,
		paletteCSS,
		swatches
	} from '$lib/stores.js';
	import ExportIcon from '../icons/ExportIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ExpandRightIcon from '../icons/ExpandRightIcon.svelte';
	import HelpContent from './HelpContent.svelte';
	import Logo from './Logo.svelte';
	import { allPropNames, slugify } from '$lib/utils';
	import { tint, shade } from '$lib/colorUtils';

	const toggleHelp = () => {
		$modal.help = !$modal.help;
	};

	const userToClipboard = () => {
		navigator.clipboard.writeText($userCSS);
		toggleStylesheet();
	};

	const toggleSidebar = () => {
		$sidebarExpanded = !$sidebarExpanded;
	};

	/* Last color row used for algorithmic additions */
	$: lastColor = $swatches[$swatches.length - 1].clr;

	/**
	 * genPaletteCSS - generate custom props for Palette
	 * @param {{clr: string, label: string}[]} swatches
	 */
	const genPaletteCSS = (swatches) => {
		/**
		 * swatchCSS - props for tints and shades of one color
		 * @param {string} clr
		 * @param {string} label
		 */
		const swatchCss = (clr, label) => {
			/* brightest tint to darkest shade */
			return `
--${slugify(label)}-0: ${tint(clr, 0.91)}
--${slugify(label)}-1: ${tint(clr, 0.78)}
--${slugify(label)}-2: ${tint(clr, 0.65)}
--${slugify(label)}-3: ${tint(clr, 0.52)}
--${slugify(label)}-4: ${tint(clr, 0.39)}
--${slugify(label)}-5: ${tint(clr, 0.26)}
--${slugify(label)}-6: ${tint(clr, 0.13)}
--${slugify(label)}-7: ${clr}
--${slugify(label)}-8: ${shade(clr, 0.13)}
--${slugify(label)}-9: ${shade(clr, 0.26)}
--${slugify(label)}-10: ${shade(clr, 0.39)}
--${slugify(label)}-11: ${shade(clr, 0.52)}
--${slugify(label)}-12: ${shade(clr, 0.65)}
--${slugify(label)}-13: ${shade(clr, 0.78)}
--${slugify(label)}-14: ${shade(clr, 0.91)}
`;
		};
		let CSS = '';
		swatches.forEach((swatch) => {
			CSS += swatchCss(swatch.clr, swatch.label);
		});
		return CSS;
	};

	const toggleStylesheet = () => {
		console.log('in toggle');
		$paletteCSS = genPaletteCSS($swatches);
		$modal.userStyles = !$modal.userStyles;
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
		<pre class="textBox">
:root &lbrace;
			{#each allPropNames as name}
				{#if $userProps.clrRef[`--USER-${name}`] === 'Custom'}
	--USER-{name}: {$userProps.clr[`--USER-${name}`]};<br />
				{:else}
	--USER-{name}: var({$userProps.clrRef[`--USER-${name}`]});
				{/if}
			{/each}
/* * * * * * * * * * * * * * * * * * * * * * * * */
{$paletteCSS}
&rbrace;
		</pre>
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
