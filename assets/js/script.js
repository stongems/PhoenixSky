const openNavBarBtn = document.querySelector("#openNavBarBtn");
const closeNavBarBtn = document.querySelector("#closeNavBarBtn");
const navBarMenu = document.querySelector("#navBarMenu");
const p1SubBtn = document.querySelector("#p1SubBtn"); 

function createFlightHtml() {
  //create HTML elements here
}

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
