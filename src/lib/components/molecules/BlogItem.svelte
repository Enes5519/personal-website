<script lang="ts">
	import type { BlogPost } from '../../../routes/blog/[slug]/+page';

	export let blog: BlogPost['metadata'];

	$: blogLink = `blog/${blog.slug}`;
	$: dateText = new Date(blog.date).toLocaleDateString();
</script>

<li class="blogContainer">
	<a href={blogLink} class="imageContainer">
		<img src={blog.image} alt={blog.title} class="image" />
	</a>

	<div class="descriptionContainer">
		<a href={blogLink}>
			<h3>{blog.title}</h3>
		</a>
		<time>{dateText}</time>
		<p class="excerpt">{blog.excerpt}</p>
	</div>
</li>

<style>
	.blogContainer {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
	}

	.imageContainer {
		flex-shrink: 0;
	}

	.image {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		border: 1px solid var(--color-grey-800);
	}

	.descriptionContainer > * + * {
		margin-top: 0.5rem;
	}

	time {
		color: var(--color-grey);
		font: var(--font-sm);
	}

	.excerpt {
		font: var(--font-sm);
		color: var(--color-grey-300);
	}

	@media (min-width: 1024px) {
		.blogContainer {
			gap: 32px;
			flex-direction: row;
			align-items: flex-start;
		}

		.image {
			width: 232px;
		}

		.excerpt {
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
</style>
