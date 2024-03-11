import Home from './components/screens/home/Home.svelte';
import Restaurant from './components/screens/restaurant/Restaurant.svelte';
import NotFound from './components/screens/notFound/NotFound.svelte';

export const routes = {
	'/': Home,

	'/restaurant/:name': Restaurant,

	// Catch-all
	// This is optional, but if present it must be the last
	'*': NotFound,
};
