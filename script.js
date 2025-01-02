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

    sections.forEach(section => {
        section.addEventListener('click', () => {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
            const list = section.querySelector('ul');
            if (list.style.display === 'block') {
                list.style.display = 'none';
            } else {
                list.style.display = 'block';
            }
        });
    });
});
