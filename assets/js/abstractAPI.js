let userIpAddress;
let userCity;
let userRegion;
let userTimezone;
let userLat;
let userLong;

function getIpAddress(){
    var url = `https://ipgeolocation.abstractapi.com/v1/
  ?api_key=6628343940ed44a69b857eae1de5d184&
  fields=ip_address,`
  
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            userIpAddress = data.ip_address
            console.log(userIpAddress)
            
                return userIpAddress
        })
  }
  function getCity(){
    var url = `https://ipgeolocation.abstractapi.com/v1/
  ?api_key=6628343940ed44a69b857eae1de5d184&
  fields=city,`
  
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            userCity = data.city
            console.log(userCity)
  
                return userCity
  
        })
  }
  
  function getUserRegion(){
    var url = `https://ipgeolocation.abstractapi.com/v1/
  ?api_key=6628343940ed44a69b857eae1de5d184&
  fields=region`
  
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            userRegion = data.region
            console.log(userRegion)
                return userRegion
        })
    }
  
    
    function getTimezone(){
        var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=timezone`
    
            fetch(url)
            .then((res) => res.json())
            .then(data => {
              console.log(data)
                userTimezone = data.timezone.abbreviation
              
                    return userTimezone
            })
  }
  
  function getUserLat(){
    var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=latitude`
  
     return   fetch(url) .then((res) => res.json())
         
  }
  function getUserLong(){
    var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=6628343940ed44a69b857eae1de5d184&fields=longitude`
  
     return   fetch(url)
        .then((res) => res.json())
        
  }