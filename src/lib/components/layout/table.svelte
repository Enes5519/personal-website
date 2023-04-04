<div class="c-small">
	<table class="table" cellPadding="0" cellSpacing="0" {...$$restProps}>
		<slot />
	</table>
</div>

<style>
	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
		border-collapse: separate;
		border-spacing: 0;
		min-width: 350px;
		text-indent: 0;
		border-color: inherit;
	}

	.table :global(th),
	.table :global(td) {
		border-color: var(--color-grey-700);
	}
</style>
