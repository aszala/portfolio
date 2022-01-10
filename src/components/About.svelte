<script>
import { getDocument } from '../Firebase'

let about;

getDocument("data", "about").then((data) => {
	about = data.about;
});

</script>

<a id="about"></a>
<section>
	<div id="image-container">
		<img src="https://p.w3layouts.com/demos/sep-2016/15-09-2016/preface/web/images/about-pic.jpg" alt="Picture of Abhay Zala" />
	</div>
	<div id="info-container">
		<div id="info-text-container">{about}</div>
	</div>
</section>


<style>
section>div {
	width: 50%;
}

#image-container>img {
	height: 400px;
	width: 100%;
	object-fit: contain;
	object-position: center;
}

#info-container {
	font-size: 1.3em;
	line-height: 30px;
}

#info-text-container {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}

</style>
