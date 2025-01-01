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
      
        section.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });
});