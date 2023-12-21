<script>
	import Sidebar from "$lib/components/Sidebar.svelte";
	import "$lib/main.scss";
	import SidebarLink from "$lib/components/SidebarLink.svelte";

	import { fly } from "svelte/transition";

	export let data;
</script>

<svelte:head><title>isaxk.com</title></svelte:head>
<main>
	{#key data.url}
		<Sidebar>
			<SidebarLink href="/">Home</SidebarLink>
			<SidebarLink href="/about">About</SidebarLink>
			<SidebarLink href="/projects">Projects</SidebarLink>
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
