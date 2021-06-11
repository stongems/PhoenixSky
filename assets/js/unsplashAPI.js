const unsplashKey = "0tNQnwiqu7-f6GxEQvW8DBp3RdMXqYHvbZrHcI8VhRs";

let queryPart1 = "phoenix";
let queryPart2 = "sky";
let queryPart3 = "landscape";


let phoenixSkyBG = 
`https://api.unsplash.com/photos/random?client_id=
${unsplashKey}
&query=${queryPart1}+${queryPart2}+${queryPart3}`;



fetch(phoenixSkyBG)
.then(data => console.log(data))
.then(document.body.style.backgroundImage = phoenixSkyBG);