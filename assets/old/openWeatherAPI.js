// let userDestination = document.querySelector("#destinationID".value);
function getDestLongLat(){
  let city;
  console.log(city)
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7e60bf2e6fe00bbc86af3c760ed5895&units=imperial`)
  .then(res => {
      
      return res.json()
  }).then(data => {

      console.log(data.main);
      // makeWeatherCard(data);
  }); 
};