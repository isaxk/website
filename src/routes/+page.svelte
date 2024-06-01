<script lang="ts">
    import HomeHeader from "$lib/components/HomeHeader.svelte";
    import {
        AngleRightOutline,
        DiscordSolid,
        GithubSolid,
    } from "flowbite-svelte-icons";
    import Panel from "$lib/components/Panel.svelte";
    import { socials, userInfo } from "$lib/data/profile";
    import { projects } from "$lib/data/projects";
    import FeaturedProject from "$lib/components/FeaturedProject.svelte";
    import MoreLink from "$lib/components/MoreLink.svelte";
    import { onDestroy, onMount } from "svelte";
    import { fade } from "svelte/transition";

    let mounted: boolean = false;

    onMount(() => (mounted = true));
    onDestroy(() => (mounted = false));
</script>

<div class="flex flex-col w-full pt-0 gap-5">
    {#if mounted}
        <HomeHeader {...userInfo} {socials} />

        <div
            class="flex flex-col gap-3 sm:flex-row mb-10"
            in:fade={{ delay: 300, duration: 500 }}
        >
            <Panel title="About me">
                <div class="">
                    I'm Isaac, a casual developer who makes some simple projects
                    from time-to-time
                </div>
                <MoreLink href="/about">More about me</MoreLink>
            </Panel>

            <Panel title="Featured Projects" class="sm:min-w-96">
                <div class="grid grid-cols-1 gap-2">
                    {#each projects as project, i}
                        {#if project.featured}
                            <FeaturedProject {...project} />
                        {/if}
                    {/each}
                </div>
                <MoreLink href="/projects">All Projects</MoreLink>
            </Panel>
        </div>
    {/if}
</div>
