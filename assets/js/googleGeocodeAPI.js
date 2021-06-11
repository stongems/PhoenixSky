let userDestLat;
let userDestLong;

function getDestLat(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json
    ?key=AIzaSyB9AAMxi7GdkIvsdlzNv880FBeaCRaJPsU
    &address=`+ userDestinationSubmit +``)
    .then((response) => response.json())
    .then(data => {
        userDestLat = data.geometry.location.lat
        console.log(userDestLat)
            return userDestLat
    })
    }
    function getDestLong(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json
    ?key=AIzaSyB9AAMxi7GdkIvsdlzNv880FBeaCRaJPsU
    &address=`+ userDestinationSubmit +``)
    .then((response) => response.json())
    .then(data => {
        userDestLong = data.geometry.location.userLong
        console.log(userDestLong)
            return userDestLong
    })
    }
