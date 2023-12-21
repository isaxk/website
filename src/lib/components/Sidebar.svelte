<div class="sidebar-container">
	<nav class="sidebar">
		<div class="profile">
			<div class="img-container">
				<img src="/profilepicture.jpg" alt="Profile" />
			</div>
			<div class="text">
				<div class="name">isaxk (Isaac)</div>
				<div class="bio">Casual Programmer</div>
			</div>
		</div>
		<div class="links">
			<slot />
		</div>
	</nav>
</div>

<style lang="scss">
	.sidebar-container {
		padding: 100px 50px 30px 0px;
        height: max-content;
	}
    .sidebar {
        padding-bottom: 30px;
    }
	@media screen and (max-width: 680px) {
		.sidebar-container {
			padding: 10px 50px 10px 0px;
			border: #ffffffd1 0px solid;
			border-bottom-width: 2px;
		}
	}
	.profile {
		display: grid;
		grid-template-columns: 75px max-content;
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
</style>
