import "./style.css";
import {loadHome} from "./app/home";
import {loadMenu} from "./app/menu";
import {loadContact} from "./app/contact";

const container = document.querySelector("#container");


const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
    menu.classList.remove("selected");
    contact.classList.remove("selected");
    home.classList.add("selected");
    container.innerHTML = "";
    loadHome();
});
menu.addEventListener("click", () => {
    menu.classList.add("selected");
    contact.classList.remove("selected");
    home.classList.remove("selected");
    container.innerHTML = "";
    loadMenu();
});
contact.addEventListener("click", () => {
    menu.classList.remove("selected");
    contact.classList.add("selected");
    home.classList.remove("selected");
    container.innerHTML = "";
    loadContact();
});

home.click();