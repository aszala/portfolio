<script>
import { getExperiences } from '../Firebase';

let experiences = "loading";

getExperiences().then((data) => {
    experiences = ""

    for (const [key, value] of Object.entries(data)) {
        let main = "";

        if (value.rank < 1) {
            main = "main";
        }

        const experience = `
            <div class="experience">
                <div class="timeline-container">
                    <div class="timeline-bar"></div>
                    <div class="timeline-dot ${main}"></div>
                    <div class="timeline-bar"></div>
                </div>
                <div class="experience-content">
                    <h2>${value.title}</h2>
                    <hr>
                    <h3>${value.location}</h3>
                    <p>${value.time}</p>
                </div>
            </div>
        `;

        experiences += experience;
    }

});


</script>

<section id="experience">
    <h1>Experience</h1>
    <div id="experience-container">
        {@html experiences}
    </div>
</section>

<style>

    #experience-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    :global(.experience) {
        display: flex;
        color: var(--link-color);
        position: relative;
        left: 25%;
        width: 100%;
        /* transform: translateX(-50%); */
    }

    :global(.experience>.timeline-container) {
        width: 20px;
        display: flex;
        flex-direction: column;
    }

    :global(.timeline-bar) {
        width: 5px;
        margin: auto;
        height: 50%;
        background: var(--accent-color);
    }

    :global(.timeline-dot) {
        width: 15px;
        height:15px;
        margin: auto;
        background: transparent;
        border: solid 1px var(--accent-color);
        border-radius: 50%;
    }

    :global(.timeline-dot.main) {
        background: var(--accent-color);
    }

    :global(.experience-content) {
        border-radius: 10px;
        min-width: 500px;
        min-height: 100px;
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3);
        -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3);
        margin-left: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 25px;
    }

    :global(.experience-content>h2) {
        font-size: 1.8em;
    }

    :global(.experience-content>h3) {
        font-size: 1.5em;
    }

    :global(.experience-content>p) {
        font-size: 1.3em;
    }

    :global(.experience-content>hr) {
        width: 20%;
        position: relative;
        left: -40%;
    }


    @media only screen and (max-width: 970px) {
        :global(.experience) {
            left: 5%;
        }
    }
    
    @media only screen and (max-width: 780px) {
        :global(.experience-content) {
            width: 50%;
            min-width: 0;
        }
    }

    @media only screen and (max-width: 450px) {
        #experience {
            width: 100%;
            padding: 0;
        }
    }
</style>