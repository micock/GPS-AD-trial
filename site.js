(function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navOverlay = document.getElementById("nav-overlay");

    if (!hamburger || !navLinks || !navOverlay) {
        return;
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        navOverlay.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    function toggleMenu() {
        const isOpen = !hamburger.classList.contains("active");
        hamburger.classList.toggle("active", isOpen);
        navLinks.classList.toggle("active", isOpen);
        navOverlay.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
    }

    hamburger.addEventListener("click", toggleMenu);
    navOverlay.addEventListener("click", closeMenu);

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.querySelectorAll(".nav-lang-dropdown").forEach((dropdown) => {
        const toggle = dropdown.querySelector(".lang-toggle");
        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = !dropdown.classList.contains("open");
            dropdown.classList.toggle("open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    });
})();
