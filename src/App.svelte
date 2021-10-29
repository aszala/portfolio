<script>
import router from 'page';
import Main from './components/Main.svelte'

let page;
let title;

router('/', () => { page = Main; title = "Abhay Zala Portfolio"; });
router.start()

</script>

<svelte:head>
	<title>{title}</title>
	<script async defer src="https://platform.twitter.com/widgets.js"></script>
</svelte:head>

<svelte:component this="{page}" />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,700;1,400&display=swap');

	:global(:root) {
		--accent-color: #45ff4b;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		padding: 0;
		font-family: 'Asap', sans-serif;
	}

	:global(main) {
		width: 100%;
	}
</style>
