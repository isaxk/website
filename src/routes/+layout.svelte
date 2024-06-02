<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import { scale } from "svelte/transition";

    export let data: { url: string };
</script>

<NavBar />
{#key data.url}
    <main
        class="flex flex-col min-h-screen px-5 pt-10"
        in:scale={{ delay: 300, duration: 300, start: 0.988, opacity: 0 }}
        out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
    >
        <div class="mb-auto">
            <slot />
        </div>
        <footer class="flex justify-center gap-3 p-10 text-gray-400">
            <div class="sm:flex-grow">
                <span class="hidden sm:inline">Copyright</span> &copy isaxk.com
            </div>
            <a
                href="https://github.com/isaxk/website"
                class="underline hover:text-gray-300">View Source Code</a
            >
        </footer>
    </main>
{/key}

<style lang="postcss">
    :global(body) {
        @apply max-w-screen-md m-auto min-h-screen w-full text-gray-300;
    }
</style>
