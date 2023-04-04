<script lang="ts">
	import BlogItem from '$lib/components/molecules/BlogItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Enes Yıldırım | Kişisel Blog</title>
</svelte:head>
<div class="c-small wrapper">
	<h1>Hoşgeldiniz, ben Enes</h1>
	<p>Front-end teknolojileri, linux, psikoloji gibi konularla yakından ilgileniyorum.</p>

	<h2>Son Bloglarım</h2>
	{#each data.lastThreeBlogs as blog (blog.slug)}
		<BlogItem {blog} />
	{/each}
</div>

<style>
	h1 + p {
		margin-top: 1.5rem;
	}

	h1 {
		margin-top: 4rem;
	}

	h2 {
		margin-top: 8rem;
	}
</style>
