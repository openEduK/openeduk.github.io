document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";
    menuContainer.innerHTML = `
    <div style="display: flex; justify-content: space-around;">
    <div class="menu-item" onclick="window.location.href='https://openeduk.github.io/index.html'">Inicio</div>
    <div class="menu-item" onclick="window.location.href='https://openeduk.github.io/cursos.html'">Cursos</div>
    <div class="menu-item" onclick="window.location.href='https://openeduk.github.io/sobre_nosotros.html'">Acerca de</div>
    <div class="menu-item" onclick="window.location.href='https://openeduk.github.io/contactanos.html'">Contáctanos</div>
    </div>
    `;

    document.body.appendChild(menuContainer);

    const footerContainer = document.createElement("div");
    footerContainer.className = "footer";

    footerContainer.innerHTML = `
    <div>
    <p class="footer">&copy; 2025 openEduK. Este proyecto está licenciado bajo la Licencia Pública General de GNU, versión 3 (GPL-3.0).</p>
    <p class="footer"><a href="https://openeduk.github.io/privacidad.html">Política de Privacidad</a> |
    <a href="https://openeduk.github.io/terminos.html">Términos de Servicio</a></p>
    </div>
    `;

    document.body.appendChild(footerContainer);
});
