const openNavBarBtn = document.querySelector("#openNavBarBtn");
const closeNavBarBtn = document.querySelector("#closeNavBarBtn");
const navBarMenu = document.querySelector("#navBarMenu");

const unsplashKey = "0tNQnwiqu7-f6GxEQvW8DBp3RdMXqYHvbZrHcI8VhRs";
let queryPart1 = localStorage.getItem("destinationCITY") || "arizona";
let queryPart2 = "cityscape";

let phoenixSkyBG = 
`https://api.unsplash.com/photos/random?client_id=
${unsplashKey}
&query=${queryPart1}+${queryPart2}`;

// UNSPLASH API
function runUnsplashAPI() {    
fetch(phoenixSkyBG)
.then(res => {
    return res.json()
})
.then(data => {
    console.log("IMG PATH: ", phoenixSkyBG);
    setBackground(data)
});

function setBackground(data) {
    let bgImg = data.urls.full;
    console.log(bgImg);
    
    document.body.style.background = "url('"+bgImg+"')";
    document.body.style.backgroundSize = "cover";       
};
}



// NAV BAR BUTTON LISTENERS 
openNavBarBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openNavBarBtn.classList.add("hidden");
    navBarMenu.classList.remove("hidden");
  });
  
  closeNavBarBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navBarMenu.classList.add("hidden");
    openNavBarBtn.classList.remove("hidden");
  });
