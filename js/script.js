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



const navMenu = document.querySelector('.navbar'),
      navToggle = document.querySelector('.nav-toggle'),
      navClose = document.querySelector('.nav-close'),
      burgerIcon = document.querySelector('.fa-bars'),
      closeIcon = document.querySelector('.fa-xmark');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Ouvre la navbar
        burgerIcon.style.display = 'none'; // Cache le burger
        closeIcon.style.display = 'block'; // Affiche la croix
    });
}

/*===== MENU HIDE =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Ferme la navbar
        burgerIcon.style.display = 'block'; // Réaffiche le burger
        closeIcon.style.display = 'none'; // Cache la croix
    });
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)