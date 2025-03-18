const btnRedes = document.getElementById('btnRedes');
const modal = document.getElementById('menuRedes');
const closeBtn = document.querySelector('.close-btn');

// Mostrar el modal al hacer clic en el botón
btnRedes.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Abrir las redes sociales al hacer clic en las opciones del menú
document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/tuPerfil', '_blank');
    modal.style.display = 'none'; // Cerrar el modal
});

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://www.twitter.com/tuPerfil', '_blank');
    modal.style.display = 'none'; // Cerrar el modal
});

document.getElementById('instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com/tuPerfil', '_blank');
    modal.style.display = 'none'; // Cerrar el modal
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


