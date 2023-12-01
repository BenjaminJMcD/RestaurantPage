export default function FrontPage() {

    const content = document.getElementById('content');
    content.innerHTML = "";

    const frontPage = document.createElement('div');
    frontPage.classList.add("frontPage")

    content.appendChild(frontPage);

    const welcome = document.createElement("p");
    welcome.classList.add("welcome")

    welcome.innerText = "Restaurant & Bar";

    frontPage.appendChild(welcome);

    const descript = document.createElement('p');
    descript.classList.add("descript")

    descript.innerText = "serving woodfire pizza, salads, appetizers & a large variety of local taps daily";

    frontPage.appendChild(descript);

    const hours = document.createElement('p');
    hours.classList.add("hours");

    hours.innerText = "Hours: 3PM - 1AM";

    frontPage.appendChild(hours);

    return frontPage;

}