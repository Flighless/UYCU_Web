const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    const contactFormData = new FormData(contactForm);
    const contactData = Object.fromEntries(contactFormData.entries());
   
    const jsonData = JSON.stringify(contactData);
    localStorage.setItem("contactFormData", jsonData);
    contactForm.reset();
});

