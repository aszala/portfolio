$(window).on('resize', function() {
	console.log($(window).width());
});

function showPopup(txt) {
    $("#text-modal").css("top", "0%");
    
    var t = "";
    
    if (txt == undefined) {
        t = "Tickets Sold Out. Please try again for a later date.";
    } else if (txt == 1) {
        t = "This item is quite popular and has sold out. Sorry for the inconvience."
    } else if (txt == 2) {
        t = "To listen to this album you must first purchase it. All albums are currently sold out right now. Sorry for the inconvience.";
    }
    
    $("#popup-text").html("" + t);
}

function hidePopup() {
    $("#text-modal").css("top", "-100%");
}

function showReturnPopup() {
    $("#return-modal").css("top", "0%");
}

function hideReturnPopup() {
    $("#return-modal").css("top", "-100%");
}

function scrollToId(e) {
    $('html, body').animate({
        scrollTop: $("#" + e).offset().top - 100
    }, 500, 'linear');
}

var elementsToScroll = [];

$(function() {
    var imgs = document.getElementsByTagName("img");
    
    for (var i=0;i<imgs.length;i++) {
    	elementsToScroll.push(imgs[i]);
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