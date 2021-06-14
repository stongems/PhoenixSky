let destinationLocationCode = "LAS";
let departureDate = "2021-06-30";
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
      localStorage.setItem("Access_Token", data.access_token);
    });
}

async function getFlightOffers() {
<<<<<<< HEAD:assets/js/amadeusAPI.js
  getAccessToken();
  await getOriginLocationCode();

  let access_token = localStorage.getItem("Access_Token");
  let originLocationCode = localStorage.getItem("originLocationCode");

=======
  getAccessToken()
 getOriginLocationCode();
 await getDestinationLocationCode();
  let access_token = localStorage.getItem("Access_Token");
  let originLocationCode = localStorage.getItem("originLocationCode");
  // let destinationLocationCode = localStorage.getItem("destinationLocationCode");
>>>>>>> bef83bd084a66e87f377f60a5c8899e9caac392f:assets/old/amadeusAPI.js
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

      // createFlightHtml(flightData);
    });
}

function getOriginLocationCode() {
  getUserLatLong();
  let access_token = localStorage.getItem("Access_Token");
  let userLat = localStorage.getItem("userLat");
  let userLong = localStorage.getItem("userLong");
<<<<<<< HEAD:assets/js/amadeusAPI.js
  return fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=` +
      userLat +
      `&longitude=` +
      userLong +
      `&radius=500&page[limit]=1`,
=======
  fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=`+userLat+`&longitude=`+userLong+`&radius=500&page[limit]=1`,
>>>>>>> bef83bd084a66e87f377f60a5c8899e9caac392f:assets/old/amadeusAPI.js
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
<<<<<<< HEAD:assets/js/amadeusAPI.js
      localStorage.setItem("originLocationCode", data.data[0].iataCode);
    });
}

function getDestinationLocationCode(token) {
  getDestLongLat();
  destLat = localStorage.getItem("recentCities.lat");
  destLong = localStorage.getItem("recentCities.lon");
  fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=` +
      destLat +
      `&longitude=` +
      destLong +
      `&radius=500page[limit]=1`,
=======
      localStorage.setItem("originLocationCode",data.data[0].iataCode)
    })
};
// we need value of search query to be past to getDestLongLat.... we need to store it's contents.....
 function getDestinationLocationCode() {
  getDestLongLat();
  let destLat = localStorage.getItem("dest.lat");
  let destLong = localStorage.getItem("dest.lon");
  let access_token = localStorage.getItem("Access_Token");
  return fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=` + destLat + `&longitude=` + destLong + `&radius=500page[limit]=1`,
>>>>>>> bef83bd084a66e87f377f60a5c8899e9caac392f:assets/old/amadeusAPI.js
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
<<<<<<< HEAD:assets/js/amadeusAPI.js
    .then((data) => {
      destinationLocationCode = data.iataCode;
      return originLocationCode;
    });
}
=======
    .then((data) => (
      localStorage.setItem("destinationLocationCode",data.data[0].iataCode)
    ))
};

p1SubBtn.addEventListener("click", getFlightOffers())


>>>>>>> bef83bd084a66e87f377f60a5c8899e9caac392f:assets/old/amadeusAPI.js
