import "./style.css";
import {loadHome} from "./app/home";
import {loadMenu} from "./app/menu";
import {loadAbout} from "./app/about";

const container = document.querySelector("#container");


const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
    menu.classList.remove("selected");
    about.classList.remove("selected");
    home.classList.add("selected");
    container.innerHTML = "";
    loadHome();
});
menu.addEventListener("click", () => {
    menu.classList.add("selected");
    about.classList.remove("selected");
    home.classList.remove("selected");
    container.innerHTML = "";
    loadMenu();
});
about.addEventListener("click", () => {
    menu.classList.remove("selected");
    about.classList.add("selected");
    home.classList.remove("selected");
    container.innerHTML = "";
    loadAbout();
});

home.click();