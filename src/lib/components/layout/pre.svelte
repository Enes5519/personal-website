<script lang="ts">
	let el: HTMLPreElement;
	let isCopied = false;

	function handleCopy() {
		if (isCopied) {
			return;
		}

		isCopied = true;
		navigator.clipboard.writeText(el?.textContent || '');

		setTimeout(() => {
			isCopied = false;
		}, 3000);
	}
</script>

<div class="c-small pre">
	<pre {...$$restProps} bind:this={el}><slot /></pre>
	<button class="copy" type="button" on:click={handleCopy}>
		{#if isCopied}
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2v2m.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6l-3.5-3.5Z"
				/></svg
			>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2v2Z"
				/></svg
			>
		{/if}
	</button>
</div>

<style>
	.pre {
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding: 0;
		position: relative;
	}

	.pre > pre {
		border: none;
		box-shadow: none;
		margin: 0;
		border-radius: 0.25rem;
	}

	.copy {
		position: absolute;
		right: 8px;
		top: 8px;
		background: var(--color-grey-800);
		border: 1px solid var(--color-grey);
		color: var(--color-grey);
		border-radius: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
		width: 24px;
		height: 24px;

		opacity: 0;
		transition: 250ms opacity;
	}

	.pre:hover .copy {
		opacity: 100;
	}
</style>
