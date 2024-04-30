<script lang="ts">
	import '../app.postcss';
	// import lostnfound from '$lib/img/lostnfound-nobg.png';
	import donbosco from '$lib/img/donbosco3.png';
</script>

<div class="flex justify-center p-4">
	<a href="/">
		<img src={donbosco} width={200} alt="Don Bosco" />
	</a>
</div>
<slot />
