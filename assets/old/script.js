const openNavBarBtn = document.querySelector("#openNavBarBtn");
const closeNavBarBtn = document.querySelector("#closeNavBarBtn");
const navBarMenu = document.querySelector("#navBarMenu");
const p1SubBtn = document.querySelector("#p1SubBtn");
const destinationID = document.querySelector("#destinationID");

// USER TEXT INPUT SAVE AND SUBMIT BUTTON
p1SubBtn.addEventListener("click", function (e) 

{
  e.preventDefault();
  
  if (destinationID.value == "") 
  {
    console.log("I cant do that Dave");
  } 
  else if (destinationID.value !== "") 
  {
    localStorage.setItem("UserDestination", JSON.stringify(destinationID.value));
    //FUNCTION TRIGGERS FOR API, WILL START ON BUTTON CLICK. USE>>> localStorage.getItem("UserDestination") <<<TO PULL USER INPUT TEXT.
    
    getDestLongLat();



    // window.location.reload(); //<<<<<<<<<<<<<<<<<!!!!PAGE REFRESHES HERE ON SUBMIT!!!! if something is broken try removing this
  };
});
// function submitDestination() {let UserDestination = localStorage.getItem("UserDestination");}




// EMPTY FUNCTIONS FOR API OUTPUTS
function runOpenWeatherAPI() {
  
};

function runAbstractAPI() {
  
};

function runAmadeusAPI() {
  
};

function runUnspashAPI() {
  localStorage.getItem("UserDestination")
  console.log("W-LS: ",phoenixSkyBG)
};
// function createFlightHtml() {
//   create HTML elements here
// }



// NAV BAR BUTTON LISTENERS 
openNavBarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openNavBarBtn.classList.add("hidden");
  navBarMenu.classList.remove("hidden");
});

closeNavBarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navBarMenu.classList.add("hidden");
  openNavBarBtn.classList.remove("hidden");
});