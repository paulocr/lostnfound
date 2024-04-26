<script lang="ts">
	import Dropzone from 'svelte-file-dropzone';

	type File = {
		path: string;
		lastModified: string;
		lastModifiedDate: string;
		name: string;
		size: number;
		type: string;
		webkitRelativePath: string;
	};
	type Files = {
		accepted: File[];
		rejected: File[];
	};

	let files: Files = {
		accepted: [],
		rejected: []
	};

	$: filesSelected = files.accepted.length > 0;

	function handleFilesSelect(e: CustomEvent) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function uploadFiles() {
		console.log(files);
	}
</script>

<div class="card variant-filled-surface flex flex-col container place-items-center mx-auto p-4">
	<Dropzone disableDefaultStyles containerClasses="dropzone" on:drop={handleFilesSelect}
		>Arrastre o haga click para subir imágenes</Dropzone
	>

	{#if filesSelected}
		<section class="filesList">
			<ol>
				{#each files.accepted as item}
					<li>{item.name}</li>
				{/each}
			</ol>
		</section>
	{/if}

	<section class="py-2">
		<button
			type="button"
			class="btn variant-filled-tertiary text-2xl"
			on:click={uploadFiles}
			disabled={!filesSelected}>Subir</button
		>
	</section>
</div>

<style>
	:global(.dropzone) {
        border: 1px solid!important;;
		background-color: #4498b2!important;
        display: flex;
        width: auto;
        font-size: 24px;
        color: #fff!important;
	}
</style>
