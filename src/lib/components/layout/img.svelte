<script lang="ts">
	export let alt: string;
</script>

<img class="image" {alt} {...$$restProps} />

<style>
	.image {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
