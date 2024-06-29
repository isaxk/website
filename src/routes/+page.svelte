<script>
	import { onMount } from "svelte";
	import Card from "./Card.svelte";
	import { fade } from "svelte/transition";

	let mounted = false;

	onMount(() => (mounted = true));
</script>

<svelte:head>
	<title>isaxk - Casual Programmer</title>
</svelte:head>

{#if mounted}
	<div class="w-full min-h-screen flex items-center justify-center gap-40 ">
		<div class="flex flex-col h-full max-w-screen-sm w-full gap-10 px-5">
			<div class="h-52 flex items-center">
				<div class="flex gap-4 items-end">
					<img src="/pfp.jpeg" alt="PFP" class="rounded-3xl w-32 h-32" />
					<div class="pb-2">
						<div class="text-4xl font-semibold">Isaac</div>
						<div class="flex gap-3 flex-col">
							<div class="text-xl font-light text-gray-600">(isaxk)</div>
							<div class="">Casual Programmer</div>
						</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-52">
				<Card
					i={0}
					title="Flasha"
					description="Simple flashcard app"
					href="https://flasha.isaxk.com"
				/>
				<Card
					i={1}
					title="QuickFlags"
					description="Fast paced flag game"
					href="https://flags.isaxk.com"
				/>
				<Card
					i={2}
					github={true}
					title="Other Projects"
					href="https://github.com/isaxk"
				/>
			</div>
		</div>
	</div>
{/if}
