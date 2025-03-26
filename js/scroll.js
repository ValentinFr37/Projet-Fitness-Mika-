document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".formulaire, .calculate");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) { // 100px avant d'entrer dans le viewport
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Pour vérifier dès le chargement
});


document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.querySelector(".formulaire");
    const section2 = document.querySelector(".calculate");

    function handleScroll() {
        const section2Top = section2.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (section2Top < windowHeight / 2) { // Si la 2e section est au milieu de l'écran
            section1.classList.add("hidden-up");
        } else {
            section1.classList.remove("hidden-up");
        }
    }

    window.addEventListener("scroll", handleScroll);
});
