const unsplashKey = "0tNQnwiqu7-f6GxEQvW8DBp3RdMXqYHvbZrHcI8VhRs";

let rawUserInput = localStorage.getItem("UserDestination") || "arizona";
let firstPass = rawUserInput.replace('"','');
let finalInput = firstPass.replace('"','');

let queryPart1 = finalInput;
let queryPart2 = "landscape";

let phoenixSkyBG = 
`https://api.unsplash.com/photos/random?client_id=
${unsplashKey}
&query=${queryPart1}+${queryPart2}`;

function phoenixSkyBGimgHQ(data) {
    let bgImg = data.urls.full;
    console.log(bgImg);
    
    document.body.style.background = "url('"+bgImg+"')";
    document.body.style.backgroundSize = "cover";       
};

fetch(phoenixSkyBG)
.then(res => {
    return res.json()
})
.then(data => {
    console.log("NO-LS: ", phoenixSkyBG);
    phoenixSkyBGimgHQ(data)
});

function runUnsplashAPI(userInput) {

}
