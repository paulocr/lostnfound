<script lang="ts">
	import '../app.postcss';
	// import lostnfound from '$lib/img/lostnfound-nobg.png';
	import donbosco from '$lib/img/donbosco3.png';
	export let data;
	
	$: ( { user } = data )


</script>

<div class="flex items-center justify-end bg-secondary-300 p-4 text-secondary-500 gap-4">
	{#if user}
		<p class="font-extrabold text-xl">{user.username}</p>
		<form action="/salir" method="post">
			<button>Logout</button>
		  </form>
	{:else}
		<a href="/ingresar">Iniciar sesión</a>
	{/if}
</div>

<div class="flex justify-center p-4">
	<a href="/">
		<img src={donbosco} width={200} alt="Don Bosco" />
	</a>
</div>
<slot />
