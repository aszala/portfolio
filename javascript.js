let sectionContents = [ "", "", "", "", "", "", "" ];

$(function() {
	db.collection("data").doc("resume").get().then((doc) => {
		let data = doc.data();

		let education = data.education;
		let educationList = "";

		for (let i=0;i<education.length;i++) {
			let school = education[i].split('|');

			educationList += makePart(school[0], `<span class="resume-part-content-highlight">${school[1]}: </span>${school[2]}<br><br>`);
		}

		cols = Math.round(data.skills.length / 10);

		sectionContents[0] = makeSection("Skills", `<ul style="columns: ${cols}"><li>${data.skills.join("</li><li>")}</li></ul>`);
		sectionContents[1] = makeSection("Education", educationList);

		cols = Math.round(data.coursework.length / 5);
		sectionContents[4] = makeSection("Coursework", `<ul style="columns: ${cols}"><li>${data.coursework.join("</li><li>")}</li></ul>`);

		sync();
	});

	$("#year-count").html((parseInt(new Date().getFullYear()) - 2015) + "+");

	db.collection("publications").orderBy("year", "desc").get().then(snap => {
		let total_publications = 0;
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();

			finalContent += makePart(data.title, `${data.authors}<br>${data.conference}<br><br>
												<span class="resume-part-content-highlight">View on
													<a style="text-decoration:underline;color:white !important;" href='${data.url}'>Arxiv</a></span>,
													<a style="text-decoration:underline;color:white !important;" href='${data.project_page}'>Project Page</a></span>
													<br>
													<div class='project-description'>${data.abstract}</div><br><br><br>`);


			total_publications += 1;
		});

		sectionContents[6] = makeSection("<a id='publications'></a>Publications", finalContent);

		sync();

		$("#publication-count").html(total_publications);
	});

	db.collection("experience").orderBy("rank").get().then((snap) => {
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();

			let roles = data.roles;

			for (let i=0;i<roles.length;i++) {
				let parts = roles[i].split(": ");
				roles[i] = `<span class="resume-part-content-highlight">${parts[0]}: </span>${parts[1]}`;
			}

			roles = roles.join("<br>");

			finalContent += makePart(data.title, `${roles}`);
		});

		sectionContents[2] = makeSection("Experience", finalContent);

		sync();
	});

	db.collection("certifications").orderBy("rank").get().then((snap) => {
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();
			let parts = data.provider.split(": ");

			finalContent += makePart(data.title, `<span class="resume-part-content-highlight">${parts[0]}: </span>${parts[1]}`);
		});

		sectionContents[3] = makeSection("Certifications", finalContent);

		sync();
	});

	db.collection("awards").orderBy("rank").get().then((snap) => {
		let total_awards = 0;
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();

			if (doc.id === "tsa") {
				total_awards += data.national.length;
				total_awards += data.state.length;
				total_awards += data.robotics.length;


				let cols = Math.round(data.national.length / 5);
				let cols2 = Math.round(data.state.length / 5);
				let cols3 = Math.round(data.robotics.length / 1);

				let content = `<ul style="list-style-type: none;">
									<li>National Awards:</li>
									<br>
									<ul style="columns: ${cols};list-style-type: none;"><li>${data.national.join("</li><li>")}</li></ul>
									<br><br>
									<li>State Awards:</li>
									<br>
									<ul style="columns: ${cols2};list-style-type: none;"><li>${data.state.join("</li><li>")}</li></ul>
									<br><br>
									<li>Regional Robotics Awards:</li>
									<br>
									<ul style="columns: ${cols3};list-style-type: none;"><li>${data.robotics.join("</li><li>")}</li></ul>
								</ul>`

				finalContent += makePart("Technology Student Association (TSA): ", content);
			} else {
				let cols = Math.round(data.awards.length / 5);

				let x = [];

				for (let i=0;i<data.awards.length;i++) {
					let lastIndex = data.awards[i].lastIndexOf(" ");
					x.push(data.awards[i].substring(0, lastIndex));
				}

				finalContent += makePart(doc.id, `<ul style="columns: ${cols};list-style-type: none;"><li>${x.join("</li><li>")}</li></ul>`);
				total_awards += data.awards.length;
			}
		});


		$("#award-count").html(total_awards);

		sectionContents[5] = makeSection("<a id='awards'></a>Awards", finalContent);

		sync();
	});

	db.collection("projects").get().then(snap => {
		let total_projects = 0;

		snap.forEach(doc => {
			let data = doc.data();

			total_projects += 1;
		});

		$("#project-count").html(total_projects);
	});
});


function sync() {
	let final = "";

	for (let i=0;i<sectionContents.length;i++) {
		if (sectionContents[i].length <= 1) {
			final = "";
			return;
		} else {
			final += sectionContents[i];
		}
	}

	sectionContents = ["", "", "", "", "", "", "" ];

	$("#resume-content-holder").append(final);
}


function makePart(title, content) {
	let part = `<div class='resume-part'>
					<div class="resume-part-container">
						<h3 class="resume-part-header">${title}</h3>
						<div class="resume-part-content">${content}</div>
					</div>
				</div>`

	return part;
}

function makeSection(title, content) {
	let section = `
		<div class="resume-section section">
			<div class="resume-section-container section flex-container-column">
				<div class="section-sub-title">
					${title}
					<hr>
				</div>
				<div class="resume-section-content">
					${content}
				</div>
			</div>
		</div>
	`;

	return section;
}


function expand(id) {
	$('#more-' + id).css('display', 'inline');
	$('#dots-' + id).css('display', 'none');
	$('#anti-dots-' + id).css('display', 'inline');
}

function collapse(id) {
	$('#more-' + id).css('display', 'none');
	$('#dots-' + id).css('display', 'inline');
	$('#anti-dots-' + id).css('display', 'none');
}
