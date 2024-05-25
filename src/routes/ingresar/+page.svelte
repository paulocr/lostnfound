<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	export let data: PageData;
	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		applyAction: true,
		resetForm: false
	});
</script>

<div class="flex flex-col items-center container mx-auto">
    <h1 class="h1 font-bold text-primary-400">Ingresar</h1>
    <h3 class="h3 text-tertiary-100">Solo usuarios registrados pueden generar nuevos reportes</h3>
</div>

{#if $message}
	<div class="flex container mx-auto justify-center p-4">
		<aside class="alert variant-filled-error">
			<div class="alert-message" data-toc-ignore>
				<h3 class="h3" data-toc-ignore>Error</h3>
				<p>{$message}</p>
			</div>
		</aside>
	</div>
{/if}

<div class="flex container mx-auto text-2xl justify-center m-2 p-4">
	<form method="POST" enctype="multipart/form-data" use:enhance>
		<label class="label m-2">
			<span class="p-2">Usuario</span>
			<input
				class="input p-2"
				type="text"
				name="username"
				aria-invalid={$errors.username ? 'true' : undefined}
				bind:value={$form.username}
				{...$constraints.username}
			/>
		</label>
		{#if $errors.username}<span class="invalid">{$errors.username}</span>{/if}

		<label class="label m-2">
			<span class="p-2">Contraseña</span>
			<input
				class="input p-2"
				type="password"
				name="password"
				aria-invalid={$errors.password ? 'true' : undefined}
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</label>

		<button class="btn variant-filled-primary text-2xl m-2">Ingresar</button>
	</form>
</div>
