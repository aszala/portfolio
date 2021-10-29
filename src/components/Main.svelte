<script>
import Header from './Header.svelte';
import About from './About.svelte';

function scrollTo(elem) {
	document.getElementById(elem).scrollIntoView();
}

</script>


<main>
	<Header />
	<hr>
	<About />
</main>
