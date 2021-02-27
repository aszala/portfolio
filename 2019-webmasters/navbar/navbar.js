/* global $ */

var navbarOverlay = false;

function showUnderline(element) {
	$(element).children(".underline").css("width", "100%");
}

function hideUnderline(element) {
	$(element).children(".underline").css("width", "0%");
}

$(window).scroll(function() {
	checkShoudlContainBasedOnScroll();
});

function toggleContainedMenu(show) {
	if (show || navbarOverlay) {
		$("#navbar-free-links").css({"width" : "0%", "opacity" : "0"});
	} else {
		$("#navbar-free-links").css({"width" : "100%", "opacity" : "1"});
	}
}

function toggleMenuOverlay() {
	navbarOverlay = !navbarOverlay;
	
	if (navbarOverlay) {
		$("#navbar-bar-1").css("transform", "translateX(6px) translateY(6px) rotate(-45deg) scaleX(0.5)");
		$("#navbar-bar-2").css("transform", "rotate(45deg)");
		$("#navbar-bar-3").css("transform", "translate(-7px) translateY(-6px) rotate(-45deg) scaleX(0.5)");
		$(".navbar-bar").css("background-color", "red");
		$("#navbar-expanded").css("height", "100%");
	} else {
		$("#navbar-bar-1").css("transform", "translateX(0) translateY(0) rotate(0deg) scaleX(1)");
		$("#navbar-bar-2").css("transform", "rotate(0deg)");
		$("#navbar-bar-3").css("transform", "translate(0) translateY(0) rotate(0deg) scaleX(1)");
		$(".navbar-bar").css("background-color", "black");
		$("#navbar-expanded").css("height", "0%");
		
		checkShoudlContainBasedOnScroll();
	}
}

function openLink(link) {
	$("#animated-transition").css("height", "100%");
	
	setTimeout(function() {
		$("#animated-transition").children("div").animate({
			"top" : "-100%"
		}, 500);
	}, 500);
	
	setTimeout(function() {
		window.location.href = link;
	}, 1000);
}

$(function() {
	checkShouldContain();
	
	var div = $(document.createElement("div"));
	
	$("#animated-transition").append(div);
	
	div.css({
		"position" : "absolute",
		"top" : "100%",
		"left" : "0",
		"width" : "100%",
		"height" : "100%",
		"background" : "#06ccb8"
	});
});

$(document).ready(function() {
	setTimeout(function() {
		$("#animated-transition").css("height", "0%");
		
		setTimeout(function() {
			$("#animated-transition").children("div").animate({
				"top" : "100%"
			}, 500);
		}, 500);
		
	}, 100);
});

window.addEventListener("pageshow", function (event) {
	var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
	
	if (historyTraversal) {
		window.location.reload();
	}
});

$(window).on('resize', function() {
	checkShouldContain();
});

function checkShouldContain() {
      var win = $(window);
      toggleContainedMenu((win.width() <= 1300));
}

function checkShoudlContainBasedOnScroll() {
	var pos = $(window).scrollTop();
	
	if (pos > 99) {
		toggleContainedMenu(true);
	} else {
		toggleContainedMenu(false);
		
		checkShouldContain();
	}
}

function showcaseImage(element) {
	$("#showcased-image").attr("src", $(element).attr("src"));
	$("#showcased-image").attr("alt", $(element).attr("alt"));
	$("#image-showcase").css("width", "100%");
	
	if ($("#image-description").length > 0)
		$("#image-description").html($(element).attr("alt"));
}

function hideShowcase(i) {
	$("#image-showcase").css("width", "0%");
	
	if ($("#image-description").length > 0)
		$("#image-description").html("");
}