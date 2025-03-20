gsap.from(".home-subtitle", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".home-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.3,
});

gsap.from(".home-description", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.6,
});

gsap.from(".button", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.9,
});

gsap.from(".home-img", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  ease: "power2.out",
  delay: 1.2,
});

gsap.from(".home-triangle", {
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)",
  delay: 1.5,
});
