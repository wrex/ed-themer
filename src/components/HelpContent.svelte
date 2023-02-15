<script>
	import CollapseLeftIcon from '../icons/CollapseLeftIcon.svelte';
	import ReloadIcon from '../icons/ReloadIcon.svelte';
	import ExportIcon from '../icons/ExportIcon.svelte';
</script>

<h1>WK Elementary Dark Themer</h1>

<blockquote>
	Click the close icon at the top or the "OK" button at the end to close this dialog.
	<mark> You may have to scroll to see these! </mark>
</blockquote>

<p>
	This app lets you create a set of "CSS custom properties" to override the default color scheme of
	the Elementary Dark stylesheet for <a href="https://www.wanikani.com">WaniKani.com</a>.
</p>
<h2>Top navigation</h2>
<p>The dropdown widget changes which mockup to display (surfaces, dashboard, or reviews).</p>
<p>
	<span class="iconButton" role="button">
		<CollapseLeftIcon />
	</span> shrinks the left panel to give you more screen real estate.
</p>
<p>
	<span class="iconButton" role="button">
		<ReloadIcon />
	</span> resets all of the user styles on the left to the defaults.
</p>
<p>
	<span class="iconButton" role="button">
		<ExportIcon />
	</span> displays all of the current user style settings, and allows you to copy them to your clipboard.
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
	There are two ways to define the color for a given user property: using a color picker/mixer, or
	by selecting any of the other user properties in a dropdown.
</p>
<p>
	Click on the color swatch to adjust the desired color for that property. The sample in the center
	of your screen will adapt to the new settings as you make changes. You may need to change the
	sample type (using the dropdown at the top) in order to see what a given property affects.
</p>

<p>
	Alternately, you can click the dropdown to reference any other user property. This will
	automatically change the color displayed immediately above the dropdown. Once another property is
	selected, this color will change as that other property is adjusted.
</p>

<p>
	Note that using the color picker on top for any property will automatically revert the dropdown to
	"Custom", and using the dropdown will automatically set the color picker to the current value of
	the other property.
</p>

<h3>Eyedropper feature</h3>
<p>
	The color picker is controlled by your browser, but most (all?) modern browsers include an
	"eyedropper" feature to pick up any other color on your screen. This is particularly handy if
	you'd like to use a consistent palette of colors rather than manually mixing every custom color.
	You can pick colors from the palette you create below, or from a photograph or anything else
	currently displayed on your screen.
</p>

<h3>Color palette</h3>

<p>
	The bottom section of the screen allows you to generate a consistent palette of related colors.
	The controls on the left allow you to export the current palette, and to add more swatch rows.
</p>

<p>
	The bottom right contains rows of swatches to develop your color scheme. Initially, this section
	displays one row of gray swatches (centered on "#333333"), and one row of a random hue are
	displayed. Each row contains 15 swatches: seven tints, the user selected color in the middle, and
	seven shades. Swatches are ordered from lightest to darkest.
</p>

<p>
	Each tint/shade mixes an increasing amount of white or black to the central color, from 13% in the
	first step, to 91% in the last step.
</p>

<p>
	The center of each row is a standard color picker: adjusting the color of the center swatch will
	change the tints and shades shown to the right and left of the color picker as well.
</p>

<p>
	<span role="button" class="iconButton">-</span> removes any given row of swatches. (The top row cannot
	be removed).
</p>

<p>
	There is also a text input box that allows you to enter a meaningful name to any row of swatches
	prior to export.
</p>

<h3>Palette controls</h3>

<p>
	<span role="button" class="iconButton">Palette</span> exports the palette of all palette swatches to
	your clipboard if you'd like to use them elsewhere. Note that using the eyedropper tool to select one
	of these swatches unfortunately just sets the hex color value for that user property, and doesn't reference
	this palette property in the generated CSS.
</p>

<p>
	<span role="button" class="iconButton">+</span> adds rows of swatches (up to a maximum of 20 rows).
</p>

<p>The dropdown controls how many rows are created and the initial colors for those rows:</p>

<ul>
	<li>"Custom (+1)" creates a single row with a random initial color.</li>
	<li>
		"Complementary (+1)" also creates a single row, but chooses a hue that is the complement (180°
		opposite on the color wheel) of the center color of the current bottom row.
	</li>
	<li>
		"Analagous (+2)" generates two more rows, each hue 30° away (but adjacent to) the bottom color's
		hue.
	</li>
	<li>
		"Triadic (+2)" also generates two more rows, but these are each 120° away. This tends to
		generate a very balanced color scheme.
	</li>
	<li>"Tetradic (+3)" generated three more rows, each 90° away.</li>
</ul>

<p>
	Note that as currently implemented, this palette tool only creates tints and shades, it doesn't
	create any "tones" (mixing middle gray rather than pure black or pure white).
</p>
