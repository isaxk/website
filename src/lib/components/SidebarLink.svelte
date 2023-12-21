<script>
	export let href = "#";
</script>

<div class="links">
	<div class="sidebarlink">
		<div class="hover-arrow">&gt;</div>
		<a {href}><slot /></a>
	</div>
</div>

<style>
	.sidebarlink {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		transition: 0.3s ease-in-out;
	}
	@media screen and (max-width: 680px) {
		.links {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
	}
	.sidebarlink a {
		color: #ffffffd1;
		text-decoration: none;
		font-size: 20px;
		padding: 10px;
		display: block;
		transition: 0.1s;
	}
	.sidebarlink:hover a {
		color: white;
	}
	.hover-arrow {
		opacity: 0;
		transition: 0.6s ease-in-out;
		transform: translateX(-8px);
	}
	.sidebarlink:hover {
		transform: translateX(10px);
	}
	.sidebarlink:hover .hover-arrow {
		opacity: 1;
		margin-right: 2px;
		transform: translateX(0px);
	}
</style>
