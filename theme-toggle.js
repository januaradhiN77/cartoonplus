function toggleTheme() {
    const themeLink = document.getElementById("theme-link");
    const checkbox = document.querySelector('.toggle-switch input[type="checkbox"]');
    const newTheme = checkbox.checked ? "light-theme.css" : "style.css";
    themeLink.setAttribute("href", newTheme);

    // Save theme preference in localStorage
    localStorage.setItem("theme", newTheme);
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "style.css";
    const themeLink = document.getElementById("theme-link");
    themeLink.setAttribute("href", savedTheme);

    const checkbox = document.querySelector('.toggle-switch input[type="checkbox"]');
    if (savedTheme === "light-theme.css") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
});

// Attach the toggleTheme function to the checkbox change event
document.querySelector('.toggle-switch input[type="checkbox"]').addEventListener('change', toggleTheme);