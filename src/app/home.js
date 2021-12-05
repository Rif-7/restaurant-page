import Icon from "./assets/home.jpg";

export function loadHome() {
    const header = document.createElement("div");
    header.textContent = "Welcome to The Restaurant :)";
    header.classList.add("home-header");
    container.appendChild(header);

    console.log(Icon);
    const Img = new Image();
    Img.width = 600;
    Img.src = Icon;

    container.appendChild(Img);
}

