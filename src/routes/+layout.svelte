<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import "$lib/css/app.css";
    import "svelte-ripple-action/ripple.css";
    
	import { scale } from "svelte/transition";

    

	export let data;
</script>

<NavBar />

{#key data.url}
	<main
		in:scale={{ delay: 300, duration: 200, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
	>
		<slot />
	</main>
{/key}


<style>
    main {
        max-width: 700px;
        margin: auto;
        padding: 80px 20px 0px 20px;
        box-sizing: border-box;
    }
</style>