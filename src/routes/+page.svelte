<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import About from "./about/+page.svelte"
	import Projects from "./projects/+page.svelte"
	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>isaxk - Casual Web/Game Dev</title>
</svelte:head>

<div class="hero-container">
	<Hero />
</div>


<style>
	.hero-container {
		min-height: 60vh;
		display: grid;
		place-items: center;
		
	}

	
	/* @media screen and (max-width: 530px) {
		.hero-container {
			height: 550px;
		}
	} */
</style>
