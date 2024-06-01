<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let href: string;
</script>

<div class="">
    <a
        {href}
        class="font-medium pt-5 flex gap-1 items-center hover:underline transition-all"
    >
        <div class=""><slot /></div>
        <AngleRightOutline size="sm" />
    </a>
</div>
