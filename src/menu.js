export default function Menu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    const heading = document.createElement("h1");
    heading.classList.add("heading")
    heading.innerText = "MENU";
    page.appendChild(heading);

}