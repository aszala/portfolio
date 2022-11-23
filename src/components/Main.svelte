<script>
import { scrollIntoView } from '../utils';
import Header from './Header.svelte';
import Publications from './Publications.svelte';
import Experience from './Experience.svelte';
import Education from './Education.svelte';

let y;
</script>

<svelte:window bind:scrollY={y} />

<main>
	<Header />
	<Publications />
	<Experience />
	<Education />
	{#if y > 75}
		<div data-hover="header" on:click|preventDefault={scrollIntoView} id="scroll-to-top">^</div>
	{/if}
</main>

<style>
	#scroll-to-top {
		position: fixed;
		bottom: 50px;
		right: 50px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: var(--accent-color);
		color: white;
		text-align: center;
		font-size: 4em;
		line-height: 130%;
		cursor: pointer;
		font-family: 'Patrick Hand', cursive;
	}

    @media only screen and (max-width: 1380px) {
		#scroll-to-top {
			bottom: 20px;
			right: 20px;
		}
	}
</style>
