document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo (nombre de la persona y posición en el ranking)
    var datosRanking = {
        labels: ['Pablo', 'Roberto', 'Sergio', 'Torrecilla', 'Nico', 'Iñaki', 'Carro'],
        datasets: [{
            label: 'Posición en el Ranking',
            data: [7, 6, 5, 4, 3, 2, 1], // Puedes personalizar estos datos con la posición real de cada persona
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Configuración del gráfico
    var config = {
        type: 'bar',
        data: datosRanking,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Crear el gráfico de barras
    var ctx = document.getElementById('ranking-chart').getContext('2d');
    new Chart(ctx, config);
});
