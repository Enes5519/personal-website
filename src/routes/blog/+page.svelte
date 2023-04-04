<script lang="ts">
	import BlogItem from '$lib/components/molecules/BlogItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Enes Yıldırım | Kişisel Blog</title>
</svelte:head>
<div class="c-small wrapper">
	<h1>Bloglarım</h1>
	{#each data.blogs as blog (blog.slug)}
		<BlogItem {blog} />
	{/each}
</div>

<style>
	h1 {
		margin-top: 4rem;
	}
</style>
