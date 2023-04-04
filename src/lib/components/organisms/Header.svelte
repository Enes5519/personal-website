<script>
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<header class="header">
	<Button href="/" variant="text">Anasayfa</Button>
	<Button href="/blog" variant="text">Bloglarım</Button>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 1.25rem;
	}
</style>
