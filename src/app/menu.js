import Apple from "./assets/menu/apple.jpeg";
import Carrot from "./assets/menu/carrot.jpeg";
import Broccoli from "./assets/menu/broccolli.jpeg";

const items = [
    {
        "item": Carrot,
        "title": "Carrot",
        "info": "Carrot is a healthy vegetable. Even though they look like a penis they are good for your eyes"
    },
    {
        "item": Broccoli,
        "title": "Broccoli",
        "info": "Broccoli's are vegetables. They look like trees but you can eat them. Kids hate these because they are fucking stupid"
    },
    {
        "item": Apple,
        "title": "Apple",
        "info": "Apple is a very healthy fruit. An Apple a day keeps the doctor away"
    },
]


export function loadMenu() {
    for (let i = 0; i < items.length; i++) {

        const item = document.createElement("div");
        item.classList.add("item");
        const aboutItem = document.createElement("div");
        aboutItem.classList.add("item-about");

        const itemTitle = document.createElement("div");
        itemTitle.classList.add("item-title");
        itemTitle.textContent = items[i].title;
        aboutItem.appendChild(itemTitle);

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        itemInfo.textContent = items[i].info;
        aboutItem.appendChild(itemInfo);

        const itemImg = new Image();
        itemImg.src = items[i].item;
        itemImg.width = 300;
        itemImg.height = 300;

        item.appendChild(aboutItem);
        item.appendChild(itemImg)

        container.appendChild(item);

    }
}
