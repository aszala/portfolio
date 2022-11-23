<script>
import { getPublications } from '../Firebase';

let publications = "loading";

getPublications().then((data) => {

    publications = "";

    for (const [key, value] of Object.entries(data)) {
        const sents = value.abstract.split(".");

        const abs = `${sents[0]}.${sents[1]}.${sents[2]}.`;

        const publication = `
        <div class="publication">
            <img src="./images/${value.image_name}" alt="Figure 1 of ${value.title}">
            <div>
                <h2>${value.title}</h2>
                <p>${value.authors}</p>
                <p>${value.year} | ${value.conference}</p>
                <a class="button" href="${value.project_url}" target="self">Project Page</a> <a class="button" href="${value.url}" target="self">Preprint</a>
                <br><br>
                <div>
                    ${abs}
                </div>
            </div>
        </div>
        `;

        publications += publication;
    }
});

</script>

<section id="publications">
    <h1>Publications</h1>
    <p><b>Note:</b> * indicates equal contribution</p>
    <div id="publications-container">
        {@html publications}
    </div>
</section>

<style>
    #publications-container {
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    :global(.publication) {
        display: flex;
    }

    :global(.publication>img) {
        width: 300px;
        object-fit: contain;
    }

    :global(.publication > *) {
        padding: 50px;
    }

    :global(.publication > div > p) {
        font-size: 1.1em;
    }

    :global(.publication > div > div) {
        font-size: 1.2em;
    }

    :global(.publication > div > a) {
		text-decoration: underline;
		position: relative;
        font-size: 1.3em;
	}

    @media only screen and (max-width: 1025px) {
        :global(.publication) {
            flex-direction: column;
            text-align: center;
        }

        #publications-container {
            margin: auto;
        }

        :global(.publication>img) {
            width: 80%;
            margin: auto;
        }
    }
    
    @media only screen and (max-width: 1680px) {
        #publications {
            width: 95%;
            padding: 5px;
            margin: auto;
        }

        #publications-container {
            width: 100%;
        }

        :global(.publication > *) {
            padding: 20px;
        }
    }
</style>