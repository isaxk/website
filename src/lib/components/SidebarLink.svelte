<script>
	export let href = "#";
	export let icon = "fa-solid fa-link";
</script>

<div class="links">
	<div class="sidebarlink">
		<div class="hover-arrow">&gt;</div>
		<i class={icon}></i>
		<a {href}><slot /></a>
	</div>
</div>

<style>
	.sidebarlink {
		display: grid;
		grid-template-columns: max-content 0.1fr 1fr;
		align-items: center;
		transition: 0.1s ease-in-out;
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
	i {
		margin-left: 10px;
	}
	.sidebarlink:hover a {
		color: white;
	}
	.hover-arrow {
		opacity: 0;
		transition: 0.4s ease-in-out;
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
	i {
		text-align: center;
		align-content: center;
	}
</style>
