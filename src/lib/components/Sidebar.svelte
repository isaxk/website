<nav class="sidebar">
	<div class="profile">
		<div class="img-container">
			<img src="/profilepicture.jpg" alt="Profile" />
		</div>
		<div class="text">
			<div class="name">Isaac <span class="username">(isaxk)</span></div>
			<div class="bio">Casual Programmer</div>
		</div>
		<div class="social">
			<div class="github">
				<a href="https://github.com/isaxk"
					><i class="fa-brands fa-github"></i></a
				>
			</div>
		</div>
	</div>
	<div class="links">
		<slot />
	</div>
</nav>

<style lang="scss">
	.sidebar {
		padding-bottom: 30px;
	}

	.social {
		font-size: 30px;
	}
	.profile {
		display: grid;
		grid-template-columns: 75px 1fr min-content;
		align-items: center;
		height: 100px;
		gap: 1.5rem;
	}
	.profile .text {
		display: grid;
		align-content: center;
		height: 100%;
	}
	.profile .text .name {
		font-size: 25px;
		font-weight: 600;
	}
	.img-container {
		height: 100%;
		display: grid;
		align-items: center;
	}
	.img-container img {
		width: 100%;
		border-radius: 50%;
	}
	.links {
		margin: 25px 0px 0px 0px;
		padding: 0px 20px;
	}
	.username {
		font-weight: 300;
		color: #ffffffd1;
	}
	.name {
		font-weight: 800;
	}
</style>
