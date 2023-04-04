<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3';
	let anchor = '';
	let el: HTMLSpanElement;

	$: {
		if (el?.innerText) {
			anchor = el.innerText
				.toLowerCase()
				.replace(/[^a-z0-9 ]/g, '')
				.replace(/[ ]/g, '-');
		}
	}
</script>

<svelte:element this={tag} id={anchor} class="c-small heading">
	<a href={`#${anchor}`} class="anchor">#</a>
	<span bind:this={el}><slot /></span>
</svelte:element>

<style>
	.heading {
		position: relative;
		margin-top: 2rem;
		margin-bottom: 2rem;
		scroll-margin-top: 4rem;
	}

	.anchor {
		opacity: 0;
		position: absolute;
		color: var(--color-grey);
		transform: translate(-1em, -2px);
		width: 1em;
	}

	.heading:hover .anchor {
		opacity: 100;
	}
</style>
