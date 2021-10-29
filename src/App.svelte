<script>
import router from 'page';
import Home from './components/Home.svelte'

let page;
let title;

router('/', () => { page = Home; title = "Abhay Zala Profolio"; });
// router('/colloquium', () => { page = Colloquium; title = "Colloquium Series"; });
router.start()

</script>

<svelte:head>
	<title>{title}</title>
	<script async defer src="https://platform.twitter.com/widgets.js"></script>
</svelte:head>

<svelte:component this="{page}" />
