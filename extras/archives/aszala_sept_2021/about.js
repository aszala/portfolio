let sectionContents = [ "", "", "", "", "", "", "" ];

$(function() {
	db.collection("data").doc("resume").get().then((doc) => {
		let data = doc.data();

		let education = data.education;
		let educationList = "";

		for (let i=0;i<education.length;i++) {
			let school = education[i].split('|');

			educationList += makePart(school[0], `<span class="resume-part-content-highlight">${school[1]}: </span>${school[2]}`);
		}

		sectionContents[0] = makeSection("Skills", `<ul style='height:500px;'><li>${data.skills.join("</li><li>")}</li></ul>`);
		sectionContents[1] = makeSection("Education", educationList);
		sectionContents[6] = makeSection("Coursework", `<ul><li>${data.coursework.join("</li><li>")}</li></ul>`);

		sync();
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

	db.collection("publications").orderBy("year", "desc").get().then(snap => {
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();

			finalContent += makePart(data.title, `<span class="resume-part-content-highlight">Publication Year: </span>${data.year}<br>
												<span class="resume-part-content-highlight">View on
													<a style="text-decoration:underline;" href='${data.url}'>arxiv</a></span>`);
		});

		sectionContents[3] = makeSection("Publications", finalContent);

		sync();
	});

	db.collection("certifications").orderBy("rank").get().then((snap) => {
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();
			let parts = data.provider.split(": ");

			finalContent += makePart(data.title, `<span class="resume-part-content-highlight">${parts[0]}: </span>${parts[1]}`);
		});

		sectionContents[4] = makeSection("Certifications", finalContent);

		sync();
	});

	db.collection("awards").orderBy("rank").get().then((snap) => {
		let finalContent = "";

		snap.forEach(doc => {
			let data = doc.data();

			if (doc.id === "tsa") {

				let content = `<ul>
									<li>National Awards:</li>
									<ul><li>${data.national.join("</li><li>")}</li></ul>
									<li>State Awards:</li>
									<ul><li>${data.state.join("</li><li>")}</li></ul>
									<li>Regional Robotics Awards:</li>
									<ul><li>${data.robotics.join("</li><li>")}</li></ul>
								</ul>`

				finalContent += makePart("Technology Student Association (TSA): ", content);
			} else {
				finalContent += makePart(doc.id, `<ul><li>${data.awards.join("</li><li>")}</li></ul>`);
			}
		});

		sectionContents[5] = makeSection("Awards", finalContent);

		sync();
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

	sectionContents = [];

	$("#resume-content").append(final);
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
		<div class="resume-section">
			<div class="resume-section-container">
				<div class="section-title">
					${title}
					<div class="orange-line-thin-long"></div>
				</div>
				<div class="section-content">
					${content}
				</div>
			</div>
		</div>
	`;

	return section;
}
