var e;

var showNavBar = false;

var isMobile = false;

$(function() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
	    isMobile = true;
	}
});

$(window).scroll(function() {
	checkShouldContainBasedOnScroll();
});

$(window).on('resize', function() {
	checkShouldContain();
});

$(function() {
	checkShouldContain();
	checkShouldContainBasedOnScroll();

	$(".underline-container").hover(function() {
		$(this).children(".underline").css("width", "100%");
	}, function() {
		$(this).children(".underline").css("width", "0%");
	});

	$(".button").hover(function() {
		$(this).css({"color" : "rgb(0, 150, 150)", "background-color" : "#272727"});
	}, function() {
		$(this).css({"color" : "#272727", "background-color" : "rgba(0, 0, 0, 0)"});
	});

	if (isMobile) {
		$(".image-overlay").children(".image-overlay-content").children(".button").css("transform", "");
		$(".image-overlay").children(".image-overlay-content").children(".project-title").css({"transform" : "", "opacity" : "1"});
		$(".image-overlay").css("background-color", "rgba(0, 0, 0, 0.6)");
	} else {
		$(".image-overlay").children(".image-overlay-content").children(".button").css("transform", "translateY(60px)");
		$(".image-overlay").children(".image-overlay-content").children(".project-title").css("transform", "translateY(-60px)");

		$(".image-overlay").hover(function() {
			$(this).children(".image-overlay-content").children(".button").css("transform", "");
			$(this).children(".image-overlay-content").children(".project-title").css({"transform" : "", "opacity" : "1"});
			$(this).css("background-color", "rgba(0, 0, 0, 0.6)");
		}, function() {
			$(this).children(".image-overlay-content").children(".button").css("transform", "translateY(60px)");
			$(this).children(".image-overlay-content").children(".project-title").css({"transform" : "translateY(-60px)", "opacity" : "0"});
			$(this).css("background", "");
		});
	}

	$(".image-overlay-content").children(".button").hover(function() {
		$(this).css({"color" : "rgb(0, 150, 150)", "background-color" : "white"});
	}, function() {
		$(this).css({"color" : "white", "background-color" : "rgba(0, 0, 0, 0)"});
	});

	$(".column-row-container").scrollLeft(($(".column").width()*3 - $(".column-row-container").width())/2 + 65);

	$("#menu-container").click(function() {
		toggleNavDropDown();
	});

	$("#page-cover").animate({
		"width" : "0"
	}, function() {
		$("#page-cover").css("left", "100%");
	});
});

function toggleNavDropDown() {
	showNavBar = !showNavBar;

	if (showNavBar) {
		$("#menu-bars").css("transform", "translateY(3px)");
		$(".menu-bar.1").css("transform", "rotateZ(-45deg) translateX(-6px) translateY(5px)");
		$(".menu-bar.2").css("transform", "rotateZ(45deg)");
		$(".menu-bar.3").css("transform", "scale(0.001)");

		$("#navbar").css({"color" : "black", "background" : "white"});
		$("#name").children("img").css("filter", "invert(100%)");

		$(".menu-bar.1").css("background-color", "red");
		$(".menu-bar.2").css("background-color", "red");

		$("#navbar-dropdown").css("height", $(window).height() - 67 + "px");
	} else {
		$("#menu-bars").css("transform", "");
		$(".menu-bar.1").css("transform", "");
		$(".menu-bar.2").css("transform", "");
		$(".menu-bar.3").css("transform", "");

		$(".menu-bar.1").css("background-color", "black");
		$(".menu-bar.2").css("background-color", "black");

		$("#navbar-dropdown").css("height", "0%");

		checkShouldContainBasedOnScroll();
	}
}

function toggleContainedMenu(show) {
	if (show) {
		$("#menu-items").css({"width" : "0%"});
		$("#menu-button-container").css({"width" : "100%"});
	} else {
		$("#menu-items").css({"width" : "100%"});
		$("#menu-button-container").css({"width" : "0%"});

		if (showNavBar) {
			toggleNavDropDown();
		}
	}
}

function checkShouldContain() {
      var win = $(window);
      toggleContainedMenu((win.width() <= 1290));
}

function checkShouldContainBasedOnScroll() {
	var pos = $(window).scrollTop();

	if (pos > $("#header").scrollTop() + $("#header").height() - $("#navbar").height()) {
		toggleContainedMenu(true);

		$("#navbar").css({"color" : "black", "background" : "white", "box-shadow" : "0px 9px 14px -6px rgba(0,0,0,0.25)"});
		$("#name").children("img").css("filter", "invert(100%)");
		$(".menu-bar").css("background-color", "black");
		$("#navbar-dropdown").css("border-bottom", "solid black 1px");
	} else {
		toggleContainedMenu(false);

		checkShouldContain();

		$("#navbar").css({"color" : "white", "background" : "transparent", "box-shadow" : ""});
		$("#name").children("img").css("filter", "invert(0%)");
		$(".menu-bar").css("background-color", "white");
		$("#navbar-dropdown").css("border-bottom", "solid black 0px");
	}
}

function openLink(href) {
	if (href.indexOf(".com/") != -1 || href.indexOf(".pdf") != -1) {
		window.open(href);
	} else {
		$("#page-cover").css("width", "100%");

		$("#page-cover").animate({
			"left" : "0"
		}, function() {
			window.location.href = href;
		});
	}
}
