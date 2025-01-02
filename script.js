document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombre-proyecto').innerText = data.proyecto;
            document.getElementById('extension').innerText = data.extension;
            document.getElementById('correo').innerText = data.correo;
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
