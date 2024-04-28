<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	export let data: PageData;
	const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<div class="flex justify-center">
	<h1 class="h1 text-secondary-500 font-extrabold">Nuevo objeto perdido</h1>
</div>

{#if $message}
	<div class="flex mx-auto container m-2 variant-filled-success text-2xl">
		<aside class="alert variant-filled-success">
			<div class="alert-message" data-toc-ignore>
				<p>{$message}</p>
			</div>
		</aside>
	</div>
{/if}

<div class="flex container mx-auto text-2xl justify-center m-2 p-4">
	<form method="POST" enctype="multipart/form-data" use:enhance>
		<label class="label m-2">
			<span class="p-2">Descripción</span>
			<input
				class="input p-2"
				type="text"
				name="description"
				aria-invalid={$errors.description ? 'true' : undefined}
				bind:value={$form.description}
				{...$constraints.description}
			/>
		</label>
		{#if $errors.description}<span class="invalid">{$errors.description}</span>{/if}

		<label class="label m-2">
			<span class="p-2">Lugar donde fue encontrado</span>
			<input
				class="input p-2"
				type="text"
				name="location"
				aria-invalid={$errors.location ? 'true' : undefined}
				bind:value={$form.location}
				{...$constraints.location}
			/>
		</label>

		{#if $errors.location}<span class="invalid">{$errors.location}</span>{/if}

		<label class="label m-2">
			<span class="p-2">Encontrado</span>
			<input
				class="input p-2"
				type="datetime-local"
				name="found"
				aria-invalid={$errors.found ? 'true' : undefined}
				bind:value={$form.found}
				{...$constraints.found}
			/>
		</label>

		{#if $errors.found}<span class="invalid">{$errors.found}</span>{/if}

		<label class="label m-2">
			<span class="p-2">Fotos</span>


			<input
				class="input p-2"
				type="file"
                multiple
				name="images"
				aria-invalid={$errors.images ? 'true' : undefined}
				bind:value={$form.images}
				{...$constraints.images}
			/>
		</label>

		{#if $errors.tags}<span class="invalid">{$errors.tags}</span>{/if}

        

		<label class="label m-2">
			<span class="p-2">Categoría</span>
			<input
				class="input p-2"
				type="text"
				name="tags"
				aria-invalid={$errors.tags ? 'true' : undefined}
				bind:value={$form.tags}
				{...$constraints.tags}
			/>
		</label>

		{#if $errors.tags}<span class="invalid">{$errors.tags}</span>{/if}

		<button class="btn variant-filled-primary text-2xl m-2">Guardar</button>
	</form>
</div>
