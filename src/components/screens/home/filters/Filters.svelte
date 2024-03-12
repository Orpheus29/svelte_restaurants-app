<script lang="ts">
	import FilterItem from './FilterItem.svelte';
	import type { IFilter } from './filter.interface';

	const filters: IFilter[] = [
		{
			name: 'Cafe',
			path: './images/icons/hamburger-icon.svg',
      color: '#eaf2ff',
		},
		{
      name: 'Cinema',
			path: './images/icons/popcorn-icon.svg',
      color: '#e4f6ea',
		},
		{
      name: 'Stand-up',
			path: './images/icons/old-microphone-icon.svg',
      color: '#feefea',
		},
		{
      name: 'Ice cream',
			path: './images/icons/ice-cream-cone-icon.svg',
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
