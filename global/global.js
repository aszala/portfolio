/*setTimeout(function() {
	$(".header").css("opacity", "1");
}, 2000);
*/

$(".underline").hover(function() {
	$(this).children(".underline-div").css("width", "100%");
}, function() {
	$(this).children(".underline-div").css("width", "0%");
});
