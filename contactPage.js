// This code is based upon a Youtube video tutorial
// Author: OpenJavaScript
// Location: https://www.youtube.com/watch?v=7LGpIQ6ceJs
// Accessed: 29/05/2025

const contactForm = document.getElementById("contactForm");
let contactFormData = JSON.parse(localStorage.getItem("contactFormData")) || [];
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    const formData = new FormData(contactForm);
    const contactData = Object.fromEntries(formData.entries());

    contactFormData.push(contactData);
    localStorage.setItem("contactFormData", JSON.stringify(contactFormData));
    alert("Message sent!");
    contactForm.reset();
});

