<script lang="ts">
    export let label = "";
    export let name = "";
    export let value:string | null;
    export let errors;
    export let constraints = {};
  </script>
  
  <label class="label m-2">
    <span class="p-2">{label}</span>
    <input
      class="input p-2"
      type="text"
      {name}
      aria-invalid={errors ? 'true' : undefined}
      bind:value={value}
      {...constraints}
    />
  </label>
  
  {#if errors}<span class="invalid">{errors}</span>{/if}