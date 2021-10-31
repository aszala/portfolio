<script>
import { getDocument } from '../Firebase.svelte'

let about;

getDocument("data", "about").then((data) => {
	about = data.about;
});

</script>

<a id="about"></a>
<section>
	<div id="image-container"></div>
	<div id="info-container">{about}</div>
</section>
