<script lang="ts">
    import "../app.css";
</script>


<div class="min-h-screen p-2 max-w-screen-lg m-auto">
<slot />
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-zinc-50;
    }
</style>