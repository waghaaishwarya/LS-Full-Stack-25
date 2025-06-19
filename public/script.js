function showYear(yearId) {
  document.getElementById("yearSelect").style.display = "none";
  document.getElementById(yearId).classList.add("active");
}

function goBack() {
  document.querySelectorAll(".year-section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("yearSelect").style.display = "flex";
}
const music = document.getElementById("bg-music");
const toggle = document.getElementById("musicToggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "🔊 Playing";
  } else {
    music.pause();
    toggle.textContent = "🔇 Paused";
  }
});


