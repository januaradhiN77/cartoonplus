function toggleTheme() {
            const themeLink = document.getElementById("theme-link");
            const currentTheme = themeLink.getAttribute("href");
            const newTheme = currentTheme === "style.css" ? "light-theme.css" : "style.css";
            themeLink.setAttribute("href", newTheme);

            const toggleBox = document.querySelector(".toggle-box");
            const toggleIcon = toggleBox.querySelector(".toggle-icon");

            if (newTheme === "light-theme.css") {
                
                 toggleIcon.textContent = "🌞";
                toggleBox.classList.add("active");
            } else {
                toggleIcon.textContent = "🌙";
                toggleBox.classList.remove("active");
            }

            // Save theme preference in localStorage
            localStorage.setItem("theme", newTheme);
        }

        // Apply saved theme on load
        window.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem("theme") || "style.css";
            document.getElementById("theme-link").setAttribute("href", savedTheme);

            const toggleBox = document.querySelector(".toggle-box");
            const toggleIcon = toggleBox.querySelector(".toggle-icon");

            if (savedTheme === "light-theme.css") {
                toggleIcon.textContent = "🌞";
                toggleBox.classList.add("active");
            } else {
                
                toggleIcon.textContent = "🌙";
                toggleBox.classList.remove("active");
            }
        });