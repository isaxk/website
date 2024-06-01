<script lang="ts">
    export let skills: { name: string; color: string; icon?: string }[];
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {#each skills as item, i}
        <div
            class="flex gap-1 justify-center items-center border-2 rounded-md p-3 px-2 min-w-20"
            style:background-color="{item.color}08"
            style:border-color={item.color}
        >
            <svg
                fill={item.color}
                class="translate-y-tick"
                width="20px"
                height="20px"
                viewBox="0 0 32 32">{@html item.icon}</svg
            >
            <div style:color={item.color}>{item.name}</div>
        </div>
    {/each}
</div>
