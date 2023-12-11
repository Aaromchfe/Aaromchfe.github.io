const warning = document.getElementById("warning");
const audioPlayer = document.getElementById("audioPlayer");
const startAnimationButton = document.getElementById("startAnimationButton");
const backgroundVideo = document.getElementById('backgroundVideo');

let videoPlayed = false;

function startAnimation() {
    audioPlayer.play();
    setTimeout(() => {
        document.body.classList.remove("container");
    }, 1000);
}

startAnimationButton.addEventListener("click", startAnimation);

document.getElementById('startAnimationButton').addEventListener('click', function () {
    this.classList.add('clicked');

    // Verificar si el video aún no se ha reproducido
    if (!videoPlayed) {
        // Mostrar el video
        backgroundVideo.style.opacity = 1;

        // Reproducir el video
        backgroundVideo.play();

        // Cambiar el estado del video a reproducido
        videoPlayed = true;

        // Agregar un evento para reiniciar el video cuando termine
        backgroundVideo.addEventListener('ended', function () {
            // Restablecer el estado del video a no reproducido
            videoPlayed = false;
        }, false);
    }

    // Agregar aquí tu código para iniciar la animación después de que el botón desaparezca
    // Puedes utilizar bibliotecas como anime.js o implementar tus propias animaciones con JavaScript puro
    // Ejemplo con anime.js:
    // anime({ targets: '.tu-elemento-a-animar', translateY: 100, duration: 1000 });
});
