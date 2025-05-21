const themeToggleButton = document.getElementById("themeToggleButton");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "Toggle Light Mode";
    } else {
        themeToggleButton.textContent = "Toggle Dark Mode";
    }

    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleButton.textContent = "Toggle Light Mode";
    }
});


window.addEventListener("scroll", function () {
    var element = document.quesrySelector('.scrolling-element');
    var position = element.getBoundingClientRect();

    // Checking if the element is visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        // Element is visible
        element.classList.add('visible');
    } else {
        // Element is not visible
        element.classList.remove('visible');
    }
})