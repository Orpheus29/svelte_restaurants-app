<script lang="ts">
	import FilterItem from './FilterItem.svelte';
	import type { IFilter } from './filter.interface';

	const filters: IFilter[] = [
		{
			name: 'Fast food',
			path: './images/icons/hamburger.svg',
      color: '#eaf2ff',
		},
		{
      name: 'Restaurant',
			path: './images/icons/restaurant.svg',
      color: '#e2fcea',
		},
		{
      name: 'Sushi',
			path: './images/icons/noodles.svg',
      color: '#feefea',
		},
		{
      name: 'Vegan',
			path: './images/icons/vegan.svg',
      color: '#e4f6ea',
		},
		{
      name: 'Ice cream',
			path: './images/icons/ice-cream-cone.svg',
      color: '#fdf8e2',
		},
	];
</script>

<div class="filters">
	{#each filters as filter (filter.name)}
		<FilterItem {filter} />
	{/each}
</div>

<style lang="scss">
	.filters {
		@apply mt-5 flex items-center justify-between;
	}
</style>
