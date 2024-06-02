<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let name: string;
    export let description: string;
    export let href: string;
    export let screenshot: string;
</script>

<a
    {href}
    class="flex flex-col gap-2 p-1 rounded-md transition-colors bg-gray-700 bg-opacity-20 hover:bg-gray-700 hover:bg-opacity-25"
>
    <img
        src={screenshot}
        alt="Screenshot"
        class="w-full h-40 object-cover object-top rounded-md"
    />
    <div class="p-4 pt-2 flex gap-1 items-center">
        <div class="flex-grow">
            <div class="text-xl font-medium">{name}</div>
            <div class="text-sm text-gray-400">{description}</div>
        </div>
        <div class="">
            <AngleRightOutline />
        </div>
    </div>
</a>
