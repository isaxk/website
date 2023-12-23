<script>
	import Sidebar from "$lib/components/Sidebar.svelte";
	import "$lib/main.scss";
	import SidebarLink from "$lib/components/SidebarLink.svelte";

	import { fly, fade } from "svelte/transition";

	export let data;
</script>

<svelte:head><title>isaxk.com</title></svelte:head>

	<main>
		<div class="sidebar-container">
			<Sidebar>
				<SidebarLink href="/" icon="fa-solid fa-house">Home</SidebarLink>
				<SidebarLink href="/about" icon="fa-solid fa-user">About</SidebarLink>
				<SidebarLink href="/projects" icon="fa-solid fa-screwdriver-wrench"
					>Projects</SidebarLink
				>
			</Sidebar>
		</div>
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

<style>
	.sidebar-container {
		padding: 100px 10px 30px 0px;
		height: 100vh;
	}
	@media screen and (max-width: 850px) {
		.sidebar-container {
			padding: 10px 10px 10px 0px;
			border: #ffffffd1 0px solid;
			border-bottom-width: 2px;
		}
	}
</style>
