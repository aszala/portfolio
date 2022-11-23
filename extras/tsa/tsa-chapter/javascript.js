$(function() {
	$(".down").click(function() {
		$("html, body").animate({ scrollTop: ($('#tsa-motto-creed').offset().top - 175) }, 500);
	});
	
	checkShowArrows();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

$(window).on('resize', function() {
	checkShowArrows();
});

function checkShowArrows() {
	if ($("#officer-list").hasHorizontalScrollBar()) {
		$("#scrollOfficersLeft").css("visibility", "visible");
		$("#scrollOfficersRight").css("visibility", "visible");
		
		$("#hover-to-see-officers-color").css("visiblity","hidden");
	} else {
		$("#scrollOfficersLeft").css("visibility", "hidden");
		$("#scrollOfficersRight").css("visibility", "hidden");
		
		$("#hover-to-see-officers-color").css("visiblity","visible");
	}
}


function scrollOfficersLeft() {
	$("#officer-list").animate({ scrollLeft :'-=175px'}, 200);
}

function scrollOfficersRight() {
	$("#officer-list").animate({ scrollLeft :'+=175px'}, 200);
}

var elementsToScroll = [];

$(function() {
	var packs = document.getElementsByClassName("section");
	var imgs = document.getElementsByTagName("img");
	
	for (var i=0;i<packs.length;i++) {
		elementsToScroll.push(packs[i]);
	}
	
	for (var i=0;i<imgs.length;i++) {
	  if ($(imgs[i]).attr("id") != "showcased-image") {
		elementsToScroll.push(imgs[i]);
	  }
	}
	
	checkAnimation();
})

$(window).scroll(function(){
	checkAnimation();
});

function checkAnimation() {
	for (var i=0;i<elementsToScroll.length;i++) {
		if (isScrolledIntoView(elementsToScroll[i])) {
			$(elementsToScroll[i]).css({
				"transform" : "translateY(0px)",
				"opacity" : "1"
			});
		}
	}
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	
	return (elemTop <= docViewBottom);
}

$.fn.hasHorizontalScrollBar = function () {
	return this[0].clientWidth < this[0].scrollWidth;
}