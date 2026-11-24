
// =================================
// MOBILE NAVIGATION MENU
// =================================

const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if (bar && menu) {

    bar.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            bar.classList.replace("bx-menu", "bx-x");
        } else {
            bar.classList.replace("bx-x", "bx-menu");
        }

    });

    // Close menu after clicking a navigation link
    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            bar.classList.replace("bx-x", "bx-menu");

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {

        if (!menu.contains(event.target) && !bar.contains(event.target)) {

            menu.classList.remove("active");
            bar.classList.replace("bx-x", "bx-menu");

        }

    });

}
