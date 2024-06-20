<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms';
	import TextInput from './TextInput.svelte';
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	let item = $modalStore[0].meta.item;

	const { form, errors, constraints, message, delayed, enhance } = superForm(
		$modalStore[0].meta.form,
		{
			onResult({ result }) {
				if (result.type === 'success') modalStore.close()
			}
		}
	);

	const formData = {
		name: '',
		tel: ''
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal-wide shadow-xl space-y-4">
		<header class="text-4xl font-bold text-center">{$modalStore[0].title}</header>

		<article>{item.description}</article>
		<article>
			{item.itemType === 'reported'
				? `Lo encontraron en: ${item.location}`
				: `Fue olvidado en: ${item.location}`}
		</article>

		{#if item.itemType === 'reported'}
			<article>Está en: {item.left_at}</article>
		{/if}

		{#if item.images.length > 0}
			<div class="grid grid-cols-4 gap-2">
				{#each item.images as image}
					<img src={image.url} alt={image.altText} width={400} />
				{/each}
			</div>
		{/if}

		<form
			class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token"
			method="POST"
			use:enhance
		>
			<h3 class="h3">Ingrese sus datos para iniciar la devolución</h3>

			<TextInput 
				label="Nombre" 
				name="name" 
				bind:value={$form.name}
				errors={$errors.name}
				constraints={$constraints.name}
			/>

			<TextInput
				label="Clase"
				name="class"
				bind:value={$form.class}			
				errors={$errors.class}
				constraints={$constraints.class}
			/>

			<TextInput
				label="Teléfono"
				name="phone"
				bind:value={$form.phone}
				errors={$errors.phone}
				constraints={$constraints.phone}
			/>

			<input name="itemId" type="hidden" bind:value={item.id} />

			<!-- prettier-ignore -->
			<footer class="modal-footer {parent.regionFooter}">
			<button class="btn variant-filled-secondary text-white">Enviar</button>
			<!-- <button class="btn variant-filled-secondary text-white" on:click={onFormSubmit}>Enviar</button> -->
			<button class="btn variant-filled-error text-white" on:click={parent.onClose}>Cancelar</button>
		</footer>
		</form>
	</div>
{/if}
