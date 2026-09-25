const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");
const hearts = document.querySelector(".hearts");

openBtn.addEventListener("click", () => {
  document.body.classList.add("opened");

  setTimeout(() => {
    intro.style.display = "none";
    letterSection.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 950);
});

musicBtn.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      musicBtn.querySelector("span").textContent = "Pause our song";
    } catch (e) {
      musicBtn.querySelector("span").textContent = "Add perfect.mp3 first";
    }
  } else {
    song.pause();
    musicBtn.querySelector("span").textContent = "Play our song";
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.25 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 7) + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 13000);
}

setInterval(createHeart, 650);
