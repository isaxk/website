<script lang="ts">
    import GalleryProject from "$lib/components/GalleryProject.svelte";
    import { projects } from "$lib/data/projects";
</script>

<div class="py-10 grid sm:grid-cols-2 gap-2">
    {#each projects as item, i}
        <GalleryProject {...item} />
    {/each}
</div>
