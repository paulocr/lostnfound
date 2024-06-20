<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
	let { item } = data;

</script>

<div class="container mx-auto">
	{#if item}
	<div class="text-center text-2xl text-slate-900">
		<h1 class="h1">{item.description}</h1>
		<p>{item.itemType === 'looking' ? `Creo que lo perdí en: ${item.location}` : `Lo encontré en: ${item.location}`}</p>
		<p>{formatDate(item.foundOrLost_at)}</p>

		<div class="card mx-auto shadow-sm">
			<h3 class="h3 font-bold">Reportado por</h3>
			<p>{item.reporter.name}</p>
			<p>Clase: {item.reporter.class}</p>
		</div>

		<div class="flex flex-col lg:flex-row gap-2 mx-auto justify-center p-4">
			{#each item.images as image}
				<img src={image.url} alt={image.altText} width={400} />
			{/each}
		</div>
	</div>
	{/if}
</div>
