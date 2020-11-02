$(function() {
	db.collection("data").doc("resume").get().then((doc) => {
		let data = doc.data();

		let skills = data.skills;
		let education = data.education;

		let skillsList = "";

		for (let i=0;i<skills.length;i++) {
			skillsList += `<li>${skills[i]}</li>`;
		}

		let skillsSection = `
			<div class="resume-section">
				<div class="resume-section-container">
					<div class="section-title">
						Skills
						<div class="orange-line-thin-long"></div>
					</div>
					<div class="section-content">
						<ul>${skillsList}</ul>
					</div>
				</div>
			</div>
		`;



		$("#resume-content").append(skillsSection);
	});
});
