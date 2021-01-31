let navOpen = false;

$(function() {
	$("#menu").click(function() {
		if (navOpen) {
			$("#nav-menu").css("height", "0px");
			$("#menu-icon").addClass("fa-bars");
			$("#menu-icon").removeClass("fa-close");
		} else {
			$("#nav-menu").css("height", "200px");
			$("#menu-icon").addClass("fa-close");
			$("#menu-icon").removeClass("fa-bars");
		}

		navOpen = !navOpen;
	});

	let topofDiv = $("#header").offset().top;
	let height = $("#header").outerHeight();

	$(window).scroll(function() {
		if ($(window).scrollTop() > (topofDiv + height - 50)) {
		$("#menu-container").css("background", "rgb(30, 30, 30)");
		} else {
		$("#menu-container").css("background", "transparent");
		}
	});
});