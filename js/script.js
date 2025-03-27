// DEBUT CAROUSSEL AVIS IMANE //

const carouselContainer = document.querySelector(".carousel-container");
const testimonials = document.querySelectorAll(".testimonial");
const totalItems = testimonials.length;
const visibleItems = 3; // Nombre d'éléments visibles
const track = document.querySelector(".carousel-track");
let index = 0;

function showTestimonials() {
  const offset = -(index * (100 / visibleItems)); // Déplacement en pourcentage
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

function autoScroll() {
  index++;
  if (index > totalItems - visibleItems) {
    index = 0; 
  }
  showTestimonials();
}

let interval = setInterval(autoScroll, 3000);

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

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoScroll, 3000);
}

// Initialisation
showTestimonials();

// FIN CAROUSSEL AVIS IMANE //



// DEBUT LOADER IMANE //

setTimeout(function () {
  document.getElementById("loadingScreen").style.display = "none"; 
  document.getElementById("mainContent").style.display = "block"; 
}, 2000); 

// FIN LOADER IMANE //

// DEBUT NAVBAR BURGER IMANE //

const navMenu = document.querySelector('.navbar'),
      navToggle = document.querySelector('.nav-toggle'),
      navClose = document.querySelector('.nav-close'),
      burgerIcon = document.querySelector('.fa-bars'),
      closeIcon = document.querySelector('.fa-xmark');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); 
        burgerIcon.style.display = 'none'; 
        closeIcon.style.display = 'block'; 
    });
}

/*===== MENU HIDE =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); 
        burgerIcon.style.display = 'block'; 
        closeIcon.style.display = 'none'; 
    });
}

// FIN NAVBAR BURGER IMANE //



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
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// DEBUT DEFILEMENT PARTNER IMANE //

document.addEventListener("DOMContentLoaded", () => {
  const partner = document.querySelector(".partner");
  const images = [...partner.children];

  images.forEach(img => {
    const clone = img.cloneNode(true);
    partner.appendChild(clone);
  });

  const container = document.querySelector(".partner-container");
  container.style.overflowX = "hidden";
  container.style.maxWidth = "90%"; 
});

// FIN DEFILEMENT PARTNER IMANE //

// DEBUT CAROUSSEL ABONNEMENT IMANE //

document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program, .program-vert");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let index = 1; // Commencer avec l'abonnement du milieu

  function updateCarousel() {
      // Cacher tous les abonnements
      programs.forEach(program => program.classList.remove("active"));

      // Afficher uniquement celui sélectionné
      programs[index].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
      if (index > 0) {
          index--;
      } else {
          index = programs.length - 1; // Revenir au dernier abonnement si on est au premier
      }
      updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
      if (index < programs.length - 1) {
          index++;
      } else {
          index = 0; // Revenir au premier abonnement si on est au dernier
      }
      updateCarousel();
  });

  // Initialisation
  updateCarousel();
});
// FIN CAROUSSEL ABONNEMENT IMANE //

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home-data`, {delay: 1000, origin: 'left'})
// sr.reveal(`.home-img`, {delay: 70, origin: 'right', distance: '80px'})
sr.reveal(`.bienvenueChezMicka, .program, .tickets, .choose`, {interval: 100})
// sr.reveal(`.photo2`, {delay: 100, origin: 'letf'})
sr.reveal(`.descriptionbio`, {delay: 1000, origin: 'right'})
sr.reveal(`.choose-description`, {delay: 1000, origin: 'top'})
sr.reveal(`.choose-data`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.partner-container`, {delay: 800, origin: 'bottom'})