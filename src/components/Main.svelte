<script>
import { onMount } from 'svelte';
import { scrollIntoView } from '../utils';
import Header from './Header.svelte';
import Publications from './Publications.svelte';
import Experience from './Experience.svelte';
import Education from './Education.svelte';
// import Twitter from './TwitterFeed.svelte';

let y;
</script>

<svelte:window bind:scrollY={y} />

<main>
	<Header />
	<Publications />
	<Experience />
	<Education />
	{#if y > 75}
		<div id="scroll-to-top">^</div>
	{/if}
	<!-- <Twitter /> -->
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');

	#scroll-to-top {
		position: fixed;
		bottom: 100px;
		right: 100px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: var(--accent-color);
		color: white;
		text-align: center;
		font-size: 3em;
		cursor: pointer;
		font-family: 'Asap';
	}
</style>
