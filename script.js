// Floating hearts on click
document.addEventListener("click", e => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 1s ease-out forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });
  
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes floatUp {
    to { transform: translateY(-80px); opacity: 0; }
  }`;
  document.head.appendChild(style);
  
  // Reveal reasons
  function revealReason(el) {
    el.innerHTML = "💗 " + el.dataset.text;
    el.style.background = "#ffd6e7";
  }
  
  // Quiz answers
  function checkAnswer(btn, correct) {
    if (correct) {
      btn.innerHTML = "Correct 💖";
      btn.style.background = "green";
    } else {
      btn.innerHTML = "Nope 😜";
      btn.style.background = "gray";
    }
  }
  
  // 🎵 Background music (mobile safe play after first touch)
  const music = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=romantic-ambient-11071.mp3");
  music.loop = true;
  music.volume = 0.6;
  
  function startMusicOnce() {
    music.play().catch(()=>{});
    document.removeEventListener("touchstart", startMusicOnce);
    document.removeEventListener("click", startMusicOnce);
  }
  document.addEventListener("touchstart", startMusicOnce);
  document.addEventListener("click", startMusicOnce);
  
  // ✨ Falling background hearts
  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.className = "heart-bg";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
  setInterval(createFallingHeart, 500);
  
  // 🌙 Secret message only at night
  window.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour <= 5) {
      const msg = document.getElementById("nightMessage");
      if (msg) msg.style.display = "block";
    }
  });
  