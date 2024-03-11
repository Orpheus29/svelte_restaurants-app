<script lang="ts">
	import { derived, readable } from 'svelte/store';
	import { filter } from '../../../../store';
	import CatalogueCard from './CatalogueCard.svelte';
	import type { IRestaurant } from './restaurant.interface';

	const restaurants = readable<IRestaurant[]>([
		{
			slug: 'the-james-soho',
			name: 'The James SoHo',
			priceRating: '$$$',
			cuisines: ['Italian', 'Japanese'],
			rating: 4.7,
			distance: 1,
			imagePath: './images/james-soho.avif',
			categories: ['cafe', 'ice cream'],
		},
		{
			slug: 'vegan-cafe',
			name: 'Vegan Cafe',
			priceRating: '$$',
			cuisines: ['Vegan'],
			rating: 4.2,
			distance: 3,
			imagePath: './images/vegan.avif',
			categories: ['cafe', 'stand-up'],
		},
		{
			slug: 'amazon',
			name: 'Amazon',
			priceRating: '$$$$',
			cuisines: ['Italian'],
			rating: 4.8,
			distance: 2,
			imagePath: './images/amazon.avif',
			categories: ['cafe', 'ice cream', 'cinema'],
		},
	]);

	const visibleRestaurants = derived([filter, restaurants], () => {
		if (!$filter.searchTerm && !$filter.activeFilter) return $restaurants;

		let filteredRestaurants: IRestaurant[] = $restaurants;

		if ($filter.searchTerm) {
			filteredRestaurants = filteredRestaurants.filter(({ name }) =>
				name.toLowerCase().includes($filter.searchTerm.toLowerCase()),
			);
		}

		if ($filter.activeFilter) {
      const filterValue = $filter.activeFilter.toLowerCase() as 'cafe' | 'cinema' | 'stand-up' | 'ice cream';

			filteredRestaurants = filteredRestaurants.filter(({ categories }) =>
				categories.includes(filterValue),
			);
		}

    return filteredRestaurants;
	});
</script>

<div class="catalogue">
	{#each $visibleRestaurants as restaurant (restaurant.slug)}
		<CatalogueCard {restaurant} />
	{/each}
</div>

<style lang="scss">
	.catalogue {
		@apply mt-8 flex flex-col;
	}
</style>
