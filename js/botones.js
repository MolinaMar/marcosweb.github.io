function toggleParagraph(id) {
    const paragraph = document.getElementById(id);
    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
        paragraph.style.opacity = 0;
    } else {
        // Muestra los parrafos
        const allParagraphs = document.querySelectorAll('.paragraph-content');
        allParagraphs.forEach(p => {
            p.style.display = "none";
            p.style.opacity = 0;
        });

        // Muestra el parrafo seleccionado
        paragraph.style.display = "block";
        setTimeout(() => {
            paragraph.style.opacity = 1;
        }, 10);
    }
}
