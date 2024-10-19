
document.addEventListener('DOMContentLoaded', function() {
    const titulos = document.querySelectorAll('.titulo-bloque');

    titulos.forEach(titulo => {
        titulo.addEventListener('click', function() {
            const bloqueId = this.getAttribute('data-bloque');
            const contenido = document.getElementById(bloqueId);

            // Alternar visibilidad del contenido
            if (contenido.style.display === 'block') {
                contenido.style.display = 'none';
            } else {
                contenido.style.display = 'block';
            }
        });
    });
});