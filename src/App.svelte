<script lang="ts">
	import Router from 'svelte-spa-router';
	import { routes } from './routes';
</script>

<body>
  <Router {routes} />
</body>

<style>
  body {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
