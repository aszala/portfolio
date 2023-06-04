<script>
import { getPublications } from '../firebase';
import { querySemanticScholar } from '../semantic_scholar';

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
                <h2 class='publication-header'>${value.title}</h2>
                <p>${value.authors}</p>
                <p>${value.year} | ${value.conference}</p>
                <a class="button" href="${value.project_url}" target="_blank">Project Page</a> <a class="button" href="${value.url}" target="_blank">Preprint</a>
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

// let citationCount = "...";
// let hIndex = "...";

// querySemanticScholar("citationCount").then(data => {
//    citationCount = data.citationCount;
//     // hIndex = data.hIndex;
// });


</script>

<section id="publications">
    <h1>Publications</h1>

        <!-- <div class="metadata-content">
            <p>h-index</p>
            <div class="circle">
                {hIndex}
            </div>
        </div> -->
    <!-- <div id="metadata-container">
        <div class="metadata-content">
            <p>Research Citations</p>
            <div class="circle">
                {citationCount}
            </div>
        </div>
    </div> -->

    <div>* indicates equal contribution</div>
    <div id="publications-container">
        {@html publications}
    </div>
</section>

<style>

    #metadata-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: auto;
        max-width: 500px;
    }

    .metadata-content {
        max-width: 65px;
        margin-top: -65px;
    }
    .metadata-content>p {
        margin: auto;
        width: 100%;
        text-align: center;
    }
    .circle {
        width: 100%;
        height: 65px;
        text-align: center;
        border-radius: 50%;
        border: solid 0px var(--accent-color);
        font-size: 2em;
    }

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

    :global(.publication:first-of-type > *) {
        padding-top: 0;
    }

    :global(.publication-header:first-of-type) {
        margin-top: 0 !important;
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

        :global(.publication:first-of-type > *) {
            padding-top: 0;
        }
    }
</style>