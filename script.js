// Loader
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 2000);

// Selection logic
function selectOption(option) {
  if(option === "sweetheart") {
    window.location.href = "home.html";
  } else {
    alert("Only 'My Sweetheart ❤️' can enter 😌");
  }
}

// Love rain
function createHearts() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHearts, 300);
// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 30 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 200);