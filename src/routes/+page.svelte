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

<div class="flex mx-auto justify-center">
	<button type="button" class="btn variant-filled-secondary text-6xl p-6 m-4" on:click={newItem}
		>Nuevo objecto</button
	>
</div>

{#if items}
	<div class="flex mx-auto justify-center container">
		{#each items as item}
			<div class="card m-4 p-4 w-96">
				<p>Descripción: {item.description}</p>
				<p>Encontrado en: {item.location}</p>
				<p>Encontrado el: {formatDate(item.found)}</p>

				<img src={item.image != null ? item.image : 'https://doodleipsum.com/700/avatar-2?i=0b97563c41e025e6c761db36833159f3'} alt={item.description} width={200} />

				<div class="grid grid-cols-4 gap-4 py-4">
					{#each item.tags.split(",") as tag}
						<span class="chip variant-filled-secondary">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{:else}
	Cargando.....
{/if}
