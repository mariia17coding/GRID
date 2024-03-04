window.onload = function () {
    var data1 = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agost', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: 'Nivel de Glucosa (mg/dL)',
            data: [130, 129, 125, 132, 135, 139, 130, 135, 127, 129, 133, 131],
            backgroundColor: 'rgba(8, 48, 226, 0.952)',
            borderColor: 'rgba(11, 28, 107, 0.836)',
            borderWidth: 1
        }]
    };

    var data2 = {
        labels: ['Hombres', 'Mujeres'],
        datasets: [{
            label: 'Diabetes tipo 2',
            data: [45, 55],
            backgroundColor: ['rgba(123, 171, 229, 0.664)', 'rgba(73, 158, 133, 0.758)'],
            borderColor: ['rgba(73, 111, 158, 0.758)', 'rgba(73, 158, 133, 0.873)'],
            borderWidth: 1
        }]
    };

    var data3 = {
        labels: ['Tipo 1', 'Tipo 2', 'Gestacional'],
        datasets: [{
            label: 'Tipos de diabetes',
            data: [18, 75, 7],
            backgroundColor: ['#c051c4c2', '#4864e0c4', '#faf4a4d0'],
            borderColor: ['#ac29b1e1', '#2942b1e1', '#bbb120ef'],
            borderWidth: 1
        }]
    };

    
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'line',
        data: data1,
    });

    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'pie',
        data: data2,
    });

    var ctx3 = document.getElementById('chart3').getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'pie',
        data: data3,
    });

//dounght
    const datosPaises = {
        labels: ['China', 'India', 'Estados Unidos', 'Brasil', 'México'],
        datasets: [{
            label: 'Incidencia de Diabetes por País',
            data: [116.4, 77, 30.3, 12.5, 12.4], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ]
        }]
    };

    const graficoDoughnut = new Chart(document.getElementById('grafico-doughnut'), {
        type: 'doughnut',
        data: datosPaises,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Incidencia de Diabetes por País'
                }
            }
        }
    });

// Crear el gráfico de dispersión (interpretado como diagrama de Venn)
const graficoDispersion = new Chart(document.getElementById("grafico-dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Relación entre la ingesta de Carbohidratos (raciones) y su efecto en la glucosa a la hora ",
                data: [
                    { x: 3, y: 150 },
                    { x: 5, y: 170 },
                    { x: 4, y: 140 },
                    { x: 3, y: 162 },
                    { x: 2, y: 120 },
                    { x: 1, y: 120 }
                ],
                backgroundColor: "rgba(295, 99, 132, 0.5)"
            }
        ]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Ingesta de Carbohidratos (raciones)'
                }
            },
            y: {
                beginAtZero: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Glucosa en Sangre (mg/dl)'
                }
            }
        }
    }
});



}