<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	export let data;
	let { items } = data;

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleString('es');
	};

	const newItem = () => {
		goto('/nuevo-objeto');
	};
</script>

<div class="flex mx-auto justify-center">
	<button type="button" class="btn variant-filled-secondary text-2xl p-4 m-4" on:click={newItem}
		>Nuevo reporte</button
	>
</div>

{#if items}
<div class="flex flex-col lg:flex-row mx-auto justify-center container">
	<!-- <div class="flex flex-col"> -->
		{#each items as item}
			<div class="flex-shrink-0 justify-center card m-4 sm:mx-auto md:mx-auto lg:mx-4 p-4 w-96 ">
				<p>Descripción: {item.description}</p>
				<p>Encontrado en: {item.location}</p>
				<p>Encontrado el: {formatDate(item.found)}</p>
				
				<img src={`https://ik.imagekit.io/pjfsbg6rk/tr:h-300,q-80/${item.images[0].url}?q=50`} alt={item.images[0].altText} />

				<div class="card p-2 my-2">
					<div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
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
