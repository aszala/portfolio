<script>
import { getEducation } from '../firebase';

let educations = "loading";

getEducation().then((data) => {
    educations = "";

    for (const [key, value] of Object.entries(data)) {
        const education = `
            <div class="education">
                <p><i class='fas fa-graduation-cap'></i> ${value.degree}, ${value.time}</p>
                <div>${value.location}</div>
            </div>
        `;

        educations += education;
    }
});

</script>

<section id="education">
    <h1>Education</h1>
    <div id="education-container">
        {@html educations}
    </div>
</section>

<style>

    :global(.education) {
        margin-bottom: 20px;
    }

    :global(.education>p) {
       font-size: 1.3em;
    }

    :global(.education>div) {
       font-size: 1.1em;
       color: var(--link-color);
    }

</style>