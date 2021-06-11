const clearHome = document.querySelector("#clearHome");
const clearHome2 = document.querySelector("#clearHome2");

let homeCity = document.querySelector("#homeCity");
let homeState = document.querySelector("#homeState");


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
