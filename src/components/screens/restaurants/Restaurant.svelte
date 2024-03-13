<script>
	import { link } from 'svelte-spa-router';
	// @ts-ignore
	import TiHome from 'svelte-icons/ti/TiHome.svelte';

	import { restaurants } from '../../../store';
	import CatalogueCard from '../home/catalogue/CatalogueCard.svelte';

	export let params = {
		slug: '',
	};

	const restaurant = $restaurants.find(
		restaurant => restaurant.slug === params.slug,
	);

	if (!restaurant) {
		console.error('Restaurant not found');
	}
</script>

{#if restaurant}
	<div class="header">
		<a class="home" href="/" use:link>
			<TiHome />
		</a>
		<h1 class="header-title">Restaurant Page</h1>
	</div>

	<CatalogueCard {restaurant} />
{:else}
	<p>Restaurant not found</p>
{/if}

<style lang="scss">
	.header {
		@apply flex items-center justify-center relative my-7;

		& .home {
			@apply w-8 text-yellow-300 absolute left-5;
		}

		&-title {
			@apply text-3xl font-semibold;
		}
	}
</style>
