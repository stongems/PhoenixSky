const flightSection = document.getElementById("flightSection");
const price = document.createElement("h3");
const carrier = document.createElement("p");
const flightNumber = document.createElement("p");
const departTime = document.createElement("p");
const arrivalTime = document.createElement("p");
const userAirportIATA = document.createElement("p");
const destAirportIATA = document.createElement("p");
const flightCard = document.createElement("div");
const price2 = document.createElement("h3");
const carrier2 = document.createElement("p");
const flightNumber2 = document.createElement("p");
const departTime2 = document.createElement("p");
const arrivalTime2 = document.createElement("p");
const userAirportIATA2 = document.createElement("p");
const destAirportIATA2 = document.createElement("p");
const flightCard2 = document.createElement("div");
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
    // BG style here, fade in and out around here.
    document.body.style.background = "url('"+bgImg+"')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.objectFit = "scale-down";
    document.body.style.objectFit = "contain";

};
}
//create weather card
function createWeatherCardUser(){
const weatherSection = document.getElementById("weatherSection");
weatherSection.classList.remove("hidden")
const weatherCard = document.createElement("div");
weatherCard.setAttribute("id","userWeatherCardInfo")
const city = document.createElement("h3")
const temp = document.createElement("p");
const weather = document.createElement("p")
const feels =document.createElement("p");
const humid = document.createElement("p");
const icon = document.createElement("img");
weatherSection.append(weatherCard)
weatherCard.append(city)
weatherCard.append(temp)
weatherCard.append(weather)
weatherCard.append(feels)
weatherCard.append(humid)
weatherCard.append(icon)
city.textContent = localStorage.getItem("userCITY")
temp.textContent = localStorage.getItem("userTEMPERATURE")
weather.textContent = localStorage.getItem("userWEATHER")
feels.textContent = localStorage.getItem("userFEELSLIKE")
humid.textContent = localStorage.getItem("userHUMIDITY")
let weatherIcon = `http://openweathermap.org/img/w/${localStorage.getItem("userICON")}.png`;
icon.src = weatherIcon
}

function createWeatherCardDest(){
    const weatherSection = document.getElementById("weatherSection");
    weatherSection.classList.remove("hidden");
    const weatherCard = document.createElement("div");
    weatherCard.setAttribute("id","destWeatherCardInfo");
    const city = document.createElement("h3");
    const temp = document.createElement("p");
    const weather = document.createElement("p");
    const feels =document.createElement("p");
    const humid = document.createElement("p");
    const icon = document.createElement("img");
    weatherSection.append(weatherCard);
    weatherCard.append(city);
    weatherCard.append(temp);
    weatherCard.append(weather);
    weatherCard.append(feels);
    weatherCard.append(humid);
    weatherCard.append(icon);
    city.textContent = localStorage.getItem("destinationCITY");
    temp.textContent = localStorage.getItem("destinationTEMPERATURE");
    weather.textContent = localStorage.getItem("destinationWEATHER");
    feels.textContent = localStorage.getItem("destinationFEELSLIKE");
    humid.textContent = localStorage.getItem("destinationHUMIDITY");
    let weatherIcon = `http://openweathermap.org/img/w/${localStorage.getItem("userICON")}.png`;
    icon.src = weatherIcon
}

function removeFlightInfo(){
    let info = document.getElementById("flightCardInfo");
    info.parentNode.removeChild(info);
}
function createUserFlight() {
    flightSection.classList.remove("hidden");
    flightCard.setAttribute("id","flightCardInfo");
    price.textContent="$"+localStorage.getItem("flightPRICE")
    carrier.textContent=localStorage.getItem("flightCARRIER")
    flightNumber.textContent=localStorage.getItem("flightNUMBER")
    departTime.textContent="Departs: "+localStorage.getItem("flightDEPARTTIME")
    arrivalTime.textContent="Arrives: "+localStorage.getItem("flightARRIVALTIME")
    userAirportIATA.textContent="Departs from: "+localStorage.getItem("flightUSERAITA")
    destAirportIATA.textContent="Arrives at: "+localStorage.getItem("flightDESTAITA")
    flightSection.append(flightCard)
    flightCard.append(price)
    flightCard.append(carrier)
    flightCard.append(flightNumber)
    flightCard.append(departTime)
    flightCard.append(arrivalTime)
    flightCard.append(userAirportIATA)
    flightCard.append(destAirportIATA)
    createUserFlight2()
}

function createUserFlight2() {
    flightSection.classList.remove("hidden");
    flightCard2.setAttribute("id","flightCardInfo2");
    price2.textContent="$"+localStorage.getItem("flightPRICE2")
    carrier2.textContent=localStorage.getItem("flightCARRIER2")
    flightNumber2.textContent=localStorage.getItem("flightNUMBER2")
    departTime2.textContent="Departs: "+localStorage.getItem("flightDEPARTTIME2")
    arrivalTime2.textContent="Arrives: "+localStorage.getItem("flightARRIVALTIME2")
    userAirportIATA2.textContent="Departs from: "+localStorage.getItem("flightUSERAITA2")
    destAirportIATA2.textContent="Arrives at: "+localStorage.getItem("flightDESTAITA2")
    flightSection.append(flightCard2)
    flightCard2.append(price2)
    flightCard2.append(carrier2)
    flightCard2.append(flightNumber2)
    flightCard2.append(departTime2)
    flightCard2.append(arrivalTime2)
    flightCard2.append(userAirportIATA2)
    flightCard2.append(destAirportIATA2)
    
}
function removeWeatherCards(){
let user = document.getElementById("userWeatherCardInfo")
user.parentNode.removeChild(user);
let dest = document.getElementById("destWeatherCardInfo")
dest.parentNode.removeChild(dest);
}


// NAV BAR HERE
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
