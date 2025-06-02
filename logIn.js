// This code is based upon an output from ChaptGPT
// Author: OpenAI's ChatGPT
// Location: https://chatgpt.com/
// Accessed: 30/05/2025

const logInForm = document.getElementById("logInForm");
logInForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    const logInFormData = new FormData(logInForm);
    const logInData = Object.fromEntries(logInFormData.entries());
   
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(
      user =>
        user.email === logInData.email &&
        user.password === logInData.password
    );

    if (matchedUser) {
      alert(`Welcome back, ${matchedUser.name || 'User'}!`);
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      window.location.href = "admin.html";
    } else {
      alert("Invalid email or password.");
    }
});