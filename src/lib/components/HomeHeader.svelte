<script lang="ts">
    import {
        onMount,
        type SvelteComponent,
        type SvelteComponentTyped,
    } from "svelte";
    import { fade, fly } from "svelte/transition";
    import TypeIn from "./TypeIn.svelte";

    export let name: string;
    export let bio: string;
    export let picture: string;

    export let socials: {
        name: string;
        href: string;
        icon: typeof SvelteComponent<any>;
    }[];
</script>

<div
    in:fly={{ y: -18, duration: 500 }}
    class="flex flex-col-reverse gap-5 mt-16 mb-14 sm:mt-28 sm:mb-24 sm:flex-row w-full sm:h-40 px-5 self-center items-center border-b-0 border-b-gray-800"
>
    <div class="flex flex-col flex-grow gap-3 text-center sm:text-left">
        <div class="text-4xl font-light text-gray-300">
            Hi, I'm <span class="font-semibold text-gray-200">{name}</span>
        </div>
        <div class="flex gap-3 items-center">
            <div class="text-md text-gray-400">{bio}</div>
            <div class="bg-gray-400 rounded-full w-1 h-1"></div>
            <div class="flex gap-2 text-gray-400">
                {#each socials as item, i}
                    <a href={item.href}
                        ><svelte:component
                            this={item.icon}
                            size="lg"
                            class="hover:text-gray-300 transition-colors"
                        /></a
                    >
                {/each}
            </div>
        </div>
    </div>
    <div class="h-full">
        <img src={picture} class="h-28 sm:h-full rounded-full" alt="Profile" />
    </div>
</div>
