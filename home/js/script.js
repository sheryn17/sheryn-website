/* FADE IN */
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

/* TYPING EFFECT */
const texts = [
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Digital Forensics Learner"
];

let i = 0, j = 0;

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

/* STRANGER THINGS BACKGROUND */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spores = [];

class Spore {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speed = Math.random() * 0.6 + 0.2;
    this.opacity = Math.random() * 0.6 + 0.2;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180,0,0,${this.opacity})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "red";
    ctx.fill();
  }
}

function init() {
  spores = [];
  for (let i = 0; i < 120; i++) {
    spores.push(new Spore());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spores.forEach(s => {
    s.update();
    s.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

init();
animate();

// Blood fog opacity changes on scroll
const bloodFog = document.querySelector('.blood-fog');

window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  bloodFog.style.opacity = Math.min(scrollPercent * 1.2, 0.7); // max 0.7
});
