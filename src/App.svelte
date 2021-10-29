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
	:global(:root) {
		--accent-color: #00a78e;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		padding: 0;
	}

	:global(main) {
		width: 100%;
	}
</style>
