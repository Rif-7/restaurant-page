
export function loadAbout() {
    const header = document.createElement("div");
    header.classList.add("item-title");
    header.textContent = "The Restaurant";

    const aboutText = document.createElement("div");
    aboutText.classList.add("item-info");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum, quam in egestas ornare, nisl magna tempus felis, in sagittis orci arcu eget ante. Nullam id nunc libero. Cras ullamcorper ullamcorper nibh, nec placerat leo cursus sed. Etiam pretium tortor orci, sed vulputate nisi aliquet id. Fusce at efficitur metus. Phasellus sem massa, dignissim in enim vel, hendrerit egestas metus. Suspendisse mattis porta odio id lacinia.`;
    p2.textContent = `Fusce nec est non justo gravida mattis. Duis posuere ac neque id mattis. Proin in arcu vitae nibh accumsan tempor in vitae magna. Morbi ut orci vel tellus vehicula bibendum. Donec ut libero arcu. Donec condimentum ex elit, vitae accumsan lorem luctus eu. Aliquam a molestie nisl. Curabitur varius arcu eget lorem consequat, at viverra tortor tempus. Aliquam eget neque eget dolor placerat commodo a vitae magna. Vivamus et magna euismod mi lobortis gravida quis eget enim. Nam placerat at tortor in commodo.`;

    aboutText.appendChild(p1);
    aboutText.appendChild(p2);

    container.appendChild(header);
    container.appendChild(aboutText);

}