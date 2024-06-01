<script lang="ts">
    let className: string = "";
    export let title: string = "";
    export { className as class };
</script>

<div class="rounded-md border-2 border-gray-800 {className}">
    <div
        class="bg-neutral-300 bg-opacity-5 text-lg font-bold px-5 py-3 rounded-t-md"
        class:hidden={title.length < 1}
    >
        {title}
    </div>
    <div class="p-5">
        <slot />
    </div>
</div>
