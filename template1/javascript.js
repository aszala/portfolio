let navOpen = false;

$(function() {
	$("#menu").click(function() {
		if (navOpen) {
			$("#nav-menu").css("height", "0px");
			$("#menu-icon").addClass("fa-bars");
			$("#menu-icon").removeClass("fa-close");
		} else {
			$("#nav-menu").css("height", "150px");
			$("#menu-icon").addClass("fa-close");
			$("#menu-icon").removeClass("fa-bars");
		}

		navOpen = !navOpen;
	});
});
