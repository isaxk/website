<script>
	import Sidebar from "$lib/components/Sidebar.svelte";
	import "$lib/main.scss";
	import SidebarLink from "$lib/components/SidebarLink.svelte";

	import { fly, fade } from "svelte/transition";
	import { onMount } from "svelte";

	let ready = false;
	
	onMount(()=>{
		window.setTimeout(()=>{
			ready = true
		}, 100)
		
	})

	export let data;
</script>

<svelte:head><title>isaxk.com</title></svelte:head>

{#if ready}
<main in:fade={{ duration:800, delay: 50 }}>
	{#key data.url}
		<Sidebar>
			<SidebarLink href="/" icon="fa-solid fa-house">Home</SidebarLink>
			<SidebarLink href="/about" icon="fa-solid fa-user">About</SidebarLink>
			<SidebarLink href="/projects" icon="fa-solid fa-screwdriver-wrench">Projects</SidebarLink>
		</Sidebar>
	{/key}
	{#key data.url}
		<div
			class="page-content"
			in:fly={{ x: -100, duration: 300, delay: 300 }}
			out:fly={{ x: 100, duration: 300 }}
		>
			<slot />
		</div>
	{/key}
</main>
{/if}
