$(function() {
  $(".down").click(function() {
		$("html, body").animate({ scrollTop: ($('#chapter-mission').offset().top - 175) }, 500);
   });  
});

function hideCompliance() {
    $("#ada-compliance").animate({bottom: "-100%"}, 1000);
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