<script lang="ts">
	import 'prismjs/themes/prism-twilight.css';
	import 'nprogress/nprogress.css';
	import Header from '$lib/components/organisms/Header.svelte';
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';

	NProgress.configure({ showSpinner: false });

	$: {
		if ($navigating) {
			console.log('KORRR');
			NProgress.start();
		} else {
			NProgress.done();
		}
	}
</script>

<Header />
<main>
	<slot />
</main>

<style>
	:global(#nprogress .bar) {
		background: var(--color-amber);
	}
</style>
