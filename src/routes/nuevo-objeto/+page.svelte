<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	export let data: PageData;
	import TextInput from '$lib/components/TextInput.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import { page } from '$app/stores';
	import Loading from '$lib/components/Loading.svelte';
	const { form, errors, constraints, message, enhance, delayed } = superForm(data.form);

	$: type = Number($page.url.searchParams.get('tipo'));
	let { categories } = data;
</script>

<div class="flex justify-center">
	<h1 class="h1 text-secondary-500 font-extrabold">
		{type === 1 ? `Se me perdió algo y lo estoy buscando` : `Encontré algo y lo quiero reportar`}
	</h1>
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
	{#if $delayed}
	<div class="flex justify-center ">
		<Loading size={200} color={'#306eeb'} />
	</div>
	{:else}
		<form method="POST" enctype="multipart/form-data" use:enhance>
			<section class="border my-2">
				<TextInput
					label="Descripción"
					name="description"
					bind:value={$form.description}
					errors={$errors.description}
					constraints={$constraints.description}
				/>

				<TextInput
					label={type === 1 ? `Lugar donde creo que lo perdí` : `Lugar donde lo encontré`}
					name="location"
					bind:value={$form.location}
					errors={$errors.location}
					constraints={$constraints.location}
				/>

				<DateInput
					label={type === 1 ? `Cuándo creo que lo perdí` : `Cuándo lo encontré`}
					name="foundOrLost_at"
					bind:value={$form.foundOrLost_at}
					errors={$errors.foundOrLost_at}
					constraints={$constraints.foundOrLost_at}
				/>

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

				{#if $errors.images}<span class="invalid">{$errors.images}</span>{/if}

				{#if type === 2}
					<TextInput
						label="Lo dejé en"
						name="left_at"
						bind:value={$form.left_at}
						errors={$errors.left_at}
						constraints={$errors.left_at}
					/>
				{/if}

				<label class="label m-2">
					<span>Categorías</span>
					<select
						class="select"
						name="category"
						bind:value={$form.category}
						{...$constraints.category}
					>
						<option value="" disabled selected>Escoja un valor</option>
						{#each categories as { id, name }}
							<option value={id}>{name}</option>
						{/each}
					</select>
				</label>
				<!-- </section> -->
				<section class="border my-2">
					<TextInput
						label={type === 1 ? `Mi nombre` : `Nombre de quien reporta`}
						name="name"
						bind:value={$form.name}
						errors={$errors.name}
						constraints={$constraints.name}
					/>

					<TextInput
						label={type === 1 ? `Mi sección` : `Sección de quien reporta`}
						name="class"
						bind:value={$form.class}
						errors={$errors.class}
						constraints={$constraints.class}
					/>

					<TextInput
						label={type === 1 ? `Mi teléfono` : `Teléfono de quien reporta`}
						name="phone"
						bind:value={$form.phone}
						errors={$errors.phone}
						constraints={$constraints.phone}
					/>

					<input type="hidden" name="itemType" value={type === 1 ? `looking` : `reported`} />
				</section>

				<button class="btn variant-filled-primary text-2xl m-2">Guardar</button>
			</section>
		</form>
	{/if}
</div>
