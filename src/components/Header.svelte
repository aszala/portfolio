<script>
import { getDocument } from '../Firebase';
import { scrollIntoView } from '../utils';

let about = "loading";

getDocument("data", "about").then((data) => {
	about = data.about_short;
});

</script>

<header id="header">
	<nav>
		<div id="logo-container" class="nav-container">
			<a href="https://aszala.com"><img id="logo" src="/images/logo.png" alt="Abhay Zala logo" /></a>
		</div>
		<div id="links-container" class="nav-container">
			<ul id="links-list">
				<li><a data-hover="publications" on:click|preventDefault={scrollIntoView}>publications</a></li>
				<li><a data-hover="experience" on:click|preventDefault={scrollIntoView}>experience</a></li>
				<li><a data-hover="education" on:click|preventDefault={scrollIntoView}>education</a></li>
			</ul>
		</div>
	</nav>
	<div id="modal">
		<div id="profile-image">
			<img src="./images/abhay.png" alt="Abhay Zala">
		</div>
		<div id="modal-info">
			<div id="name">Abhay Zala</div>
			<br>
			{@html about}
			<br>
			<hr>
			<br>
			Email: <a href="mailto:aszala@cs.unc.edu" data-hover="aszala@cs.unc.edu">aszala@cs.unc.edu</a> |
					<a href="mailto:zala.abhay@gmail.com" data-hover="zala.abhay@gmail.com">zala.abhay@gmail.com</a>
			<br><br>
			<a href="https://scholar.google.com/citations?user=8mfWxD8AAAAJ&hl=en&oi=sra" target="_blank" data-hover="Google Scholar">Google Scholar</a>
								| <a href="https://twitter.com/AbhayZala7" target="_blank" data-hover="Twitter">Twitter</a>
								| <a href="https://github.com/aszala/" target="_blank" data-hover="Github">GitHub</a>
			<br><br>
			<a class="button" target="_blank" href="https://aszala.com/resume_abhay_zala.pdf" type="button">Download CV</a>
		</div>
	</div>
</header>

<style>
	header {
		width: 100%;
		height: fit-content;
		background: var(--main-bg-color);
		position: relative;
		margin-bottom: 100px;
	}

	nav {
		width: 80%;
		height: 75px;
		display: flex;
		margin: auto;
	}

	.nav-container {
		display: flex;
	}

	#logo-container {
		width: 33%;
	}

	#logo {
		height: 80%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		filter: invert(100%);
	}

	#links-container {
		width: 66%;
		justify-content: right;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	#links-list {
		list-style: none;
		width: 100%;
		text-align: right;
	}

	#links-list>li {
		display: inline-block;
	}

	#links-list>li>a {
		font-size: 1.1em;
		text-transform: uppercase;
		padding: 10px 0;
		text-decoration: none;
		margin: 0 12px;
		display: block;
		position: relative;
		font-family: 'Open Sans', sans-serif
	}

	#modal {
		position: relative;
		top: 50px;
		width: 80%;
		margin: auto;
		display: flex;
		font-size: 1.2em;
		display: flex;
	}

	#profile-image>img {
		width: 300px;
		height: 300px;
		border-radius: 50%;
	}

	#modal>div {
		padding: 50px;
	}

	#modal-info {
		width: 50%;
	}

	#name {
		font-size: 1.2em;
		margin: 10px 0;
		font-weight: bold;
	}

	#modal hr {
		margin: 20px 0;
	}

	#modal a:not(.button) {
		position: relative;
		padding: 10px 0;
		text-decoration: none;
	}

	@media only screen and (max-width: 1025px) {
		#modal {
			flex-direction: column;
			text-align: center;
			width: 90%;
		}

		#modal>div {
			padding: 10px;
		}

		#modal-info {
			margin: auto;
			width: 95%;
		}
	}

</style>
