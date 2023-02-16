<script lang="ts">
	import '@picocss/pico';
	import '../app.css';
	import { expandControls } from '$lib/stores';
</script>

<div class="app-container" class:collapsed={!$expandControls}>
	<slot />
</div>
