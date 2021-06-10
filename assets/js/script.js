const btn2open = document.querySelector("#openBtn");
const btn2close = document.querySelector("#closeBtn");
const navBar = document.querySelector("#navBoxId");
const p1SubBtn = document.querySelector("#p1SubmitBtn");

let homeCity = document.querySelector("#homeCity");
let homeState = document.querySelector("#homeState");


//Variables used for Amadeus
// The variable names themselves are the query's we would send itno the fetch request
let access_token;
let originLocationCode; // REQUIRED user's current location, Must be assigned to a IATA code 'GOOGLE IT' PULL PULL FROM HOME STATE LCL STORAGE
let destinationLocationCode; //REQUIRED place user is looking to go, Must be assigned to an IATA code PULL ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let departureDate; // REQUIRED we could set it to just be a date  in the very near future=============== "2 DIFF DEPARTURE DATES"
//end of Amadeus Variables



var url = `https://ipgeolocation.abstractapi.com/v1/
?api_key=6628343940ed44a69b857eae1de5d184&
fields=ip_address,city,region,longitude,latitude,timezone_abbreviation`

fetch(url)
.then((res) => res.json())
.then(data => {
  city = data.city;
  console.log(data)
  //can get IP ADDRESS, CITY, STATE, LONG, and LAT
  //any calls need to be done within this fetch
}
)



fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
  body: "grant_type=client_credentials&client_id=2fdNuvibX2M6d60L6dMzYlpxkH1jV4wg&client_secret=wFgzffD956eN8Aau",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  method: "POST",
})
  .then((res) => res.json())
  // .then(data => console.log(data))
  .then((data) => {
    // console.log(data.access_token)
    access_token = data.access_token;
    console.log(access_token);
    getFlightOffers(access_token);
  });

function getFlightOffers(token) {
  getuserpref(); //we'll have to go over how we want the info introduced to the user so we can
  //use the variables in the fetch request HOMEcity HOMEstate
  fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?adults=1&currencyCode=USD&max=2&originLocationCode=` +
      originLocationCode +
      `&destinationLocationCode=` +
      destinationLocationCode +
      `&departureDate=` +
      departureDate +
      ``,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => response.json())
    .then(function (flightData) {
      console.log(flightData);

      createFlightHtml(flightData);
    });
}

function createFlightHtml() {
  // Create our HTML elements here
}

function getuserpref() {}

function enterHomeInfo() {
  //code that uses stored information to do search for Home location images
  //code that hides front page assets and shows 2nd page assets
}

p1SubBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (homeCity.value == "" || homeState.value == "no") {
    console.log("I cant do that Dave");
  } else if (homeCity.value !== "" && homeState.value !== "no") {
    localStorage.setItem("HOMEcity", JSON.stringify(homeCity.value));
    localStorage.setItem("HOMEstate", JSON.stringify(homeState.value));
    enterHomeInfo();
  }
});

btn2open.addEventListener("click", function (e) {
  e.preventDefault();
  btn2open.classList.add("hidden");
  navBar.classList.remove("hidden");
});
btn2close.addEventListener("click", function (e) {
  e.preventDefault();
  navBar.classList.add("hidden");
  btn2open.classList.remove("hidden");
});
