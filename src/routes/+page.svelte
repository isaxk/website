<script>
	import { onMount } from "svelte";

	let ready = false;
	onMount(() => (ready = true));
	import { fly, slide, fade } from "svelte/transition";
	const projects = [
		{ name: "Flags", href: "https://flags.isaxk.com" },
		{ name: "WeirdText", href: "https://weirdtext.isaacboor.me" },
		{
			name: "Since this page loaded...",
			href: "https://isaxk.github.io/sincethispageloaded",
		},
	];
</script>

<div class="main-container">
	{#if ready}
		<div class="hero">
			<div class="left">
                <img
					in:fly={{ delay: 900, duration: 900, y: 30 }}
					src="/profilepicture.jpg"
					alt=""
				/>
			</div>
			<div class="right">
                
				<div in:fly={{ delay: 500, duration: 900, y: 30 }} class="titles">
					<h1>isaxk (Isaac)</h1>
					<div class="social-links">
						<a href="https:/github.com/isaxk" class="logo">
							<i class="fa-brands fa-github" />
						</a>
						<a href="https://twitter.com/isaxk_b" class="logo">
							<i class="fa-brands fa-x-twitter" />
						</a>
					</div>
				</div>
				<div in:fly={{ delay: 900, duration: 900, y: 30 }} class="bio">
					Casual programmer / web developer
				</div>
			</div>
		</div>
		<div in:fly={{ delay: 1200, duration: 900, y: 30 }} class="projects">
			<div class="item label">Projects:</div>
			<br />
			{#each projects as project}
				<div class="item">
					<a href={project.href}>
						{project.name}
					</a>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.main-container {
		width: 100%;
		height: 500px;
	}
	.hero {
		display: grid;
		align-items: center;
		grid-template-columns: 1.2fr 4fr;
		gap: 2rem;
	}
	.hero img {
		width: 100%;
		max-width: 200px;
		border-radius: 100%;
	}
	.left {
		display: grid;
		padding-top: 30px;
	}
	.titles {
		display: grid;
		grid-template-columns: 1fr max-content;
		align-items: center;
	}
	.logo {
		font-size: 35px;
		margin-right: 10px;
		color: white;
	}
	.projects {
		font-size: 20px;
		padding: 15px 0px;
		box-sizing: border-box;
		width: 100%;
	}
	.projects .item {
		display: inline-block;
		padding: 20px 20px 0px 0px;
		text-overflow: ellipsis;
	}
	.projects .item.label {
		font-weight: 600;
	}
	.projects a {
		color: rgb(188, 188, 255);
		text-decoration: none;
	}
	.projects a:hover {
		text-decoration: underline;
	}
    .social-links a {
        font-size: 20px;
    }
    @media screen and (max-width: 470px) {
        .titles h1 {
            font-size: 1.4em;
        }
        .right .bio {
            font-size: 0.8em;
        }
        .projects {
            font-size: 15px;
        }
    }
</style>
