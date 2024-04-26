<script lang="ts">
	import '../app.postcss';
	import lostnfound from '$lib/img/lostnfound-nobg.png';
</script>

<div class="flex justify-center flex p-4">
	<a href="/"><img src={lostnfound} width={200} height={200} alt="Logo" /></a>
</div>
<slot />
