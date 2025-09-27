const btn = document.getElementById('btnMensaje');
const mensaje = document.getElementById('mensajeExtra');

btn.addEventListener('click', () => {
  if (mensaje.classList.contains('mensaje-visible')) {
    mensaje.classList.remove('mensaje-visible');
    btn.textContent = "Ver mensaje especial";
  } else {
    mensaje.classList.add('mensaje-visible');
    btn.textContent = "Ocultar mensaje";
  }
});

const btnAudio = document.getElementById('btnAudio');
const audio = document.getElementById('audioMensaje');

btnAudio.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btnAudio.textContent = '⏸️ Pausar Audio';
  } else {
    audio.pause();
    btnAudio.textContent = '▶️ Reproducir Audio';
  }
});
