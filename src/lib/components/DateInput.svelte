<script lang="ts">
	function getCurrentDateTime() {
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const day = String(now.getDate()).padStart(2, '0');
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');

		// Return formatted datetime-local string
		return `${year}-${month}-${day}T${hours}:${minutes}`;
	}

	export let label = '';
	export let name = '';
	export let value: string = getCurrentDateTime();
	export let errors;
	export let constraints = {};
</script>

<label class="label m-2">
	<span class="p-2">{label}</span>
	<input
		class="input p-2"
		type="datetime-local"
		{name}
		aria-invalid={errors ? 'true' : undefined}
		bind:value
		{...constraints}
	/>
</label>

{#if errors}<span class="invalid">{errors}</span>{/if}
