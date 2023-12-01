import './styles.css';
import GitIcon from './github-mark-white.svg';
import FrontPage from './frontPage';

function Component() {

    const page = document.createElement("div")
    document.body.appendChild(page);

    // TEMPLATE HEADER

    const header = document.createElement("header");
    header.classList.add("templateHeader");
    page.appendChild(header);

    const title = document.createElement("h1");
    title.innerText = "WoodFire Pizzeria";
    title.classList.add("title");
    header.appendChild(title);

    const address = document.createElement("h4");
    address.innerText = "810 Main Street";
    address.classList.add("address");
    header.appendChild(address);


    // VARIABLE CONTENT

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    page.appendChild(content);

    content.appendChild(FrontPage());


    // NAV BAR

    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");
    page.appendChild(navBar);

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menuBtn");
    menuBtn.innerText = "Menu";
    navBar.appendChild(menuBtn);

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("contactBtn");
    contactBtn.innerText = "Contact";
    navBar.appendChild(contactBtn);

    // FOOTER

    const templateFooter = document.createElement("footer");
    templateFooter.classList.add("templateFooter");
    page.appendChild(templateFooter);

    const gitHub = document.createElement("p");
    gitHub.classList.add("gitHub");
    gitHub.innerText = "Created By ";
    templateFooter.appendChild(gitHub);

    const gitHubLink = document.createElement("a");
    gitHubLink.setAttribute("href", "github.com/BenjaminJMcD");
    gitHubLink.innerText = "BenjaminJMcD";
    gitHub.appendChild(gitHubLink);

    const Icon = new Image();
    Icon.src = GitIcon;

    const gitLogo = document.createElement("img");
    gitLogo.classList.add("gitLogo")
    gitLogo.setAttribute("src", Icon);
    gitHubLink.appendChild(gitLogo);

    return page;

}

document.body.appendChild(Component());

//<p class="gitHub">
//Created By 
//<a href="github.com">
//<img class="gitLogo" src="GitIcon"/>
//BenjaminJMcD
//</a></p>