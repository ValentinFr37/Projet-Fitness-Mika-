const carouselContainer = document.querySelector(".carousel-container");
const testimonials = document.querySelectorAll(".testimonial");
const totalItems = testimonials.length;
const visibleItems = 3; // Nombre d'éléments visibles
const track = document.querySelector(".carousel-track");
let index = 0;

// Fonction pour déplacer les avis
function showTestimonials() {
  const offset = -(index * (100 / visibleItems)); // Déplacement en pourcentage
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Défilement automatique
function autoScroll() {
  index++;
  if (index > totalItems - visibleItems) {
    index = 0; // Retour au début quand on arrive à la fin
  }
  showTestimonials();
}

// Lancer le carrousel automatiquement
let interval = setInterval(autoScroll, 3000);

// Boutons de navigation
document.getElementById("prevBtn").addEventListener("click", () => {
  index = index > 0 ? index - 1 : totalItems - visibleItems;
  showTestimonials();
  resetInterval();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  index = index < totalItems - visibleItems ? index + 1 : 0;
  showTestimonials();
  resetInterval();
});

// Réinitialisation du scroll automatique après un clic
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoScroll, 3000);
}

// Initialisation
showTestimonials();


// Loader après 2 secondes
setTimeout(function () {
  document.getElementById("loadingScreen").style.display = "none"; // Masque la page de chargement
  document.getElementById("mainContent").style.display = "block"; // Affiche le contenu principal
}, 2000); // 3000ms = 3 secondes
