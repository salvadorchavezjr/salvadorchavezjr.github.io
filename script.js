
// Salvador Chavez Jr. - IT Portfolio

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Add a small effect to the navigation when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");

    if (header) {
        header.style.boxShadow = window.scrollY > 20
            ? "0 4px 20px rgba(15, 23, 42, 0.06)"
            : "none";
    }
});
