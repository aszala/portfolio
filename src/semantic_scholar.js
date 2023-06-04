// citationCount,papers,papers.citationCount,papers.title

export function querySemanticScholar(fields) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.semanticscholar.org/graph/v1/author/2008198436?fields=${fields}`)
        .then(response => response.json()).then(data => {
            return resolve(data);
        }).catch(error => {
            console.log(error);
            return reject({"error": error});
        });
    });
    
}