<script lang="ts">
	import { filter as filterStore } from '../../../../store';
	import type { IFilter } from './filter.interface';

	export let filter: IFilter;

	$: isActive = $filterStore.activeFilter === filter.name;
</script>

<button
	class:active={isActive}
	class="filter"
	on:click={() => {
		$filterStore.activeFilter = isActive ? '' : filter.name;
	}}
>
	<span class="icon-wrapper" style="background-color: {filter.color}">
		<img class="icon" src={filter.path} alt="resto icon" width="30" />
	</span>
	<span class="name">
		{filter.name}
	</span>
</button>

<style lang="scss">
	.filter {
		@apply text-center bg-white shadow rounded-2xl p-2;
		width: 4.7rem;

		&.active {
			@apply bg-slate-300;
		}

		.icon-wrapper {
			@apply rounded-full flex items-center justify-center p-3;
		}

		.icon {
		}

		.name {
			@apply mt-1 block;
			font-size: 14px;
		}
	}
</style>
