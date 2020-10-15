let projectsReference = db.collection("projects");

let languages = [];
let tags = [];

$(function() {
	db.collection("data").doc("project_data").get().then(doc => {
		let data = doc.data();

		for (let i=0;i<data.categories.length;i++) {
			tags.push(data.categories[i]);
			$("#tags-filters").append("<p class='filter-object icon' onclick='onFilter(this);'>" + data.categories[i] + "</p>");
		}

		for (let i=0;i<data.languages.length;i++) {
			languages.push(data.languages[i]);
			$("#language-filters").append("<p class='filter-object icon' onclick='onFilter(this);'>" + data.languages[i] + "</p>");
		}

		getProjects("Coding");
	});
});

function onFilter(elm) {
	getProjects($(elm).html());
}

function getProjects(filter) {
	$(".active-filter").html("Active Filter: " + filter);
	if (filter === "Any") {
		projectsReference.get().then(snap => {
			displayProjects(snap);
		});
	} else {
		let array = "languages";

		if (tags.includes(filter)) {
			array = "categories";
		}

		projectsReference.where(array, "array-contains", filter).get().then(snap => {
			displayProjects(snap);
		});
	}
}

function displayProjects(snap) {
	$(".projects").html("");
	snap.forEach(doc => {
		let data = doc.data();
		let element = "<div class='project'><div class='project-header'><div class='title'>" + data.title + "</div></div>";

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

		element += "<div class='project-contents'><div class='projects-meta-data'><div class='project-tags'>" + tags.slice(0, -2) + "</div><div class='project-languages'>" + langs.slice(0, -2) + "</div></div><div class='project-description'>" + data.description + "</div></div></div>";

		$(".projects").append(element);
	});
}
