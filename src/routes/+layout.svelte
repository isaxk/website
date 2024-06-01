<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import { scale } from "svelte/transition";

    export let data: { url: string };
</script>

<svelte:head></svelte:head>

<NavBar />
{#key data.url}
    <main
        class="h-full flex-grow px-5 pt-10"
        in:scale={{ delay: 300, duration: 300, start: 0.988, opacity: 0 }}
        out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
    >
        <slot />
    </main>
{/key}

<style lang="postcss">
    :global(body) {
        @apply max-w-screen-md m-auto flex flex-col min-h-screen w-full text-gray-300 bg-slate-950
        bg-fixed bg-gradient-to-br from-slate-950 to-gray-950;
        background-image: linear-gradient(-45deg, #131320, #09121a);
    }
</style>
