const sectionTitle = document.getElementById("sectionTitle");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser !== null) {
    sectionTitle.innerText = `Welcome back ${currentUser.name}!`;
} else {
    sectionTitle.innerHTML = "Something has gone wrong! <a href='logIn.html'>Please Login Again...</a>.";
}

const contactFormData = JSON.parse(localStorage.getItem("contactFormData")) || [];
const contactFormList = document.getElementById("messageList");

if (contactFormData.length > 0) {
    contactFormList.innerHTML = contactFormData.map((data, index) => `
        <div class="message">
            <strong>Message ${index + 1}:</strong>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        </div>
    `).join("");
} else {
    contactFormList.innerHTML = "<p>No contact form submissions yet.</p>";
}



