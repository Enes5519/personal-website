<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { component, meta } = data;
	$: date = new Date(meta.date);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.excerpt} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.excerpt} />
	<meta property="og:type" content="article" />
	{#if meta.image}
		<meta property="og:image" content={`https://enesyildirim.me${meta.image}`} />
	{/if}
	<meta property="og:article:modified_time" content={date.toISOString()} />
	<meta property="og:article:author" content="Enes Yildirim" />
	{#each meta.category ?? [] as tag (tag)}
		<meta property="og:article:tag" content={tag} />
	{/each}
</svelte:head>
<article>
	<div class="c-small">
		<h1>{meta.title}</h1>
		<p class="excerpt">{meta.excerpt}</p>
		<hr />
		{#if meta.image}
			<img src={meta.image} alt={meta.title} class="w-full" />
		{/if}
	</div>

	<svelte:component this={component} />
</article>

<style lang="postcss">
	article {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	.excerpt {
		color: var(--color-grey-400);
		margin-top: 0.25rem;
	}

	hr {
		color: var(--color-grey-800);
		height: 1px;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
