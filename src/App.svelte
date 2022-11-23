
<script>
import router from 'page';

import { initFirebase } from './Firebase';
initFirebase();

import Main from './components/Main.svelte';
let page = Main;
let title = "Abhay Zala";

router('/:path', (ctx, next) => {
	router.redirect("/");
});

router.start()

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Abhay Zala Homepage">
	<meta name="author" content="Abhay Zala">
	<link rel="canonical" href="https://aszala.com/" />
	<meta name="robots" content="index, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="google" content="nositelinkssearchbox" />
	<script async src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</svelte:head>

<svelte:component this="{page}" />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,700;1,400&family=Patrick+Hand&display=swap');

	:global(:root) {
		--accent-color: rgb(24, 24, 24);
		--link-color: rgb(94, 94, 94);
		--main-bg-color: white;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		padding: 0;
		font-family: 'Asap', sans-serif;
		background: var(--main-bg-color);
		color: black;
	}

	:global(main) {
		width: 100%;
		height: 100%;
	}

	:global(h1) {
        font-size: 2em;
        text-decoration: underline;
        text-transform: uppercase;
    }

	:global(a) {
		color: var(--link-color);
		cursor: pointer;
		-webkit-transition: color 300ms;
		-moz-transition: color 300ms;
		transition: color 300ms;
	}

	:global(a:visited) {
		color: var(--link-color);
	}

	:global(a::before) {
		position: absolute;
		top: 0px;
		left: 0;
		overflow: hidden;
		padding: 10px 0;
		max-width: 0;
		border-bottom: 3px solid var(--accent-color);
	    color: var(--accent-color);
		content: attr(data-hover);
		-webkit-transition: max-width 300ms;
		-moz-transition: max-width 300ms;
		transition: max-width 300ms;
		height: fit-content;
		white-space:nowrap;
	}

	:global(a:hover::before) {
		max-width: 100%;
	}

	:global(a:hover) {
	    color: var(--accent-color);
	}

	:global(section) {
		display: flex;
		max-width: 2000px;
		margin: auto;
		padding: 50px;
		flex-direction: column;
	}

	:global(.button) {
		background-color: transparent;
		border: 2px solid var(--accent-color);
		display: inline-block;
		cursor: pointer;
		color: var(--accent-color);
		padding: 16px 32px;
		text-decoration: none !important;
		transition: color 200ms, background-color 200ms;
	}

	:global(.button:hover) {
		background-color: var(--accent-color);
		color: var(--main-bg-color);
	}

	:global(::-webkit-scrollbar) {
		width: 10px;
		height: 10px;
	}
	:global(::-webkit-scrollbar-button) {
		width: 0px;
		height: 0px;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: var(--accent-color);
		border-radius: 50px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: var(--accent-color);
	}
	:global(::-webkit-scrollbar-thumb:active) {
		background: var(--accent-color);
	}
	:global(::-webkit-scrollbar-track) {
		background: var(--main-bg-color);
	}
</style>
