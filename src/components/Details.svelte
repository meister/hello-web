<script lang="ts">
	export let serverHost: string;
	export let serverIP: string;
	export let clientIP: string;
</script>

<div class="message">
	<div>
		<h1>Server: {serverHost}</h1>
		<h1>Server IP: {serverIP}</h1>
		<h1>Client: {clientIP}</h1>
	</div>
</div>

<style>
	.message {
		border-left: 1px solid var(--divider);
		padding: 0 0 0 1rem;
		margin: 0 0 0 1rem;
		min-height: 2.5rem;
		display: flex;
		align-items: center;
	}

	.message h1 {
		font-weight: 400;
		font-size: 1em;
		margin: 0;
	}
</style>
