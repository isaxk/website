<script lang="ts">
    const projects = [
        {
            name: "FocusTune",
            description: "The desktop client for streaming focus music radios with no distractions",
            link: "https://focustune.isaxk.com",
            background: "/focustune.png",
        },
        {
            name: "QuickFlags",
            description: "The fast paced flag naming game",
            link: "https://flags.isaxk.com",
            background: "/QuickFlags.jpeg",
        },
        {
            name: "WeirdText",
            description: "Changes your text in wierd and interesting ways",
            link: "https://weirdtext.isaxk.com",
            background: "/WeirdText.jpeg",
        },
        {
            name: "Since this page loaded",
            description: "Counts what has happenned around the world.",
            link: "https://sincethispageloaded.isaxk.com",
            background: "/sincethispageloaded.png",
        },
    ];
</script>

<svelte:head>
    <title>isaxk - Projects</title>
</svelte:head>

<h1>Projects</h1>

<div class="projects-grid">
    {#each projects as project}
        <div
            class="project"
            style="background-image: url('{project.background}');"
        >
            <a class="info-container" href={project.link}>
                <div class="info-content">
                    <div class="name">{project.name}</div>
                    <div class="description">{project.description}</div>
                    <div class="link">
                        <a href={project.link}>Take a look</a>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</div>

<style>
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
    .project {
        background-color: #121212;
        border-radius: 5px;
        position: relative;
        background-size: 100%;
        background-position: center top;
        height: 200px;
        transition: 0.5s;
    }
    .project:hover {
        background-size: 105%;
    }
    .info-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-image: linear-gradient(
            to bottom,
            transparent,
            #121212b9,
            #090909
        );
        border-radius: 5px;
        display: grid;
        align-items: end;
        color: white;
        text-decoration: none;
    }
    .name {
        font-size: 18px;
        font-weight: 500;
    }
    .description {
        font-size: 14px;
    }
    .link {
        margin-top: 5px;
    }
    .link a {
        color: white;
    }
</style>
