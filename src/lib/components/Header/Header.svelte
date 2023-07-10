<script lang="ts">
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<header>
	<a href="/" class="logo"><img src="/UI/logos/full.png" alt="" /></a>

	<nav>
		<a href="/game" class:active={pathname === '/game'}>Game</a>
		<a href="https://github.com/seba9989/paraclox">GitHub</a>
		<a href="/help" class:active={pathname === '/help'}>Help</a>
		<a href="/singIn" class:active={pathname === '/singIn'}>SingIn</a>
	</nav>
</header>

<style lang="scss">
	@use '../../style/mixins.scss';

	header {
		height: 100px;
		display: flex;
		justify-content: space-between;

		@include mixins.BorderStyle(bottom);

		.logo {
			aspect-ratio: 620 / 160;

			margin: 10px;
		}

		nav {
			display: flex;
			gap: 10px;
			padding: 10px;

			a {
				padding: 10px;
				margin: auto;
				color: #888;
				transition: 500ms;

				&:hover,
				&.active {
					color: #fff;
				}
			}
		}
	}
</style>
