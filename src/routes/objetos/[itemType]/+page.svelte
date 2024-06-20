<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';
	import type { item } from '@prisma/client';
	import ClaimFormModal from '$lib/components/ClaimFormModal.svelte';
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	const modalComponent: ModalComponent = { ref: ClaimFormModal };

	export let data;
	$: ({ items, categoriesCount, filteredItems } = data);

	const cardColors = {
		new: 'variant-filled-success',
		in_progress: 'variant-filled-warning',
		returned: 'variant-filled-error'
	};

	const status_es = {
		new: 'nuevo',
		in_progress: 'en proceso',
		returned: 'devuelto'
	};

	$: itemType = $page.params.itemType;
	$: text = itemType === 'perdidos' ? `Yo lo encontré` : `Esto es mío!`;

	const itemDetails = (id: number) => {
		goto(`/item/${id}`);
	};

	const newItem = (item: item) => {
			const modal: ModalSettings = {
				type: 'component',
				component: modalComponent,
				title: text,
				meta: { item: item, form: data.form },
			};
			modalStore.trigger(modal);
	};
</script>

<div class="flex justify-center m-10">
	<h2 class="h2">
		{itemType === 'perdidos'
			? `Objetos perdidos que están siendo buscados por sus dueños`
			: `Objetos perdidos reportados`}
	</h2>
</div>

{#if categoriesCount}
	<div class="flex container mx-auto w-1/2">
		<table class="table table-compact">
			<thead class="bg-slate-800">
				<th>Categoría</th>
				<th>Conteo</th>
			</thead>
			<tbody>
				{#each categoriesCount as { categoryName, count }}
					<tr class="text-center">
						<td><p class="text-xl">{categoryName}</p></td>
						<td><p class="text-xl">{count}</p></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

{#if filteredItems}
	<div class="flex flex-wrap mx-auto justify-center container">
		{#each filteredItems as item}
			<div
				class="block card p-4 card-hover justify-center m-4 sm:mx-auto md:mx-auto lg:mx-4 rounded-container-token border border-surface-200"
			>
				<p class=" text-center font-bold text-xl py-4 my-2 {cardColors[item.status]}">
					{status_es[item.status]}
				</p>
				<p>{item.description}</p>
				<p>{formatDate(item.foundOrLost_at)}</p>

				{#if item.images.length > 0}
					<div class="h-48 py-4">
						<img
							src={item.images[0].url}
							alt={item.images[0].altText}
							width={100}
							height={100}
							class="object-contain"
						/>
					</div>

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

				<p>Categoría: {item.category.name}</p>

				{#if item.claimedBy}
				<div class="border bg-warning-500 p-2">
					<p>Reclamado por:</p>
					<article>{item.claimedBy.name}</article>
					<article>{item.claimedBy.class}</article>
				</div>
				{/if}

				<footer class="p-4 flex space-x-4">
					<div class="flex-auto flex justify-center gap-4">
						<button
							on:click={() => newItem(item)}
							type="button"
							disabled={item.status != 'new'}	
							class="btn variant-filled-tertiary text-white">{text}</button
						>
						
						<button
							type="button"
							class="btn variant-filled-tertiary text-white"
							on:click={() => itemDetails(item.id)}>Detalles</button
						>
					</div>
				</footer>
			</div>
		{/each}
	</div>
{:else}
	Cargando.....
{/if}

<style>
	.table thead {
		background-color: #2274a5;
	}
</style>
