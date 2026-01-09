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

const texts = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Digital Forensics Learner"
];

let i = 0;
let j = 0;

function typeEffect() {
  document.querySelector(".typing").textContent =
    texts[i].slice(0, j++);

  if (j > texts[i].length) {
    setTimeout(() => {
      j = 0;
      i = (i + 1) % texts.length;
    }, 2000);
  }

  setTimeout(typeEffect, 120);
}

typeEffect();
