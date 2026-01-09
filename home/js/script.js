// Fade-in animation
const sections = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 80) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Typing animation
const texts = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Future Digital Forensics Expert"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  const current = texts[textIndex];
  document.querySelector(".typing").textContent =
    current.slice(0, charIndex++);

  if (charIndex > current.length) {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }, 2000);
  }

  setTimeout(typeEffect, 100);
}

typeEffect();
