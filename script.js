// Typing Effect
const text = "Hi, I'm Sneha Baskaran 👋";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Scroll Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Smooth Scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
