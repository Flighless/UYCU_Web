const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    const signUpFormData = new FormData(signUpForm);
    const signUpData = Object.fromEntries(signUpFormData.entries());

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(signUpData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
   
    signUpForm.reset();
    alert("Sign Up Successful!");
    window.location.href = "admin.html";
});