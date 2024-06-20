<script lang="ts">
	import { goto } from '$app/navigation';
	import { getModalStore } from '@skeletonlabs/skeleton';
	export let parent;
	const modalStore = getModalStore();

	const navigate = (id: number) => {
		goto(`/nuevo-objeto?tipo=${id}`);
		parent.onClose();
	};
</script>

{#if $modalStore[0]}
	<div class="card p-10 w-modal shadow-xl space-y-4 variant-filled-secondary text-white">
		<div class="flex flex-col items-center space-y-4">
			<h2 class="h2 text-4xl">Tipo de reporte</h2>
			<!-- <p>Elija el tipo de reporte</p> -->
			<div class="grid grid-cols-2 gap-4">
				<span
					role="button"
					tabindex="0"
					on:keydown={() => navigate(1)}
					class="border p-4 bg-secondary-400 text-2xl text-center"
					on:click={() => navigate(1)}
				>
					Se me perdió algo y lo estoy buscando
				</span>
				<span
					role="button"
					tabindex="0"
					on:keydown={() => navigate(2)}
					on:click={() => navigate(2)}
					class="border p-4 bg-secondary-400 text-2xl text-center"
					>Encontré algo y quiero reportarlo</span
				>
			</div>
		</div>
	</div>
{/if}
