// script.js
const openDrawerButton = document.getElementById("openDrawerButton");
const closeDrawerButton = document.getElementById("closeDrawerButton");
const sideDrawer = document.getElementById("sideDrawer");

openDrawerButton.addEventListener("click", () => {
    sideDrawer.classList.add("open");
});

closeDrawerButton.addEventListener("click", () => {
    sideDrawer.classList.remove("open");
});
