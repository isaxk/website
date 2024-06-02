<script lang="ts">
    import GalleryProject from "./Project.svelte";
    import { projects } from "$lib/data/projects";
</script>

<svelte:head>
    <title>isaxk - Projects</title>
</svelte:head>

<div class="py-10 grid sm:grid-cols-2 gap-2">
    {#each projects as item, i}
        <GalleryProject {...item} />
    {/each}
</div>
