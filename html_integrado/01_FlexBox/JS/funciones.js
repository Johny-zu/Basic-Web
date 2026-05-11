const carrusel = document.querySelector('.carrusel');
const flechaIzquierda = document.querySelector('.izquierda');
const flechaDerecha = document.querySelector('.derecha');
let indiceActual = 0;
const totalTarjetas = document.querySelectorAll('.tarjetaCarrusel').length;

function actualizarCarrusel() {
    const desplazamiento = indiceActual * -100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

flechaDerecha.addEventListener('click', () => {
    if (indiceActual < totalTarjetas - 1) {
        indiceActual++;
        actualizarCarrusel();
    }
});

flechaIzquierda.addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarCarrusel();
    }
});