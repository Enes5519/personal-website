<script lang="ts">
	export let href: string | null = null;
	export let variant: 'primary' | 'text' = 'primary';

	$: isAnchor = href !== null;
</script>

<svelte:element
	this={isAnchor ? 'a' : 'button'}
	type={isAnchor ? undefined : "button"}
	{...$$restProps}
	class="button"
	class:btnText={variant === 'text'}
	class:btnPrimary={variant === 'primary'}
>
	<slot />
</svelte:element>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 4px;
		height: 40px;
		transition: background;
	}

	.btnPrimary {
		background: var(--color-grey-400);
		color: var(--color-white);
	}

	.btnPrimary:hover {
		background: var(--color-grey);
	}

	.btnText {
		background: transparent;
		color: var(--color-grey-400);
	}

	.btnText:hover {
		color: var(--color-grey);
	}
</style>
