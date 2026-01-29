// Scroll reveal animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill all fields!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    e.target.reset();
  }
});
// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.top = mouseY + "px";
  cursor.style.left = mouseX + "px";
});

// Smooth trailing for follower
function animateFollower() {
  posX += (mouseX - posX) / 6;
  posY += (mouseY - posY) / 6;
  follower.style.top = posY + "px";
  follower.style.left = posX + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();
