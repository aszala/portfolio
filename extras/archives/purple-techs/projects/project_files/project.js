$(function() {
	setHeight();
});

$(window).on('resize', function() {
	setHeight();
});

function setHeight() {
	$("#project-images").css("height", $("#project-information").height());
	$(".project-image-container").css("height", $("#project-information").height() / 2);
}
