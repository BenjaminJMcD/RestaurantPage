export default function Contact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    // HEADING //

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = "CONTACT";
    page.appendChild(heading);

    // NAV //

    

    // CONTACT INFO //

    const phone = document.createElement("p");
    phone.classList.add("phoneContact");
    phone.innerText = "Phone: (816) 555 - 5555";
    page.appendChild(phone);

    const email = document.createElement("p");
    email.classList.add("emailContact");
    email.innerText = "Email: WoodfireKC@pizza.org";
    page.appendChild(email);

    const address = document.createElement("p");
    address.classList.add("addressContact");
    address.innerText = "Address: 810 Main Street";
    page.appendChild(address);

    // MESSAGE FORM //

    const msgForm = document.createElement("form")
    msgForm.setAttribute("id", "msgFormContact");
    msgForm.setAttribute("name", "email");
    msgForm.setAttribute("method", "POST");
    page.appendChild(msgForm);

    const msgHeader = document.createElement("h1");
    msgHeader.classList.add("msgHeaderContact");
    msgHeader.innerText = "Send us a message";
    msgForm.appendChild(msgHeader);

    const spacer = document.createElement("div");
    msgForm.appendChild(spacer);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("formDivs");
    msgForm.appendChild(nameDiv);

    const nameLabelForm = document.createElement("label");
    nameLabelForm.setAttribute("for", "FullName");
    nameLabelForm.innerText = "Full Name: ";
    nameDiv.appendChild(nameLabelForm);

    const nameInputForm = document.createElement("input");
    nameInputForm.setAttribute("type", "text");
    nameInputForm.setAttribute("id", "FullName");
    nameDiv.appendChild(nameInputForm);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("formDivs");
    msgForm.appendChild(emailDiv);

    const emailLabelForm = document.createElement("label");
    emailLabelForm.setAttribute("for", "Email");
    emailLabelForm.innerText = "Email: ";
    emailDiv.appendChild(emailLabelForm);

    const emailInputForm = document.createElement("input");
    emailInputForm.setAttribute("type", "text");
    emailInputForm.setAttribute("id", "Email");
    emailDiv.appendChild(emailInputForm);

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("formDivs");
    msgForm.appendChild(msgDiv);

    const messageLabelForm = document.createElement("label");
    messageLabelForm.setAttribute("for", "Message");
    messageLabelForm.classList.add("msgLabel");
    messageLabelForm.innerText = "Message: ";
    msgDiv.appendChild(messageLabelForm);

    const messageInputForm = document.createElement("textarea");
    messageInputForm.setAttribute("type", "text");
    messageInputForm.setAttribute("id", "Message");
    msgDiv.appendChild(messageInputForm);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.innerText = "SUBMIT"
    msgForm.appendChild(submitBtn);


    return page;

}