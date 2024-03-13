<script lang="ts">
	import { filter, restaurants } from '../../../../store';
	import CatalogueCard from './CatalogueCard.svelte';
	import type { IRestaurant } from './restaurant.interface';

	let filteredRestaurants: IRestaurant[] = [];

	$: {
		filteredRestaurants = $restaurants.filter(restaurant => {
			if (
				$filter.searchTerm &&
				!restaurant.name
					.toLowerCase()
					.includes($filter.searchTerm.toLowerCase())
			) {
				return false;
			}

      const filterValue = $filter.activeFilter.toLowerCase() as 'fast food' | 'restaurant' | 'sushi' | 'vegan' | 'ice cream';

			if (
				$filter.activeFilter &&
				!restaurant.categories.includes(filterValue)
			) {
				return false;
			}
			return true;
		});
	}
</script>

<div class="catalogue">
  {#if filteredRestaurants.length}
	{#each filteredRestaurants as restaurant (restaurant.slug)}
		<CatalogueCard {restaurant} />
	{/each}
  {:else}
  <p>We couldn't find any locations matching your query</p>
  {/if}
</div>

<style lang="scss">
	.catalogue {
		@apply mt-8 flex flex-col;
	}
</style>
