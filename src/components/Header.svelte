<header>
	<nav>
		<div id="logo-container" class="nav-container">
			<a href="/"><img id="logo" src="/images/logo.png" alt="Abhay Zala logo"></a>
		</div>
		<div id="links-container" class="nav-container">
			<ul id="links-list">
				<li><a data-hover="About" href="#about">about</a></li>
				<li><a data-hover="Experience" href="#experience">experience</a></li>
				<li><a data-hover="Resume/CV" href="/resume">resume/cv</a></li>
				<li><a data-hover="Projects" href="/projects">projects</a></li>
			</ul>
		</div>
	</nav>
</header>

<style>

	header {
		width: 100%;
		height: 650px;
		background: url('https://p.w3layouts.com/demos/sep-2016/15-09-2016/preface/web/images/header-bg.jpg') no-repeat center top;
		background-size: cover;
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
		font-size: 1em;
		color: white;
		text-transform: uppercase;
		padding: 10px 0;
		text-decoration: none;
		margin: 0 12px;
		display: block;
		position: relative;
		font-family: 'Open Sans', sans-serif
	}

	#links-list>li>a::before {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		padding: 10px 0;
		max-width: 0;
		border-bottom: 3px solid var(--accent-color);
	    color: var(--accent-color);
		content: attr(data-hover);
		-webkit-transition: max-width 0.5s;
		-moz-transition: max-width 0.5s;
		transition: max-width 0.5s;
	}

	#links-list>li>a:hover::before {
		max-width: 100%;
	}

</style>
