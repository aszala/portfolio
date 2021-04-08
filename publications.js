let publicationsReference = db.collection("publications");

let languages = [];
let tags = [];

$(function() {
	db.collection("data").doc("publication_data").get().then(doc => {
		let data = doc.data();

		for (let i=0;i<data.years.length;i++) {
			tags.push(data.years[i]);
			$("#tags-filters").append(`<label class="checkbox-container">${data.years[i]}
				<input type="checkbox" class='filter-object icon' onclick='onFilter(this, "${data.years[i]}", "year");'>
				<span class="checkmark"></span></label>`);
		}

		getProjects("Publications");
	});
});

active_year_filters = []

function onFilter(elm, val, type) {
	if (elm.checked) {
		if (type === "year")
			active_year_filters.push(val);
	} else {
		if (type === "year") {
			let index = active_year_filters.indexOf(val);
			active_year_filters.splice(index, 1);
		}
	}

	getProjects();
}

function getProjects() {
	if (active_year_filters.length == 0) {
		$(".active-filter").html("Active Filters: None");
		publicationsReference.get().then(snap => {
			displayPublications(snap);
		});
	} else if (active_year_filters.length <= 10) {
		$(".active-filter").html("Active Filters: " + active_year_filters);
		if (active_year_filters.length == 0) {
			active_year_filters = [];
		}

		let query = publicationsReference.where("year", "==", active_year_filters[0]);

		for (var i=1;i<active_year_filters.length;i++) {
			query = query.where("year", "==", active_year_filters[i]);
		}

		query.get().then(snap => {
			displayPublications(snap);
		});
	}
}

function displayPublications(snap) {
	$(".publications").html("");
	snap.forEach(doc => {
		let data = doc.data();
		let element = `<div class='publication'><div class='publication-header'><div class='title'>${data.title}</div></div>`;

		element += `<div class='publication-contents'><div class='publications-meta-data'>
			<div class='publication-tags'>Publication Year: ${data.year}</div>
			<div class='project-url'>View on <a style="text-decoration:underline" href='${data.url}'>axriv</a></div></div>
			<br>
			<div class='project-description'>${data.abstract}</div></div></div>`;

		$(".publications").append(element);
	});
}
