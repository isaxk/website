<script lang="ts">
	import { ArrowRight, GitBranch, Github } from "lucide-svelte";
	import { fly } from "svelte/transition";

	export let title: string;
	export let description: string = "";
	export let href: string;
	export let i: number;
	export let github: boolean = false;
</script>

<a
	{href}
	in:fly={{ y: -30, duration: 300, delay: 130 * (i + 1) }}
	class="bg-white rounded-xl p-4 h-40 drop-shadow flex flex-col hover:-translate-y-0.5 transition-all"
>
	<div class="flex-grow flex-col flex">
		<div class="text-xl font-medium">{title}</div>
		<div class="">{description}</div>
	</div>
	{#if github}
		<a {href} class="flex justify-end text-blue-600"><Github /></a>
	{:else}
		<a {href} class="flex justify-end text-blue-600"><ArrowRight /></a>
	{/if}
</a>
