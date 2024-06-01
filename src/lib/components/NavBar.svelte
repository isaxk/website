<script lang="ts">
    import { page } from "$app/stores";
    import { crossfade } from "svelte/transition";

    const [send, receive] = crossfade({
        duration: 300,
    });

    let navItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Projects",
            href: "/projects",
        },
    ];
</script>

<div class="flex justify-center w-full fixed top-0 left-0 backdrop-blur-xl">
    <div class="flex gap-2 p-5 text-gray-400">
        {#each navItems as item}
            <div>
                <a
                    href={item.href}
                    class="transition-[color] py-2 px-2 duration-300 hover:text-gray-300"
                    class:text-white={$page.url.pathname == item.href}
                    >{item.name}</a
                >
                {#if $page.url.pathname == item.href}
                    <div
                        in:receive={{ key: "menu" }}
                        out:send={{ key: "menu" }}
                        class="border-b-2 border-gray-300 h-2"
                    ></div>
                {/if}
            </div>
        {/each}
    </div>
</div>
