const btn2open = document.querySelector("#openBtn");
const btn2close = document.querySelector("#closeBtn");
const navBar = document.querySelector("#navBoxId");
const p1SubBtn = document.querySelector("#p1SubmitBtn");

//Variables used for Amadeus
// The variable names themselves are the query's we would send itno the fetch request
let access_token;
let originLocationCode; // REQUIRED user's current location, Must be assigned to a IATA code 'GOOGLE IT' PULL PULL FROM HOME STATE LCL STORAGE
let destinationLocationCode; //REQUIRED place user is looking to go, Must be assigned to an IATA code PULL ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let departureDate; // REQUIRED we could set it to just be a date  in the very near future=============== "2 DIFF DEPARTURE DATES"
// let travelClass; // first class, business, coach... etc 
// let returnDate; // self explanatory
let adults; //REQUIRED we could default set it to 1. We'll talk about it. ==============HARD CODE 1 ADULT
// let nonStop; //indicates direct flights
let currencyCode; //set prefered currency WE WILL NEED A WAY TO ALLOW USERS TO CHOOSE============= HARD CODE
let maxprice; //we have the option to let users specify a max price for the flight. ============= SET LUDICROUS OR JUST HARD CODE TO ANYTHING
//end of Amadeus Variables

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
    // `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&max=2`
    `https://test.api.amadeus.com/v2/shopping/flight-offers?currencyCode="USD"originLocationCode=` +
      originLocationCode +
      `&destinationLocationCode=` +
      destinationLocationCode +
      `+&departureDate=` +
      departureDate +
      `&adults=` +
      adults +
      `&max=2`, 
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

function createFlightHtml(burrito) {
  // Create our HTML elements here
}
function getuserpref() {}

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
