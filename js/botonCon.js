document.addEventListener('DOMContentLoaded', function() {
    var mainGrids = document.querySelectorAll('.ubs-main-grid');
    var infoContainers = document.querySelectorAll('[id^=info-container]');

    mainGrids.forEach(function(mainGrid, index) {
        mainGrid.addEventListener('click', function() {
            var targetInfoContainer = document.getElementById('info-container-' + (index + 1));

            // Cerrar otros contenedores
            infoContainers.forEach(function(infoContainer) {
                if (infoContainer !== targetInfoContainer) {
                    infoContainer.classList.remove('show');
                    infoContainer.style.height = '0';
                    infoContainer.style.opacity = '0';
                    setTimeout(function() {
                        infoContainer.style.display = 'none';
                    }, 300); // Duración de la transición en ms
                }
            });

            // Alternar el contenedor seleccionado
            if (targetInfoContainer.classList.contains('show')) {
                targetInfoContainer.classList.remove('show');
                targetInfoContainer.style.height = '0';
                targetInfoContainer.style.opacity = '0';
                setTimeout(function() {
                    targetInfoContainer.style.display = 'none';
                }, 300); // Duración de la transición en ms
            } else {
                targetInfoContainer.style.display = 'block';
                setTimeout(function() {
                    targetInfoContainer.classList.add('show');
                    targetInfoContainer.style.height = '200px';
                    targetInfoContainer.style.opacity = '1';
                }, 10); // Pequeña demora para permitir que display: block; se aplique antes de la transición
            }
        });
    });
});
