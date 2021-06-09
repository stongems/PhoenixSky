const btn2open = document.querySelector("#openBtn");
const btn2close = document.querySelector("#closeBtn");
const navBar = document.querySelector("#navBoxId");

btn2open.addEventListener("click", function(e) {
    e.preventDefault();
    btn2open.classList.add("hidden");
    navBar.classList.remove("hidden");
})
btn2close.addEventListener("click", function(e) {
    e.preventDefault();
    navBar.classList.add("hidden");
    btn2open.classList.remove("hidden");
})