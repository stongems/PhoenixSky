const p1SubBtn = document.querySelector("#p1SubBtn");
const destinationID = document.querySelector("#destinationID");



// ON CLICK OF SUBMIT BUTTON
p1SubBtn.addEventListener("click", function (e) 
{
  e.preventDefault();
  
  if (destinationID.value == "") 
  {//<< CONSOLE LOG IF #destinationID IS LEFT BLANK >>
    console.log("I cant do that Dave"); 
  }
  
  else if (destinationID.value !== "") 
  {//<< WHAT HAPPENS WHEN INFORMATION IS ENTERED >>
    let now = new Date().toISOString().slice(0, 10);
    localStorage.setItem("DATE", now);
    localStorage.setItem("USERinput", JSON.stringify(destinationID.value));
    runAbstractAPI();
    runUnsplashAPI();
    removeWeatherCards();
    removeFlightInfo();       
  };
}
);

// ABSTRACT API
function runAbstractAPI() {
  let key = "6628343940ed44a69b857eae1de5d184";

  fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${key}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("userDATA: ",data);
    
    localStorage.setItem("userIP", data.ip_address)
    localStorage.setItem("userCITY", data.city)
    
    if (localStorage.getItem("userCITY") == "null") //<<< CHECKS IF USER LOCATION IS AVAILABLE >>>
    {console.log("Unable to Find User Location.")}
    
    else 
    {
      localStorage.setItem("userLATITUDE", data.latitude)
      localStorage.setItem("userLONGITUDE", data.longitude)
      // localStorage.setItem("userSTATE", data.region)
      // localStorage.setItem("userSC", data.region_iso_code)
      // localStorage.setItem("userTIMEZONE", data.timezone.abbreviation)
    };
    
    runCurrentLocation();
  })};



// WEATHER API
function runCurrentLocation(){
  let city = localStorage.getItem("userCITY");
  let key = "f7e60bf2e6fe00bbc86af3c760ed5895";
  
  console.log("USER city: ",city)
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
  .then(res => {
    return res.json()})
    .then(data => {  
      console.log("USER weather: ",data);
      localStorage.setItem("userWEATHER", data.weather[0].description)
      localStorage.setItem("userICON", data.weather[0].icon)
      localStorage.setItem("userTEMPERATURE", data.main.temp)
      localStorage.setItem("userFEELSLIKE", data.main.feels_like)
      localStorage.setItem("userHUMIDITY", data.main.humidity)
      runDestination();
      createWeatherCardUser();
    }); 
};


function runDestination(){
    let city = destinationID.value.trim();
    let key = "f7e60bf2e6fe00bbc86af3c760ed5895";

    console.log("DEST city: ",city)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(res => {
      return res.json()})
      .then(data => {  
        console.log("DEST weather: ",data);
        localStorage.setItem("destinationWEATHER", data.weather[0].description)
        localStorage.setItem("destinationICON", data.weather[0].icon)
        localStorage.setItem("destinationTEMPERATURE", data.main.temp)
        localStorage.setItem("destinationFEELSLIKE", data.main.feels_like)
        localStorage.setItem("destinationHUMIDITY", data.main.humidity)
        localStorage.setItem("destinationCITY", data.name)    
        localStorage.setItem("destinationLATITUDE", data.coord.lat)
        localStorage.setItem("destinationLONGITUDE", data.coord.lon)
        runAmadeusAPI();       
          createWeatherCardDest();
    }); 
  };


// AMADEUS API

function runAmadeusAPI() {
  fetch("https://test.api.amadeus.com/v1/security/oauth2/token",
  {
    body:"grant_type=client_credentials&client_id=2fdNuvibX2M6d60L6dMzYlpxkH1jV4wg&client_secret=wFgzffD956eN8Aau",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    method:"POST"
  }
  )
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("Access_Token" , data.access_token)
    getUserLocationCode();
  });
  
  
};


function getUserLocationCode() {
  let access_token = localStorage.getItem("Access_Token");
  let userLat = localStorage.getItem("userLATITUDE");
  let userLong = localStorage.getItem("userLONGITUDE");
  fetch(`https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${userLat}&longitude=${userLong}&radius=500&page[limit]=1`,{headers: {Authorization:`Bearer ${access_token}`},method:"GET"})
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("userLocationCODE",data.data[0].iataCode)
      getDestinationCode();
    });
};

function getDestinationCode() {
  let access_token = localStorage.getItem("Access_Token");
  let destLat = localStorage.getItem("destinationLATITUDE");
  let destLong = localStorage.getItem("destinationLONGITUDE");
  fetch(`https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${destLat}&longitude=${destLong}&radius=500&page[limit]=1`,{headers: {Authorization:`Bearer ${access_token}`},method:"GET"})
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("destinationCODE",data.data[0].iataCode)
      getFlightOffers();
    });
};

async function getFlightOffers() {
  let access_token = localStorage.getItem("Access_Token");
  let userLocationCODE = localStorage.getItem("userLocationCODE");
  let destinationCODE = localStorage.getItem("destinationCODE");
  let departureDate = localStorage.getItem("DATE");
 fetch(
`https://test.api.amadeus.com
/v2/shopping/flight-offers
?adults=1&currencyCode=USD&max=2
&originLocationCode=${userLocationCODE}
&destinationLocationCode=${destinationCODE}
&departureDate=${departureDate}`,
{headers: {Authorization: `Bearer ${access_token}`},method:"GET"})
    .then((response) => response.json())
    .then(function (flightData) {
      console.log("FLIGHT INFO: ",flightData);
      localStorage.setItem("flightPRICE", flightData.data[0].price.total)
      localStorage.setItem("flightCARRIER", flightData.data[0].itineraries[0].segments[0].carrierCode)
      localStorage.setItem("flightNUMBER", flightData.data[0].itineraries[0].segments[0].number)
      localStorage.setItem("flightDEPARTTIME", flightData.data[0].itineraries[0].segments[0].departure.at)
      localStorage.setItem("flightARRIVALTIME", flightData.data[0].itineraries[0].segments[0].arrival.at)
      localStorage.setItem("flightUSERAITA", flightData.data[0].itineraries[0].segments[0].departure.iataCode)
      localStorage.setItem("flightDESTAITA", flightData.data[0].itineraries[0].segments[0].arrival.iataCode)
      localStorage.setItem("flightPRICE2", flightData.data[1].price.total)
      localStorage.setItem("flightCARRIER2", flightData.data[1].itineraries[0].segments[0].carrierCode)
      localStorage.setItem("flightNUMBER2", flightData.data[1].itineraries[0].segments[0].number)
      localStorage.setItem("flightDEPARTTIME2", flightData.data[1].itineraries[0].segments[0].departure.at)
      localStorage.setItem("flightARRIVALTIME2", flightData.data[1].itineraries[0].segments[0].arrival.at)
      localStorage.setItem("flightUSERAITA2", flightData.data[1].itineraries[0].segments[0].departure.iataCode)
      localStorage.setItem("flightDESTAITA2", flightData.data[1].itineraries[0].segments[0].arrival.iataCode)
      createUserFlight()
    });
  }