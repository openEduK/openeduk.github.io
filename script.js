document.addEventListener("DOMContentLoaded", function() {
    // Manejo de la expansión y colapso de los módulos
    const moduleTitles = document.querySelectorAll('.module-title');

    moduleTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Alternar la clase 'active' para mostrar/ocultar el contenido
            content.classList.toggle('active');

            const isExpanded = content.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px"; // Ajustar a la altura del contenido
                content.style.opacity = 1;
            } else {
                content.style.maxHeight = null;
                content.style.opacity = 0;
            }
        });
    });
});
