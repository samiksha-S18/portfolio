/* Scroll reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* Contact form */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Message sent successfully!";
});

/* Typing effect */
const text = "Samiksha Khiratkar";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

/* Animated cursor */
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animate() {
  posX += (mouseX - posX) / 8;
  posY += (mouseY - posY) / 8;
  follower.style.left = posX + "px";
  follower.style.top = posY + "px";
  requestAnimationFrame(animate);
}
animate();
