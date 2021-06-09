const btn2open = document.querySelector("#openBtn");
const btn2close = document.querySelector("#closeBtn");
const navBar = document.querySelector("#navBoxId");
let access_token;


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
  fetch(
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&max=2",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => response.json())
    .then(function (flightData) {
      // We have access to the flight data at this point
      // This is where we would build our HTML elements
      createFlightHtml(flightData);
    });
}

function createFlightHtml(burrito) {
  // Create our HTML elements here
}

// Send a message to Tucker Beauchamp




btn2open.addEventListener("click", function(e) {
    e.preventDefault();
    btn2open.classList.add("hidden");
    navBar.classList.remove("hidden");
})
btn2close.addEventListener("click", function(e) {
    e.preventDefault();
    navBar.classList.add("hidden");
    btn2open.classList.remove("hidden");
})