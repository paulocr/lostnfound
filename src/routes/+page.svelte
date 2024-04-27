<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	let { items } = data;

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleString('es');
	};

	const newItem = () => {
		goto('/nuevo-objeto');
	};

	const images: Record<string, { default: string }> = import.meta.glob('$lib/images/**/**', {
		eager: true
	});
</script>

<div class="flex mx-auto justify-center">
	<button type="button" class="btn variant-filled-secondary text-2xl p-4 m-4" on:click={newItem}
		>Nuevo reporte</button
	>
</div>

{#if items}
	<div class="flex mx-auto justify-center container">
		{#each items as item}
			<div class="card m-4 p-4 w-96">
				<p>Descripción: {item.description}</p>
				<p>Encontrado en: {item.location}</p>
				<p>Encontrado el: {formatDate(item.found)}</p>

				<img
					class="my-2"
					src={images[`/src/lib/images/${item.id}/${item.images[0].url}`].default}
					alt={item.description}
					width={150}
					height={150}
				/>

				<!-- {#await import(images[`/src/lib/images/${item.id}/${item.images[0].url}`].default)}
					Cargando....
				{:then { default: src }}
					<img class="my-2" {src} alt={item.description} width={150} height={150} />
				{/await} -->

				<div class="card p-2 my-2">
					<div class="grid grid-cols-4 gap-4">
						{#each item.tags.split(',') as tag}
							<span class="chip variant-filled-secondary">{tag}</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
{:else}
	Cargando.....
{/if}
