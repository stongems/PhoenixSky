const openNavBarBtn = document.querySelector("#openNavBarBtn");
const closeNavBarBtn = document.querySelector("#closeNavBarBtn");
const navBarMenu = document.querySelector("#navBarMenu");
const p1SubBtn = document.querySelector("#p1SubBtn"); 
const clearHome = document.querySelector("#clearHome");
const clearHome2 = document.querySelector("#clearHome2");

let homeCity = document.querySelector("#homeCity");
let homeState = document.querySelector("#homeState");

let phoenixSkyBG = `https://api.unsplash.com/photos/random?client_id=0tNQnwiqu7-f6GxEQvW8DBp3RdMXqYHvbZrHcI8VhRs&query=phoenix+sky`;

fetch(phoenixSkyBG)
.then(data => console.log(data))
.then(document.body.style.backgroundImage = phoenixSkyBG);

//we should talk about if this is really nessessary
function enterHomeInfo() {
  //code that uses stored information to do search for Home location images
  //code that hides front page assets and shows 2nd page assets
}

p1SubBtn.addEventListener("click", function (e) 
{
e.preventDefault();
if (homeCity.value == "" || homeState.value == "no") 
{
console.log("I cant do that Dave");
} 
else if (homeCity.value !== "" && homeState.value !== "no") 
{
localStorage.setItem("HOMEcity", JSON.stringify(homeCity.value));
localStorage.setItem("HOMEstate", JSON.stringify(homeState.value));
enterHomeInfo();
};
  
});

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

clearHome2.addEventListener
(
"click", function (e) 
{
localStorage.setItem("HOMEcity", "");
localStorage.setItem("HOMEstate", "");
console.log();
window.location.reload();
}
);
