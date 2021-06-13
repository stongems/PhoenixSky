let access_token;
let originLocationCode;
let destinationLocationCode;
let departureDate;
let destLat;
let destLong;

function getAccessToken() {
fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
  body: "grant_type=client_credentials&client_id=2fdNuvibX2M6d60L6dMzYlpxkH1jV4wg&client_secret=wFgzffD956eN8Aau",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => {
    const access_token = data.access_token;
    console.log (access_token)
  });
}
// }

function getFlightOffers() {
  getAccessToken()
  getOriginLocationCode();
  getDestinationLocationCode();
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
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then(function (flightData) {
      console.log(flightData);

      createFlightHtml(flightData);
    });
}

function getFlightOffers() {
  getOriginLocationCode();
  getDestinationLocationCode();
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
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then(function (flightData) {
      console.log(flightData);

      createFlightHtml(flightData);
    });
}

function getOriginLocationCode() {
  getUserLat();
  setTimeout(() => {getUserLong();},1300);
  fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports
        ?latitude=` +
      userLat +
      `&longitude=` +
      userLong +
      `&radius=500
        page[limit]=1`,
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      originLocationCode = data.iataCode;
      return originLocationCode;
    });
}

function getDestinationLocationCode(token) {
  getDestLongLat();
  destLat = localStorage.getItem("recentCities.lat");
  destLong = localStorage.getItem("recentCities.lon");
  fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports
        ?latitude=` +
      destLat +
      `&longitude=` +
      destLong +
      `&radius=500
        page[limit]=1`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      destinationLocationCode = data.iataCode;
      return originLocationCode;
    });
}
