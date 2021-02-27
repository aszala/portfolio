var infoPanels;

$(function() {
	particlesJS.load('particles-js', 'particles.json', function() {
	});
	
	infoPanels = document.getElementsByClassName("teacher-background-info-panel");
   
   $(".down").click(function() {
		$("html, body").animate({ scrollTop: ($('#classes-modules').offset().top - 100) }, 500);
   });
});

function teacherHover(element, infoID) {
	
	if ($(window).width() > 1163) {
		$(element).css({
			"transform" : "rotateZ(0deg)",
			"z-index" : "19",
			"width" : "500px"
		});
		
		$(element).children("img").css({
			"top" : "20%",
			"transform" : "rotateZ(0deg) translateX(-50%)",
			"filter" : "grayscale(0%)" 
		});
		
		$(element).children("div").css({
			"top" : "50px",
			"transform" : "rotateZ(0deg)"
		});
		
		infoPanels[infoID].style.height = "100%";
		infoPanels[infoID].style.width = "80%";
		
		$("#teacher-background-info").css("height", "400px");
	} else if ($(window).width() > 951) {
		$(element).css({
			"transform" : "rotateZ(-90deg)",
			"z-index" : "19",
			"height" : "300px"
		});
		
		$(element).children("img").css({
			"top" : "20%",
			"transform" : "rotateZ(0deg) translateX(-50%)",
			"filter" : "grayscale(0%)" 
		});
		
		$("#teacher-background-info").css("height", "500px");
		
		infoPanels[infoID].style.height = "500px";
		infoPanels[infoID].style.width = "500px";
		
	}
}

function teacherHoverExit(element, infoID) {
	
	if ($(window).width() > 1163) {
		$(element).css({
			"transform" : "rotateZ(-45deg)",
			"z-index" : "1",
			"width" : "200px"
		});
		
		$(element).children("img").css({
			"top" : "50%",
			"transform" : "rotateZ(45deg) translateX(-75%)",
			"filter" : "grayscale(100%)" 
		});
		
		$(element).children("div").css({
			"top" : "20px",
			"left" : "130px",
			"transform" : "rotateZ(90deg)"
		});
		
		infoPanels[infoID].style.height = "0%";
		infoPanels[infoID].style.width = "0%";
		
		$("#teacher-background-info").css("height", "0px");
	} else if ($(window).width() > 951) {
		$(element).css({
			"transform" : "rotateZ(-135deg)",
			"z-index" : "1",
			"height" : "200px"
		});
		
		$(element).children("img").css({
			"top" : "50%",
			"transform" : "rotateZ(45deg) translateX(-75%)",
			"filter" : "grayscale(100%)" 
		});
		
		
		$("#teacher-background-info").css("height", "0px");
		
		infoPanels[infoID].style.height = "0%";
		infoPanels[infoID].style.width = "0%";
	}
}

var activeBox = -1;
var oldElement;

function teacherClick(element, infoID) {
	if ($(window).width() <= 951 || navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
		if (activeBox != -1) {
			infoPanels[activeBox].style.height = "0%";
			infoPanels[activeBox].style.width = "0%";
		}
		
		if (oldElement) {
			$(oldElement).css({
				"z-index" : "1"
			});
			
			$(oldElement).children("img").css({
				"filter" : "grayscale(100%)" 
			});
		}
		
		activeBox = infoID;
		oldElement =element;
		
		$(element).css({
			"z-index" : "19"
		});
		
		$(element).children("img").css({
			"filter" : "grayscale(0%)" 
		});
		
		$("#teacher-background-info").css("height", "800px");
			
		infoPanels[infoID].style.height = "100%";
		infoPanels[infoID].style.width = "100%";
	}
}

var oldWidth;

$(function() {
   oldWidth = $(window).width();
});

var refreshPoints = [ 1163, 951 ];

$(window).on('resize', function() {
	var width = $(window).width();
	
	for (var i=0;i<refreshPoints.length;i++) {
		if ((oldWidth > refreshPoints[i] && width <= refreshPoints[i]) || (oldWidth < refreshPoints[i] && width >= refreshPoints[i])) {
			window.location.href=window.location.href;
		}
	}
	
	oldWidth = width;
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

function showModal(p) {
    $(".modal").css("top", "0%");
    
    if (p == 1) {
    	$("#modal-h2").html("Mr. Curran teaches Game Art Design and Digital Design and Animation at Panther Creek. His students work on designing artwork for games, as well as working on game animation. He enjoys seeing his students’ creativity on display in their creations, and looks forward to working with brilliant minds on projects and activities. ");
    } else if (p == 2) {
    	$("#modal-h2").html("Mrs. Chudasama teaches AP Computer Science Principles at Panther Creek. Her students work on a variety of projects such as building games from the Scratch programming language, creating JavaScript programs, building web applications, and bringing their ideas to life. She is amazed by the creativity of her students, and how they can think of some of the coolest ideas. ");
    } else {
    	$("#modal-h2").html("Dr. Busby teaches Technology, Engineering, and Design. His students work on using technology to build objects such as chairs, pens, bottle rockets, and mousetrap cars. He also teaches his students the foundations of engineering, and how engineering is used for technological development and design. Finally, students in his class also use their skills to create designs for children’s books that kids can read, as well as CAD designs for larger engineering projects. ");
    }
}

function hideModal() {
    $(".modal").css("top", "-100%");
}