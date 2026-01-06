// Fade in sections when scroll into view
const sections = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const text = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Future Digital Explorer 🌍"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 2000);
  }

  setTimeout(type, 120);
})();
