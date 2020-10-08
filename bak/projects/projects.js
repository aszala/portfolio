var codeExpand = false;
var tsaExpand = false;
var miscExpand = false;

$(function() {
	var publications = $("#publications").children(".section-content-container").children(".column-row-container").children(".column").length;
	var codingProjects = $("#code-projects").children(".section-content-container").children(".column-row-container").children(".column").length;
	var tsaProjects = $("#tsa-projects").children(".section-content-container").children(".column-row-container").children(".column").length;
	var modelingProjects = $("#3d-projects").children(".section-content-container").children(".column-row-container").children(".column").length;

	$("#publications-count").html(publications + "");
	$("#code-project-count").html(codingProjects + "");
	$("#tsa-project-count").html(tsaProjects + "");
	$("#model-project-count").html(modelingProjects + "");

	$(".column-row-container").css("max-height", "0");
	$("#publications").children(".section-content-container").children(".row-1").css("max-height", "1000px");
	$("#code-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");
	$("#tsa-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");
	$("#3d-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");

	$("#pub-expand").click(function() {
		codeExpand = !codeExpand;

		if (codeExpand) {
			$(this).html("shrink to see less");
			$("#publications").children(".section-content-container").children(".column-row-container").css("max-height", "1000px");
		} else {
			$(this).html("expand to see all");
			$("#publications").children(".section-content-container").children(".column-row-container").css("max-height", "0");
			$("#publications").children(".section-content-container").children(".row-1").css("max-height", "1000px");
		}
	});

	$("#code-expand").click(function() {
		codeExpand = !codeExpand;

		if (codeExpand) {
			$(this).html("shrink to see less");
			$("#code-projects").children(".section-content-container").children(".column-row-container").css("max-height", "1000px");
		} else {
			$(this).html("expand to see all");
			$("#code-projects").children(".section-content-container").children(".column-row-container").css("max-height", "0");
			$("#code-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");
		}
	});

	$("#tsa-expand").click(function() {
		tsaExpand = !tsaExpand;

		if (tsaExpand) {
			$(this).html("shrink to see less");
			$("#tsa-projects").children(".section-content-container").children(".column-row-container").css("max-height", "1000px");
		} else {
			$(this).html("expand to see all");
			$("#tsa-projects").children(".section-content-container").children(".column-row-container").css("max-height", "0");
			$("#tsa-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");
		}
	});

	$("#misc-expand").click(function() {
		miscExpand = !miscExpand;

		if (miscExpand) {
			$(this).html("shrink to see less");
			$("#3d-projects").children(".section-content-container").children(".column-row-container").css("max-height", "1000px");
		} else {
			$(this).html("expand to see all");
			$("#3d-projects").children(".section-content-container").children(".column-row-container").css("max-height", "0");
			$("#3d-projects").children(".section-content-container").children(".row-1").css("max-height", "1000px");
		}
	});
});
