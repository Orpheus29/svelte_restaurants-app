<script lang="ts">
	import FilterItem from './FilterItem.svelte';
	import type { IFilter } from './filter.interface';

	const filters: IFilter[] = [
		{
			name: 'Cafe',
			path: './images/hamburger-icon.svg',
      color: '#eaf2ff',
		},
		{
      name: 'Cinema',
			path: './images/popcorn-icon.svg',
      color: '#e4f6ea',
		},
		{
      name: 'Stand-up',
			path: './images/old-microphone-icon.svg',
      color: '#feefea',
		},
		{
      name: 'Ice cream',
			path: './images/ice-cream-cone-icon.svg',
      color: '#fdf8e2',
		},
	];
</script>

<div class="filters">
	{#each filters as filter}
		<FilterItem {filter} />
	{/each}
</div>

<style lang="scss">
	.filters {
		@apply mt-5 flex items-center justify-between;
	}
</style>
