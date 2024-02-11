<script>
	import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
    <title>isaxk.com</title>
</svelte:head>

<main>
	<div class="hero-container">
		<Hero />
	</div>
	<div class="content-container">
		<div class="content">
			<div class="section">
				<h2>About</h2>
				<p>
					I'm Isaac a casual web developer from the UK. My main area of
					knowledge is in Javascript, TypeScript, CSS and Svelte.
				</p>
			</div>

			<div class="section">
				<h2>Projects</h2>
				<p class="projects">
					<a href="https://flags.isaxk.com">QuickFlags</a>
					<a href="https://weirdtext.isaxk.com">WeirdText</a>
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	.hero-container {
		height: 60vh;
		min-height: 400px;
		max-height: 600px;
		display: grid;
		place-items: center;
		background-image: linear-gradient(-45deg, #32324a, #294253, #20204f);
		background-attachment: fixed;
		background-size: 400% 400%;
		animation: AnimatedBg 30s ease infinite;
	}

	@keyframes AnimatedBg {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	.content-container {
		width: 100%;
		display: grid;
		justify-items: center;
		min-height: 40vh;
		padding: 40px 20px;
		box-sizing: border-box;
	}
    @media screen and (max-width: 530px) {
        .hero-container {
            height: 550px;
        }
    }

	.content {
		max-width: 600px;
		width: 100%;
	}
	.section {
		margin: 50px 0px 70px 0px;
	}

	.projects a {
		color: white;
		font-size: 18px;
		text-decoration: none;
		display: inline-block;
		background-color: #293b4c9d;
		padding: 10px 20px;
		border-radius: 5px;
		margin-right: 5px;
	}
</style>
