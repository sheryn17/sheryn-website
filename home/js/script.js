// Fade-in animation
const sections = document.querySelectorAll(".fade-in");

function revealOnScroll() {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 80) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth navigation scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing effect
const texts = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Future Digital Forensics Specialist"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.slice(0, charIndex++);

  if (charIndex > currentText.length) {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }, 2000);
  }

  setTimeout(typeEffect, 90);
}

typeEffect();
