window.onload = () => { 

document.body.style.opacity = "1"; 

}; 

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");


mainContent.style.display = "none";


openBtn.addEventListener("click", () => { 

music.play().catch(()=>{});


opening.style.opacity = "0";


setTimeout(()=>{ 

opening.style.display="none"; 

mainContent.style.display="block"; 

document.body.style.overflowY="auto"; 

},1000);


});
/* ===========================
COUNTDOWN
=========================== */ 

const weddingDate = new Date("August 16, 2026 10:00:00").getTime(); 

setInterval(() => { 

const now = new Date().getTime(); 

const distance = weddingDate - now; 

if (distance <= 0) return; 

document.getElementById("days").textContent =
Math.floor(distance / (1000 * 60 * 60 * 24)); 

document.getElementById("hours").textContent =
Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 

document.getElementById("minutes").textContent =
Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 

document.getElementById("seconds").textContent =
Math.floor((distance % (1000 * 60)) / 1000); 

}, 1000);
const sections = document.querySelectorAll(".fade-section"); 

const observer = new IntersectionObserver((entries) => { 

entries.forEach(entry => { 

if(entry.isIntersecting){
entry.target.classList.add("show");
} 

}); 

},{
threshold:0.15
}); 

sections.forEach(section => observer.observe(section));
