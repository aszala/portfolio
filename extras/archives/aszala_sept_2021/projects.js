let projectsReference = db.collection("projects");

let languages = [];
let tags = [];

$(function() {
	db.collection("data").doc("project_data").get().then(doc => {
		let data = doc.data();

		for (let i=0;i<data.categories.length;i++) {
			tags.push(data.categories[i]);
			$("#tags-filters").append(`<label class="checkbox-container">${data.categories[i]}
				<input type="checkbox" class='filter-object icon' onclick='onFilter(this, "${data.categories[i]}", "cat");'>
				<span class="checkmark"></span></label>`);
		}

		for (let i=0;i<data.languages.length;i++) {
			languages.push(data.languages[i]);
			$("#language-filters").append(`<label class="checkbox-container">${data.languages[i]}
				<input type="checkbox" class='filter-object icon' onclick='onFilter(this, "${data.languages[i]}", "lang");''>
				<span class="checkmark"></span>`);
		}

		getProjects("Coding");
	});
});

active_cat_filters = []
active_lang_filters = []

function onFilter(elm, val, type) {
	if (elm.checked) {
		if (type === "cat")
			active_cat_filters.push(val);
		else if (type === "lang")
			active_lang_filters.push(val);
	} else {
		if (type === "cat") {
			let index = active_cat_filters.indexOf(val);
			active_cat_filters.splice(index, 1);
		} else if (type === "lang") {
			let index = active_lang_filters.indexOf(val);
			active_lang_filters.splice(index, 1);
		}
	}

	getProjects();
}

function getProjects() {
	if (active_cat_filters.length == 0 && active_lang_filters.length == 0) {
		$(".active-filter").html("Active Filters: None");
		projectsReference.get().then(snap => {
			displayProjects(snap);
		});
	} else if (active_cat_filters.length <= 10 && active_lang_filters.length <= 10) {
		$(".active-filter").html("Active Filters: " + active_cat_filters);
		if (active_cat_filters.length == 0) {
			active_cat_filters = [];
		} else if (active_lang_filters.length == 0) {
			active_lang_filters = [];
		}

		projectsReference.where("categories", "array-contains-any", active_cat_filters)
			//.where("languages", "array-contains-any", active_lang_filters)
			.get().then(snap => {
				displayProjects(snap);
		});
	}
}

function displayProjects(snap) {
	$(".projects").html("");
	snap.forEach(doc => {
		let data = doc.data();
		let element = `<div class='project'><div class='project-header'><div class='title'>${data.title}</div></div>`;

		let tags = "Tags: ";
		for (let i=0;i<data.categories.length;i++) {
			tags += data.categories[i] + ", ";
		}

		let langs = "";

		if (data.hasOwnProperty('languages')) {
			langs = "Languages: ";

			for (let i=0;i<data.languages.length;i++) {
				langs += data.languages[i] + ", ";
			}
		}

		element += `<div class='project-contents'><div class='projects-meta-data'><div class='project-tags'>
			${tags.slice(0, -2)}</div><div class='project-languages'>${langs.slice(0, -2)}</div></div>
			<div class='project-description'>${data.description}</div></div></div>`;

		$(".projects").append(element);
	});
}
