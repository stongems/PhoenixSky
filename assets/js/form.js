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

function removeWeatherCards(){
let user = document.getElementById("userWeatherCardInfo");
user.parentNode.removeChild(user);
let dest = document.getElementById("destWeatherCardInfo");
dest.parentNode.removeChild(dest);
}
function removeFlightInfo(){
let info = document.getElementById("flightCardInfo");
info.parentNode.removeChild(info);
}
//create flight
function createUserFlight(data) {
    // for (let i = 0; i < data.data.length; i++) {
    //     const flightData = data.data[i];
        
    
        let flightData = data;
        console.log("if you see this then it made it ", flightData)
            const flightSection = document.getElementById("flightSection");
            flightSection.classList.remove("hidden");
            const flightCard = document.createElement("div");
            flightCard.setAttribute("class","flightCardInfo");
            const price = document.createElement("h3");
            const carrier = document.createElement("p");
            const flightNumber = document.createElement("p");
            const departTime = document.createElement("p");
            const arrivalTime = document.createElement("p");
            const userAirportIATA = document.createElement("p");
            const userTerminal = document.createElement("p");
            const destAirportCode = document.createElement("p");
            const destTerminal = document.createElement("p");
            flightSection.append(flightCard);
            flightCard.append(price);
            flightCard.append(carrier);
            flightCard.append(flightNumber);
            flightCard.append(departTime);
            flightCard.append(arrivalTime);
            flightCard.append(userAirportIATA);
            flightCard.append(userTerminal);
            flightCard.append(destAirportCode);
            flightCard.append(destTerminal);
            price.textContent = flightData.data[0].price.total
            carrier.textContent = flightData.data[0].itineraries[0].segments[0].carrierCode
            flightNumber.textContent = flightData.data[0].itineraries[0].segments[0].number
            departTime.textContent = flightData.data[0].itineraries[0].segments[0].departure.at
            arrivalTime.textContent = flightData.data[0].itineraries[0].segments[0].arrival.at
            userAirportIATA.textContent = flightData.data[0].itineraries[0].segments[0].departure.iataCode
            userTerminal.textContent = flightData.data[0].itineraries[0].segments[0].arrival.terminal
            destAirportCode.textContent = flightData.data[0].itineraries[0].segments[0].arrival.iataCode
            destTerminal.textContent = flightData.data[0].itineraries[0].segments[0].arrival.terminal 

            }
    // }





// NAV BAR BUTTON LISTENERS 
// openNavBarBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     openNavBarBtn.classList.add("hidden");
//     navBarMenu.classList.remove("hidden");
//   });
  
//   closeNavBarBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     navBarMenu.classList.add("hidden");
//     openNavBarBtn.classList.remove("hidden");
//   });
