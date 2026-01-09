/* FADE */
document.querySelectorAll(".fade-in").forEach(sec=>{
  window.addEventListener("scroll",()=>{
    if(sec.getBoundingClientRect().top < innerHeight-80)
      sec.classList.add("show");
  });
});

/* TYPING */
const texts=[
  "Computer Science Student",
  "Cyber Security Enthusiast",
  "Digital Forensics Learner"
];
let i=0,j=0;
(function type(){
  document.querySelector(".typing").textContent=texts[i].slice(0,j++);
  if(j>texts[i].length){
    setTimeout(()=>{j=0;i=(i+1)%texts.length},2000);
  }
  setTimeout(type,120);
})();

/* SPORES */
const c=document.getElementById("bg-canvas");
const x=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;

let spores=[...Array(120)].map(()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  s:Math.random()*2+.5,
  v:Math.random()*.6+.2
}));

(function animate(){
  x.clearRect(0,0,c.width,c.height);
  spores.forEach(p=>{
    p.y-=p.v;
    if(p.y<0)p.y=c.height;
    x.fillStyle="rgba(180,0,0,.6)";
    x.beginPath();
    x.arc(p.x,p.y,p.s,0,Math.PI*2);
    x.fill();
  });
  requestAnimationFrame(animate);
})();

/* LIGHTNING */
const lightning=document.querySelector(".lightning");
setInterval(()=>{
  if(Math.random()>.65){
    lightning.style.opacity=.9;
    setTimeout(()=>lightning.style.opacity=0,80);
  }
},3000);

/* BLOOD FOG SCROLL */
window.addEventListener("scroll",()=>{
  document.querySelector(".blood-fog").style.opacity=
    Math.min(.6,scrollY/800);
});

/* SOUND */
const audio=document.getElementById("ambient-sound");
document.getElementById("sound-toggle").onclick=()=>{
  audio.paused?audio.play():audio.pause();
};

window.addEventListener("resize",()=>{
  c.width=innerWidth;
  c.height=innerHeight;
});
