let destinationLocationCode = "LAS";
let departureDate = "2021-06-30";
let destLat;
let destLong;


function getAccessToken(){
  fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
    body: "grant_type=client_credentials&client_id=2fdNuvibX2M6d60L6dMzYlpxkH1jV4wg&client_secret=wFgzffD956eN8Aau",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  })
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("Access_Token" , data.access_token)
    
  });
  
}

async function getFlightOffers() {
  getAccessToken()
 getOriginLocationCode();
 await getDestinationLocationCode();
  let access_token = localStorage.getItem("Access_Token");
  let originLocationCode = localStorage.getItem("originLocationCode");
  // let destinationLocationCode = localStorage.getItem("destinationLocationCode");
  fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?adults=1&currencyCode=USD&max=2&originLocationCode=`+originLocationCode+`&destinationLocationCode=`+destinationLocationCode+`&departureDate=`+departureDate+``,
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
};

function getOriginLocationCode() {
  getUserLatLong()
  let access_token = localStorage.getItem("Access_Token");
  let userLat = localStorage.getItem("userLat");
  let userLong = localStorage.getItem("userLong");
  fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=`+userLat+`&longitude=`+userLong+`&radius=500&page[limit]=1`,
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
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
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => (
      localStorage.setItem("destinationLocationCode",data.data[0].iataCode)
    ))
};

p1SubBtn.addEventListener("click", getFlightOffers())


