import { wrap } from 'svelte-spa-router/wrap';

import Home from './components/screens/home/Home.svelte';
import NotFound from './components/screens/notFound/NotFound.svelte';

export const routes = {
	'/': Home,

	'/restaurant/:slug': wrap({
    asyncComponent: () => import('./components/screens/restaurants/Restaurant.svelte')
  }),

	'*': NotFound,
};
