<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>isaxk - Casual Web Developer</title>
</svelte:head>

<div class="hero-container">
	<Hero />
</div>

<style>
	.hero-container {
		min-height: 30vh;
		display: grid;
		place-items: center;
		
	}

	
	/* @media screen and (max-width: 530px) {
		.hero-container {
			height: 550px;
		}
	} */
</style>
