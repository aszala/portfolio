<script>
import router from 'page';
import Main from './components/Main.svelte'
import { initFirebase } from './Firebase.js'

let page;
let title;

router('/', () => { page = Main; title = "Abhay Zala Portfolio"; });
router.start()

initFirebase();

</script>

<svelte:head>
	<title>{title}</title>
	<script async defer src="https://platform.twitter.com/widgets.js"></script>
</svelte:head>

<svelte:component this="{page}" />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,700;1,400&display=swap');

	:global(:root) {
		--accent-color: #F9bA00;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		padding: 0;
		font-family: 'Asap', sans-serif;
		background: rgba(2,3,5);
		color: #cccccc;
	}

	:global(main) {
		width: 100%;
		height: 100%;
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
	}

	:global(a:hover::before) {
		max-width: 100%;
	}
</style>
