let i = 1;

setImage();
setInterval(setImage, 5000);

function setImage() {
	$(".images").fadeOut(function() {
		$(".images").css("background-image",
			"linear-gradient(0deg, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%), linear-gradient(90deg, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%), url('imgs/friends/friends" + i + ".jpg')");
		$(".images").fadeIn();
		i++;

		if (i == 8) {
			i = 1;
		}
	});
}


let whoami = "$ whoami";
let whoamiIndex = 2;

$(".whoami-description").fadeOut(0);

var cursorFlicker = setInterval(function() {
	$("#cursor").fadeOut();
	$("#cursor").fadeIn();
}, 100);

var whoamiInterval;
whoamiInterval = setInterval(function() {
	$(".whoami-title").html(whoami.substring(0, whoamiIndex) + "<span id='cursor'> I</span>");
	whoamiIndex++;

	if (whoamiIndex == whoami.length+1) {
		clearInterval(whoamiInterval);
		setTimeout(function() {
			$(".whoami-description").fadeIn();
			setTimeout(function() {
				$(".name").fadeIn();
			}, 500);
		}, 1000);
	}
}, 200);

$(".name").fadeOut(0);
