<script lang="ts">
	import '../app.postcss';
	import donbosco from '$lib/img/donbosco3.png';
	import ObjectModal from '$lib/components/ObjectModal.svelte';
	import { getModalStore, initializeStores, Modal, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	initializeStores();

	const modalStore = getModalStore();

	const modalComponent:ModalComponent = { ref: ObjectModal };
	const newItem = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: modalComponent
		};
		modalStore.trigger(modal);
	};

</script>

<Modal />


<div
    class="flex w-screen bg-secondary-100 text-secondary-500 sticky top-0"
>
    <div class="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-20 lg:text-4xl text-2xl w-full px-4 h-full">
        <a href="/">
            <svg
                class="w-[48px] h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#1c4686"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clip-rule="evenodd"
                />
            </svg>
        </a>
        <a href="/objetos/reportados">Reportados</a>
        <a href="/objetos/perdidos">Buscados</a>
        <button type="button" class="btn variant-filled-primary text-white lg:text-2xl text-xl p-4 m-4" on:click={newItem}
        >Nuevo reporte</button>

		<img src={donbosco} width={100} alt="Don Bosco Logo" />
    </div>
    
</div>


<!-- <div class="flex justify-center p-4">
	<a href="/">
		<img src={donbosco} width={200} alt="Don Bosco" />
	</a>
</div> -->
<div class=" pt-10">
	<slot />
</div>
