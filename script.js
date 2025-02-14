// Leer mensaje personalizado desde la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURIComponent(messageCustom);
}

// Elementos interactivos
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const heartElement = document.querySelector('.heart');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1; // Ahora la tapa queda detrás
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    heartElement.style.display = 'block'; // Mostrar el corazón
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');
    heartElement.style.display = 'none'; // Ocultar el corazón
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("backgroundMusic");
    const playBtn = document.getElementById("playMusic");
    const pauseBtn = document.getElementById("pauseMusic");

    playBtn.addEventListener("click", () => {
        music.play()
            .then(() => console.log("Música reproduciéndose"))
            .catch(error => console.error("Error al reproducir el audio:", error));
    });

    pauseBtn.addEventListener("click", () => {
        music.pause();
    });
});


function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.innerHTML = "💖";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Diferentes velocidades
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Generar corazones cada 500ms
  setInterval(createFallingHeart, 500);
  