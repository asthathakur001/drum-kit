// Mapping keys to sound files
const drumSounds = {
  A: "sounds/kick.wav",
  S: "sounds/snare.wav",
  D: "sounds/hihat.wav",
  F: "sounds/tom.wav",
  G: "sounds/crash.wav"
};

// Play sound on key press
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (drumSounds[key]) {
    playSound(key);
  }
});

// Play sound on click
document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", () => {
    const key = drum.getAttribute("data-key");
    playSound(key);
  });
});

function playSound(key) {
  const audio = new Audio(drumSounds[key]);
  audio.currentTime = 0; // rewind to start
  audio.play();

  // Add visual effect
  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);
  if (drumElement) {
    drumElement.classList.add("active");
    setTimeout(() => {
      drumElement.classList.remove("active");
    }, 150);
  }
}
