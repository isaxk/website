<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let name: string;
    export let description: string;
    export let href: string;
    export let screenshot: string;
</script>

<a
    class="grid grid-cols-featuredProject items-center p-2 rounded-md gap-2 transition-colors hover:bg-gray-600 hover:bg-opacity-25"
    {href}
>
    <div class="rounded-md">
        <img
            src={screenshot}
            class="object-cover object-top w-full h-16 rounded-md"
            alt="Screenshot"
        />
    </div>
    <div class="">
        <div class="text-lg font-medium">{name}</div>
        <div class="text-sm font-light text-gray-400">{description}</div>
    </div>
    <div class="w-5 flex content-center justify-center">
        <AngleRightOutline />
    </div>
</a>
<div class="border-b-2 border-gray-900 last:border-none"></div>
