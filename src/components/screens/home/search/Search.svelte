<script lang="ts">
	// @ts-ignore
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	import { filter } from '../../../../store';

	let term = '';

	const onKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			$filter.searchTerm = term;
		}
	};

	const handleInput = () => {
		if (!term) {
			$filter.searchTerm = '';
		}
	};
</script>

<div class="search">
	<div class="icon">
		<IoIosSearch />
	</div>
	<input
		type="search"
		placeholder="Search..."
		bind:value={term}
		on:keypress={onKeyPress}
		on:input={handleInput}
	/>
</div>

<style lang="scss">
	.search {
		@apply overflow-hidden bg-[#f7f7f7] rounded-3xl py-1.5 px-3.5 flex flex-row;

		> .icon {
			@apply w-6 mr-2 text-[#acacac];
		}

		input {
			@apply bg-transparent text-[#111] outline-none;
		}
	}
</style>
