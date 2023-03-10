<script>
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import InBoxIcon from '../icons/InBoxIcon.svelte';
	import OutBoxIcon from '../icons/OutBoxIcon.svelte';
</script>

<h1>WK Elementary Dark Themer</h1>

<p>
	This app lets you create a set of "CSS custom properties" to override the default color scheme of
	the Elementary Dark stylesheet for <a href="https://www.wanikani.com">WaniKani.com</a>.
</p>

<div class="notice">
	<header>Note</header>
	<p>To close this dialog, click the "x" icon at the top, or the "OK" button at the end.</p>
	<p>
		<mark> You may have to scroll to see these! </mark>
	</p>
</div>

<h2>Installation</h2>
<ol>
	<li>
		First install <a href="https://github.com/openstyles/stylus">Stylus</a> or something similar to manage
		custom stylesheets.
	</li>
	<li>
		Next, install the <a
			href="https://raw.githubusercontent.com/Sepitus-exe/WKElementaryDark/main/WKElementaryDark.css"
			>WaniKani Elementary Dark Stylsheet</a
		> to override the default WaniKani styling/colors.
	</li>
	<li>
		Then use this app to choose your desired color scheme. Click the export icon in the top menu
		bar, then copy the resultant CSS rule into your clipboard.
	</li>
	<li>
		Finally, use <a href="https://github.com/openstyles/stylus">Stylus</a> or whatever to create a new
		stylesheet, and paste in the contents of your clipboard. You probably only want the stylesheet to
		apply to pages in the wanikani.com domain, but it's unlikely to hurt anything if it runs everywhere.
	</li>
</ol>

<h2>Top navigation</h2>
<p>The dropdown selector changes which mockup to display (surfaces, dashboard, or reviews).</p>

<button class="iconButton">
	<CollapseLeftIcon />
</button>
<p>
	This button toggles the display of the control panels (props on the left, palette below) to let
	you focus on the different sample screens.
</p>

<button class="iconButton">
	<ReloadIcon />
</button>
<p>
	Resets all of the user styles on the left to the defaults. Note that this does <em>not</em> remove
	or reset any of your palette swatches.
</p>
<p>
	<mark>WARNING:</mark> There is no confirmation dialog with the reset button. Any changes you've made
	or swatches you've added will be lost as soon as you click the button.
</p>

<button class="iconButton">
	<InBoxIcon />
</button>
<p>
	<em>Imports</em> custom property definitions. You can either type in or, better, paste in the custom
	property declarations you wish to load. The format is identical to the export format (see the following
	section).
</p>
<p>
	Only one custom property definition is allowed per line, and only lines containing an rgb color
	definition (a '#' character followed by three or 6 hexadecimal digits) will be imported. All other
	lines are ignored.
</p>
<p>
	Basically, the data format expects you to import data that was previously exported in another
	session (possibly something you saved externally yourself, or received from another user). Palette
	color declrations not ending "-7" are ignored ("-7" means the the center swatch color). The
	remaing 7 tints and 7 shades are always re-generated automatically.
</p>

<button class="iconButton">
	<OutBoxIcon />
</button>
<p>
	Exports all of the current settings as a single CSS rule with several custom property
	declarations, and allows you to copy the rule to your clipboard.
</p>

<h2>Central mockups</h2>

<p>
	The center section displays one of three mockup html files. You will probably want to style
	surfaces first, then reviews, then the dashboard.
</p>

<ol>
	<li>"Surfaces" lets you make color decisions for "surfaces" and text elements.</li>
	<li>
		"Reviews" mocks up the WaniKani UI during reviews and lessons. Since this is where you spend the
		most time in the app, it makes sense to spend much of your styling effort here. This mockup has
		toggles at the bottom to change the state (radical/kanji/vocab, etc.). You'll want to check all
		combinations of these to ensure your color choices "work"
	</li>
	<li>"Dashboard" shows a mockup of the WaniKani dashboard.</li>
</ol>

<h2>Props Sidebar</h2>

<p>
	This is where you create all of your preferred user styles. If the props sidebar is currently
	collapsed, first expand it using the expand button in the top navigation.
</p>

<p>
	Click any of the categories to display the user style settings available. Each category has
	several user properties that you can adjust.
</p>

<h3>Color picker</h3>
<p>
	There are three ways to specify the color for a given user property: using a color picker/mixer,
	selecting any of the other user property, or selecting any of the palette colors.
</p>
<p>
	Click on the color swatch to adjust the desired color for that property. The sample in the center
	of your screen will adapt to the new settings as you make changes. You may need to change the
	sample type (using the dropdown at the top) in order to see what a given property affects.
</p>

<p>
	Alternately, you can click a dropdown selector to reference any other user property, or any color
	swatch currently present in the palette section. This will automatically change the color
	displayed immediately above the dropdown.
</p>

<p>
	Note that using the color picker on top for any property will automatically revert the dropdown
	selectors to their unselected states. Similarly, selecting a property from one of the selectors
	will automatically set the color picker to the current value of the other property.
</p>

<p>
	Note that <em>almost</em> everything is fully reactive. In particular, changing the custom color of
	any user prop will also "live" update any other user properties on the left that are referencing that
	property.
</p>

<p>
	The only exception is with palette colors. Changing swatch names or central hue of any palette
	row, will <em>not</em> "live" update anything above. Please define your palette before making changes
	to the user properties on the left. Otherwise, you will have to reselect the palette properties that
	changed. (The pulldown list of properties in each selector will always reflect the current state of
	the palette.)
</p>

<h3>Eyedropper feature</h3>
<p>
	Note that the color picker provided by most (all?) modern browsers also include an "eyedropper"
	feature to pick up any other color on your screen. Both the color pickers on the left user
	properties panel, and the color picker for the central swatches in the palette below are provided
	by your browser (features vary).
</p>

<p>
	The eyedropper feature is particularly handy if you'd like to create a palette of colors from a
	photograph or anything else currently displayed on your screen.
</p>

<h2>Color palette</h2>

<p>
	The bottom section of the screen allows you to generate a consistent palette of related colors.
	The controls on the left allow you to add more rows of swatches.
</p>
<p>
	Initially, two rows of swatches are displayed: one row of gray swatches (centered on "#333333"),
	and one row of a random hue Each row contains 15 swatches: seven tints, the user selected color in
	the middle, and seven shades. Swatches are ordered from lightest to darkest.
</p>
<p>
	Each tint mixes a decreasing amount of white, from 91% white in the leftmost swatch, to 13% in the
	swatch just to the left of the central color picker. Similarly, each shade mixes from 13% to 91%
	of black (in 13% increments).
</p>

<p>
	The center of each row is a standard color picker: adjusting the color of the center swatch will
	change al tints and shades of that row as well.
</p>

<h3>Palette controls</h3>

<p>
	In the lower left of your screen, the dropdown selector and button below it add between 1 and 3
	additional rows of swatches according to various schemes:
</p>

<dl>
	<dt>Custom</dt>
	<dd>Creates a single row with a random initial hue.</dd>

	<dt>Complementary</dt>
	<dd>
		Also creates a single row, but chooses a hue that is the complement (180?? opposite hue) of the
		current bottom row's hue.
	</dd>

	<dt>Analogous</dt>
	<dd>Generates two more rows, each hue 30?? away ("adjacent" to) the bottom row's hue.</dd>

	<dt>Triadic</dt>
	<dd>
		Generates two more rows, each 120?? away from the bottom hue. This tends to generate a very
		balanced color scheme.
	</dd>

	<dt>Tetradic</dt>
	<dd>Generates three more rows, each 90?? away from each other.</dd>
</dl>

<p>
	The text input box to the right of each row allows you to specify a meaningful name for that row
	of swatches prior to export.
</p>

<p>
	Note that you can still change the color of any given row by clicking on the central color picker.
	It isn't necessary to select "Custom" to allow a row to be subsequently modified.
</p>

<p>
	<button class="iconButton">-</button> Removes that row of swatches. (The top row cannot be removed,
	and there is no "undelete" functionality).
</p>

<p>
	Note that as currently implemented, this palette tool only creates tints and shades, it doesn't
	create any "tones" (mixing middle gray rather than pure black or pure white).
</p>

<style>
	.notice {
		outline: 1px solid gray;
		padding: 1em;
	}

	.notice header {
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: var(--typography-spacing-vertical);
	}
	button {
		clear: both;
		float: left;
		width: auto;
		margin: 0 0.5em 0 0;
	}

	dt {
		font-weight: bold;
	}
	dd {
		margin-top: 0.5em;
		margin-bottom: var(--typography-spacing-vertical);
	}

	ol li {
		margin-bottom: var(--typography-spacing-vertical);
		padding-left: 1em;
	}

	h1,
	h2 {
		text-decoration: underline;
		text-underline-offset: 0.5em;
	}
</style>
