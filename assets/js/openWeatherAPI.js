// let rawUserInput = localStorage.getItem("UserDestination") || "arizona";
// let firstPass = rawUserInput.replace('"',"");
// let finalInput = firstPass.replace('"',"");

let userDestination = finalInput;

const recentCities = JSON.parse(localStorage.getItem("recentCities")) || [];

function getDestLongLat() {
  fetch(`http://api.openweathermap.org/geo/1.0/direct
?q=${userDestination}
&limit=1
&appid=f7e60bf2e6fe00bbc86af3c760ed5895`)
    .then((res) => res.json())
    .then(handleWeatherData);

  return function handleWeatherData(data) {
    const city = data[0];
    delete city.local_names;
    recentCities.push(city);
    localStorage.setItem("recentCities", JSON.stringify(recentCities));
  }
}

//works!
