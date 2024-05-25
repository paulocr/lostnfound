<script lang="ts">
	export let data;
</script>

<div class="container mx-auto">
	{#if data.item}
		<h1 class="h1 text-center">{data.item.description}</h1>

		<div class="flex flex-col lg:flex-row gap-2 mx-auto justify-center p-4">
			{#each data.item.images as image}
				<img src={image.url} alt={image.altText} width={400} />
			{/each}
		</div>
	{/if}
</div>
