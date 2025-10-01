const audio = document.getElementById("audio");
const fileInput = document.getElementById("fileInput");
const trackName = document.getElementById("trackName");

document.getElementById("playBtn").addEventListener("click", () => audio.play());
document.getElementById("pauseBtn").addEventListener("click", () => audio.pause());
document.getElementById("stopBtn").addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    trackName.textContent = "Tocando: " + file.name;
  }
});
