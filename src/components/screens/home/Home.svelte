<script lang="ts">
	import { link } from 'svelte-spa-router';
	import Search from './search/Search.svelte';
	import Filters from './filters/Filters.svelte';
	import Catalogue from './catalogue/Catalogue.svelte';
</script>

<div>
	<Search />
	<Filters />
	<Catalogue />
</div>
