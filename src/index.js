import './styles.css';
import GitIcon from './github-mark-white.svg';
import FrontPage from './frontPage.js';
import Menu from './menu.js';
import Contact from './contact.js';

function Component() {

    const page = document.createElement("div")
    document.body.appendChild(page);

    // TEMPLATE HEADER

    const header = document.createElement("header");
    header.classList.add("templateHeader");
    page.appendChild(header);
    header.onclick = switchFrontPage;


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

    // NAV

    const navBar = document.createElement("nav");
    navBar.classList.add("navBarHome");
    page.appendChild(navBar);

    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Menu";
    navBar.appendChild(menuBtn);
    menuBtn.onclick = switchMenu;


    const contactBtn = document.createElement("button");
    contactBtn.innerText = "Contact";
    navBar.appendChild(contactBtn);
    contactBtn.onclick = switchContact;


    // HANDLE ONCLICK DYNAMIC NAV AND PAGE

    function switchContact () {
        contactBtn.classList.remove("topRight");
        contactBtn.classList.add("hidden");
        menuBtn.classList.remove("hidden");
        menuBtn.classList.add("topRight");
        Contact();
    }

    function switchMenu() {
        menuBtn.classList.remove("topRight");
        menuBtn.classList.add("hidden");
        contactBtn.classList.remove("hidden");
        contactBtn.classList.add("topRight");
        Menu();
    }

    function switchFrontPage() {
        menuBtn.classList.remove("hidden");
        menuBtn.classList.remove("topRight");
        contactBtn.classList.remove("hidden");
        contactBtn.classList.remove("topRight");
        FrontPage();
    }

    // FOOTER

    const templateFooter = document.createElement("footer");
    templateFooter.classList.add("templateFooter");
    page.appendChild(templateFooter);

    const gitHub = document.createElement("p");
    gitHub.classList.add("gitHub");
    gitHub.innerText = "Created By ";
    templateFooter.appendChild(gitHub);

    const Icon = new Image();
    Icon.src = GitIcon;
    Icon.classList.add("gitLogo");

    const gitHubLink = document.createElement("a");
    gitHubLink.setAttribute("href", "https://github.com/BenjaminJMcD");
    gitHubLink.appendChild(Icon)
    const gitName = document.createElement("span");
    gitName.innerText = "BenjaminJMcD";
    gitHubLink.appendChild(gitName);
    gitHub.appendChild(gitHubLink);

    return page;

}

document.body.appendChild(Component());

//<p class="gitHub">
//Created By 
//<a href="github.com">
//<img class="gitLogo" src="GitIcon"/>
//BenjaminJMcD
//</a></p>