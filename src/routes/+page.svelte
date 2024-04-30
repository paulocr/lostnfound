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
</script>

<div class="flex mx-auto justify-center container">
	<button type="button" class="btn variant-filled-secondary text-2xl p-4 m-4" on:click={newItem}
		>Nuevo reporte</button
	>
</div>

{#if items}
	<div class="flex flex-col lg:flex-row mx-auto justify-center container">
		{#each items as item}
			<a href="/item/{item.id}" class="card flex-shrink-0 justify-center m-4 sm:mx-auto md:mx-auto lg:mx-4 p-4 w-96">
				<p>Descripción: {item.description}</p>
				<p>Encontrado en: {item.location}</p>
				<p>Encontrado el: {formatDate(item.found)}</p>


				{#if item.images.length > 0}
				<img
					src={`https://ik.imagekit.io/pjfsbg6rk/tr:h-300,q-80/${item.images[0].url}?q=50`}
					alt={item.images[0].altText}
				/>

				<div class="flex flex-row items-center gap-2 text-xs">
					<span
						><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"
							><path
								fill="currentColor"
								d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M70 56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v67.57l-13.47-13.47a14 14 0 0 0-19.8 0l-21.42 21.41L117.9 86.1a14 14 0 0 0-19.8 0L70 114.2Zm116 144a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v82a14 14 0 0 0 14 14h114Zm30-30H72a2 2 0 0 1-2-2v-36.83l36.58-36.58a2 2 0 0 1 2.83 0l49.66 49.66a6 6 0 0 0 8.49 0l25.65-25.66a2 2 0 0 1 2.83 0l22 22V168a2 2 0 0 1-2.04 2m-54-86a10 10 0 1 1 10 10a10 10 0 0 1-10-10"
							/></svg
						></span
					>
					<p>{item.images.length}</p>
				</div>
				{/if}

				<div class="card p-2 my-2">
					<div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
						{#each item.tags.split(',') as tag}
							<span class="chip variant-filled-secondary">{tag}</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
{:else}
	Cargando.....
{/if}
