<script lang="ts">
    export let table: {
        left: string;
        right: string;
    }[];
</script>

<div class="max-w-96">
    {#each table as row}
        <div
            class="flex gap-2 w-full border-b-2 border-gray-900 last:border-b-0"
        >
            <div class="py-2 w-1/2 font-medium border-r-2 border-gray-900">
                {row.left}
            </div>
            <div class="py-2 w-1/2">{row.right}</div>
        </div>
    {/each}
</div>
