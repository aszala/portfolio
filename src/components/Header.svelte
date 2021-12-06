<header>
	<nav>
		<div id="logo-container" class="nav-container">
			<a href="/"><img id="logo" src="/images/logo.png" alt="Abhay Zala logo" /></a>
		</div>
		<div id="links-container" class="nav-container">
			<ul id="links-list">
				<li><a data-hover="about" href="#about">about</a></li>
				<li><a data-hover="resume/cv" href="/resume">resume/cv</a></li>
				<li><a data-hover="publications" href="/publications">publications</a></li>
				<li><a data-hover="projects" href="/projects">projects</a></li>
			</ul>
		</div>
	</nav>
	<div id="modal">
		<div id="modal-info">
			<div id="name">Abhay Zala</div>
			<br>
			Third Year Undergradate Student at UNC Chapel Hill
			<br>
			<hr>
			Undergraduate Research Assistant | Upcoming Software Development Intern at Capital One
			<br>
			<br>
			Email: <a href="mailto:aszala.cs.unc.edu" data-hover="aszala.cs.unc.edu">aszala.cs.unc.edu</a> |
					<a href="mailto:zala.abhay@gmail.com" data-hover="zala.abhay@gmail.com">zala.abhay@gmail.com</a>
		</div>
	</div>
</header>

<style>
	header {
		width: 100%;
		height: 100%;
		background:
	    	linear-gradient(to bottom, rgba(2,3,5,0.5), rgba(2,3,5,1)),
			url('https://wallpaperaccess.com/full/1393482.jpg')
			no-repeat center top;
		background-size: cover;
		position: relative;
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
		color: white;
		text-transform: uppercase;
		padding: 10px 0;
		text-decoration: none;
		margin: 0 12px;
		display: block;
		position: relative;
		font-family: 'Open Sans', sans-serif
	}

	#modal {
		position: absolute;
		left: 50%;
		transform: translateX(-50%) translateY(50%);
		bottom: 50%;
		width: 80%;
		margin: auto;
		display: flex;
		font-size: 1.5em;
	}

	#modal>div {
		padding: 50px;
	}

	#modal-info {
		/* width: 60%; */
		width: 50%;
	}
/*
	#modal-picture {
		width: 40%;
	}

	#modal img {
		width: 300px;
		height: 300px;
		margin: auto;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	} */

	#name {
		font-size: 1.5em;
		margin: 10px 0;
		color: white;
		font-weight: bold;
	}

	#modal hr {
		margin: 20px 0;
	}

	#modal a {
		position: relative;
		color: inherit;
		text-decoration: underline;
	}

	#modal-info>a::before {
		top: -10px;
		text-decoration: underline;
		border-bottom: none;
	}

</style>
