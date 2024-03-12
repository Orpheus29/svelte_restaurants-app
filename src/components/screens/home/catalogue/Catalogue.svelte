<script lang="ts">
	import { filter, restaurants } from '../../../../store';
	import CatalogueCard from './CatalogueCard.svelte';
	import type { IRestaurant } from './restaurant.interface';

	let visibleRestaurants: IRestaurant[] = [];

	$: {
		const filteredRestaurants = $restaurants.filter(restaurant => {
			if (
				$filter.searchTerm &&
				!restaurant.name
					.toLowerCase()
					.includes($filter.searchTerm.toLowerCase())
			) {
				return false;
			}

      const filterValue = $filter.activeFilter.toLowerCase() as 'cafe' | 'cinema' | 'stand-up' | 'ice cream';

			if (
				$filter.activeFilter &&
				!restaurant.categories.includes(filterValue)
			) {
				return false;
			}
			return true;
		});

		visibleRestaurants = filteredRestaurants;
	}
</script>

<div class="catalogue">
	{#each visibleRestaurants as restaurant (restaurant.slug)}
		<CatalogueCard {restaurant} />
	{/each}
</div>

<style lang="scss">
	.catalogue {
		@apply mt-8 flex flex-col;
	}
</style>
