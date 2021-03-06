let userIpAddress;
let userCity;
let userRegion;
let userTimezone;

function getIpAddress() {
  var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=ip_address,`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userIpAddress = data.ip_address;
      console.log(userIpAddress);

      return userIpAddress;
    });
}
function getCity() {
  var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=city,`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userCity = data.city;
      console.log(userCity);

      return userCity;
    });
}

function getUserRegion() {
  var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=region,`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userRegion = data.region;
      console.loguserRegion;
      return userRegion;
    });
}

function getTimezone() {
  var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=timezone,`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userTimezone = data.timezone.abbreviation;
      console.log(userTimezone);
      return userTimezone;
    });
}

function getUserLatLong() {
  var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=latitude,longitude`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("userLat" , data.latitude)
      localStorage.setItem("userLong" , data.longitude)
    });
}
