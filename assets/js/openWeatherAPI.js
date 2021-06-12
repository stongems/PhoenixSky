// let rawUserInput = localStorage.getItem("UserDestination") || "arizona";
// let firstPass = rawUserInput.replace('"','');
// let finalInput = firstPass.replace('"','');

let userDestination = finalInput;

const recentCities = JSON.parse(localStorage.getItem("recentCities")) || [];
// let burrito = "";

// function getDestLongLat(){
fetch(`http://api.openweathermap.org/geo/1.0/direct
?q=${userDestination}
&limit=1
&appid=f7e60bf2e6fe00bbc86af3c760ed5895`)
.then((res) => res.json())
.then(handleWeatherData);
    
function handleWeatherData(data){
    const city = data[0];
    delete city.local_names;
    recentCities.push(city);
    // localStorage.setItem("destLon", city.lon);
    localStorage.setItem("recentCities", JSON.stringify(recentCities))
    // fetch other api endpoints
}
    // {d
    // burrito = data.country;
    // console.log(burrito);
    // console.log(data.lon)
    // localStorage.setItem("destLat",JSON.stringify(data.lat.textContent));
    // console.log(localStorage.getItem("destLat"));
    // console.log(data.lat);
    
// })

// 
