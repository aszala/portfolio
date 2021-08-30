/*setTimeout(function() {
	$(".header").css("opacity", "1");
}, 2000);
*/

let showNavBar = false;

$(".underline").hover(function() {
	$(this).children(".underline-div").css("width", "100%");
}, function() {
	$(this).children(".underline-div").css("width", "0%");
});

$(".menu-container").click(function() {
	showNavBar = !showNavBar;
	if (showNavBar) {
		$("#menu-bars").css("transform", "translateY(3px)");
		$(".menu-bar.1").css("transform", "rotateZ(-45deg) translateX(-7px) translateY(6px)");
		$(".menu-bar.2").css("transform", "rotateZ(45deg)");
		$(".menu-bar.3").css("transform", "scale(0.001)");

		$("#navbar").css({"color" : "black", "background" : "white"});
		$("#name").children("img").css("filter", "invert(100%)");

		$(".menu-bar.1").css("background-color", "red");
		$(".menu-bar.2").css("background-color", "red");

		$(".header-dropdown").css({"position" : "absolute", "height" : "100%"});
		$(".header-dropdown-container").css("visibility", "visible");
		$(".logo-pre-dropdown").css("display", "none");
	} else {
		$("#menu-bars").css("transform", "");
		$(".menu-bar.1").css("transform", "");
		$(".menu-bar.2").css("transform", "");
		$(".menu-bar.3").css("transform", "");

		$(".menu-bar.1").css("background-color", "white");
		$(".menu-bar.2").css("background-color", "white");

		$(".header-dropdown-container").css("visibility", "hidden");
		$(".header-dropdown").css({"position" : "relative", "height" : "var(--header-height)"});
		$(".logo-pre-dropdown").css("display", "block");
	}
});
