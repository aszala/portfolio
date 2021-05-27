var dropDowns;
var dropDownsText;

$(function() {
	dropDowns = document.getElementsByClassName("drop-down");
	dropDownsText = document.getElementsByClassName("drop-down-text");
	
	$('.drop-down').unbind('click').click(function() {
	    click($(this).attr("index"));
	});
});

function click(i) {
	if ($(dropDownsText[i]).height() > 0) {
		collapse(i);
	} else {
		expand(i);
	}
}

function expand(i) {
	$(dropDowns[i]).children("i").css("transform", "rotate(-135deg) translateY(75%)");
	$(dropDownsText[i]).css("height", "500px");
}

function collapse(i) {
	$(dropDowns[i]).children("i").css("transform", "rotate(45deg) translateY(-75%)");
	$(dropDownsText[i]).css("height", "0px");
}