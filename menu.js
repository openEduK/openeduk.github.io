document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu"; // Agregar clase para el menú
    menuContainer.style.position = "fixed"; // Fijo en la parte superior
    menuContainer.style.top = "0";
    menuContainer.style.left = "0";
    menuContainer.style.right = "0";
    menuContainer.style.zIndex = "1000";
    menuContainer.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

    menuContainer.innerHTML = `
    <div style="display: flex; justify-content: space-around;">
    <div class="menu-item" onclick="window.location.href='index.html'">Inicio</div>
    <div class="menu-item" onclick="window.location.href='cursos.html'">Cursos</div>
    <div class="menu-item" onclick="window.location.href='sobre_nosotros.html'">Acerca de</div>
    <div class="menu-item" onclick="window.location.href='contactanos.html'">Contáctanos</div>
    </div>
    `;

    document.body.appendChild(menuContainer);
});
