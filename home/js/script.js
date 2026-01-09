/* FADE IN */
const sections = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  sections.forEach(s => {
    if (s.getBoundingClientRect().top < window.innerHeight - 80) {
      s.classList.add("show");
    }
  });
});

/* TYPING */
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
    setTimeout(() => { j = 0; i = (i + 1) % texts.length; }, 2000);
  }
  setTimeout(typeEffect, 120);
}
typeEffect();

/* SPORES BACKGROUND */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let spores = [];
class Spore {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speed = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.fillStyle = "rgba(180,0,0,0.6)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) spores.push(new Spore());

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  spores.forEach(s => { s.update(); s.draw(); });
  requestAnimationFrame(animate);
}
animate();

/* ⚡ LIGHTNING FLASHES */
const lightning = document.querySelector(".lightning");

setInterval(() => {
  if (Math.random() > 0.6) {
    lightning.style.opacity = 0.8;
    setTimeout(() => lightning.style.opacity = 0, 80);
  }
}, 3000);

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
