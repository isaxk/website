<script lang="ts">
	import { page } from "$app/stores";

    import { crossfade, slide } from "svelte/transition";

    import { ripple } from "svelte-ripple-action";

	const [send, receive] = crossfade({
		duration: 300,
	});

	const [sendMenu, receiveMenu] = crossfade({
		duration: 300,
	});
	const menuItems = [
        {
            text: "Home",
            href: "/"
        },
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Projects",
			href: "/projects",
		},

	];
</script>

<header>
	<nav>
		{#each menuItems as item}
			<div class="item">
				{#if $page.url.pathname === item.href}
					<a href={item.href} class="active-page">{item.text}</a>
				{:else}
					<a href={item.href}>{item.text}</a>
				{/if}

				{#if $page.url.pathname === item.href}
					<div
						class="underline"
						in:receive={{ key: "menu" }}
						out:send={{ key: "menu" }}
					></div>
<!-- 				{:else}
					<div
						class="no-underline"
						in:receive={{ key: "menu" }}
						out:send={{ key: "menu" }}
					></div> -->
				{/if}
			</div>
		{/each}
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
        max-width: 600px;
        margin: auto;
	}
	nav {
        width: max-content;
        margin: auto;
		padding: 10px 0 0 0;
		box-sizing: border-box;
	}
	nav .item {
		display: inline-block;
		padding: 10px 5px;
        height: 20px;
        border-bottom: 3px solid #ffffff12;
	}
	nav a {
        display: block;
		color: #d3d3d3ea;
		text-decoration: none;
		margin: 0px 5px;
		transition: 0.5s;
        padding-bottom: 5px;
        border-bottom-width: 2px;
        border: transparent 2px solid;
        border-radius: 2px;
	}
    nav a:hover {
        transition: 0.5s;
        color: #fffffff3;
    }
	nav a.active-page {
		color: white;
	}
	.underline {
		background-color: #d3d3d3;
        margin-top: 0px;
		height: 2px;
		border-radius: 5px;
	}
    .no-underline {
        background-color: transparent;
        height: 2px;
    }
</style>
