gsap.from(".home-subtitle", {
  opacity: 0,
  y: 50,
  duration: 4,
  ease: "power2.out",
});

gsap.from(".home-title", {
  opacity: 0,
  y: 50,
  duration: 3,
  ease: "power2.out",
  delay: 0.3,
});

gsap.from(".home-description", {
  opacity: 0,
  y: 50,
  duration: 3,
  ease: "power2.out",
  delay: 0.6,
});

gsap.from(".home-triangle", {
  opacity: 0,
  scale: 0.5,
  duration: 3.5,
  ease: "elastic.out(1, 0.5)",
  delay: 1.5,
});
