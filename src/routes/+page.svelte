<script lang="ts">
	import type { PageProps } from './$types';
	import Details from '../components/Details.svelte';

	let name = 'World';
	let { data }: PageProps = $props();
</script>

<div class="container">
	<h1>Hello {name}</h1>
	<Details serverHost={data.serverHost} serverIP={data.serverIP} clientIP={data.clientIP} />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		max-width: 32rem;
		margin: 0 1rem;
	}

	h1 {
		font-weight: 200;
		font-size: 3rem;
		line-height: 1;
		position: relative;
		top: -0.05rem;
	}
</style>
